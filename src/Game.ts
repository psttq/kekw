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
    await PIXI.Assets.load("../assets/box.jpg");
    await PIXI.Assets.load("../assets/player_0.png");
  }

  async _game_loop(deltaTime: number) {
    //WRITE HERE GAME LOOP CODE
  }

  async run() {
    await this._init();
    await this._load_assets();

    let player_sprite = PIXI.Sprite.from("../assets/player_0.png");
    this.player = new Player(
      { x: 300, y: 300 },
      { x: 100, y: 100 },
      player_sprite
    );
    this.addGameObject(this.player);

    let boxes = [];
    for (let i = 0; i < 10; i++) {
      let box_sprite = PIXI.Sprite.from("../assets/box.jpg");
      let box = new GameObject(
        { x: 400 + (55 * i) / 3, y: 300 + 55 * (i % 3) },
        { x: 50, y: 50 },
        box_sprite,
        "rectangle"
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
