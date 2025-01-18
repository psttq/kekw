import * as PIXI from "pixi.js";
import { GameObject } from "./GameObject";
import { Player } from "./Player";

// const SERVER_URL = "wss://217.28.221.89:8123";
const SERVER_URL = "ws://localhost:8000";

export class Game {
  pixi_app: PIXI.Application;

  websocket: WebSocket;
  gameObjects: GameObject[];
  addedGameObjects: GameObject[];

  player: Player;

  constructor() {
    this.pixi_app = new PIXI.Application();
    this.gameObjects = [];
    this.addedGameObjects = [];
  }

  sendMessage(str: string) {
    this.websocket.send(str);
  }

  addGameObject(gameObject: GameObject) {
    this.gameObjects.push(gameObject);
    this.pixi_app.stage.addChild(gameObject.sprite);
  }

  removeGameObject(gameObject: GameObject) {
    this.gameObjects = this.gameObjects.filter((x) => x !== gameObject);
    this.pixi_app.stage.removeChild(gameObject.sprite);
  }

  async _init() {
    await this.pixi_app.init();
    document.body.appendChild(this.pixi_app.canvas);
  }

  async _load_assets() {
    await PIXI.Assets.load("./assets/circles/sphere-00.png");
    await PIXI.Assets.load("./assets/circles/sphere-01.png");
    await PIXI.Assets.load("./assets/circles/sphere-02.png");
  }

  async _game_loop(deltaTime: number) {
    //WRITE HERE GAME LOOP CODE
    if (this.addedGameObjects.length !== 0) {
      for (let el of this.addedGameObjects) {
        this.addGameObject(el);
      }
      this.addedGameObjects = [];
    }
  }

  async _init_websocket() {
    this.websocket = new WebSocket(SERVER_URL);
    let pingInterval: NodeJS.Timeout;
    this.websocket.onopen = (e) => {
      console.log("CONNECTED");
    };

    this.websocket.onclose = (e) => {
      console.log("DISCONNECTED");
      clearInterval(pingInterval);
    };

    this.websocket.onmessage = (e) => {
      let data = JSON.parse(e.data);
      console.log(data);
      let playerId = data.playerId;
      let d_gameObjects = data.game.gameObjects;

      let checkedGameObjects: number[] = [];

      if (this.player.id === -1) {
        this.player.id = playerId;
      }

      for (let el of d_gameObjects) {
        checkedGameObjects.push(el.id);
        let go = this.gameObjects.find((x) => x.id == el.id);
        if (!go) {
          let ball_sprite = PIXI.Sprite.from("./assets/circles/sphere-02.png");
          let ball = new GameObject(
            el.id,
            { x: el.position.x, y: el.position.y },
            { width: 50, height: 50 },
            ball_sprite,
            this
          );
          this.addedGameObjects.push(ball);
        } else {
          go.setPosition({ x: el.position.x, y: el.position.y });
        }
      }
      const gameObjectsToDelete = this.gameObjects.filter((x) => {
        return !checkedGameObjects.includes(x.id);
      });

      for (let go of gameObjectsToDelete) {
        this.removeGameObject(go);
      }
    };

    this.websocket.onerror = (e) => {
      console.log(`ERROR: ${e}`);
    };
  }

  async run() {
    await this._init();
    await this._load_assets();
    await this._init_websocket();
    let player_sprite = PIXI.Sprite.from("./assets/circles/sphere-01.png");
    this.player = new Player(
      { x: 50, y: 100 },
      { width: 50, height: 50 },
      player_sprite,
      this
    );
    this.player.id = -1;
    this.addGameObject(this.player);
    this.pixi_app.ticker.add((ticker) => {
      this._game_loop(ticker.deltaTime);
    });
  }
}
