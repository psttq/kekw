import * as PIXI from "pixi.js";
import * as Matter from "matter-js";
import { GameObject } from "./GameObject";
import { Player } from "./Player";

export class Game {
  matter_engine: Matter.Engine;
  pixi_app: PIXI.Application;

  player: Player;

  constructor() {
    this.pixi_app = new PIXI.Application();
    this.matter_engine = Matter.Engine.create();
  }

  addGameObject(gameObject: GameObject) {
    this.pixi_app.stage.addChild(gameObject.sprite);
    Matter.Composite.add(this.matter_engine.world, gameObject.body);
  }

  removeGameObject(gameObject: GameObject) {
    this.pixi_app.stage.removeChild(gameObject.sprite);
    Matter.Composite.remove(this.matter_engine.world, gameObject.body);
  }

  async _init() {
    await this.pixi_app.init();
    document.body.appendChild(this.pixi_app.canvas);

    this.matter_engine.world.gravity.y = 0;
  }

  async _load_assets() {
    await PIXI.Assets.load("./assets/circles/sphere-00.png");
    await PIXI.Assets.load("./assets/circles/sphere-01.png");
    await PIXI.Assets.load("./assets/circles/sphere-02.png");

  }

  async _game_loop(deltaTime: number) {
    //WRITE HERE GAME LOOP CODE
  }

  async run() {
    await this._init();
    await this._load_assets();

    let player_sprite = PIXI.Sprite.from("./assets/circles/sphere-00.png");
    this.player = new Player(
      { x: this.pixi_app.canvas.width/2, y: this.pixi_app.canvas.height-35 },
      { x: 50, y: 50 },
      player_sprite,
      this
    );
    this.addGameObject(this.player);
    this.addGameObject(this.player.ball);
    let boxes = [];
    for (let i = 0; i < 70; i++) {
      let box_sprite = PIXI.Sprite.from("./assets/circles/sphere-01.png");
      let box = new GameObject(
        { x: 0 + (55 * i) / 5, y: 50 + 55 * (i % 5) },
        { x: 50, y: 50 },
        box_sprite,
        "circle",
        this
      );

      box.body.frictionAir = 0.5;

      this.addGameObject(box);

      boxes.push(box);
    }

    this.pixi_app.ticker.add((ticker) => {
      this._game_loop(ticker.deltaTime);
      Matter.Engine.update(this.matter_engine, ticker.deltaTime);
      this.player.update(ticker.deltaTime);
      for (let box of boxes) box.update(ticker.deltaTime);
    });
  }
}
