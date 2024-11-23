import * as PIXI from "pixi.js";
import * as Matter from "matter-js";
import { Game } from "./Game";

export type BodyType = "circle" | "rectangle" | "none";

export class GameObject {
  body: Matter.Body;
  sprite: PIXI.Sprite;

  game: Game;

  body_type: BodyType;

  updateRotation: boolean;

  constructor(
    position: Matter.Vector,
    size: Matter.Vector,
    sprite: PIXI.Sprite,
    body_type: BodyType,
    game: Game
  ) {
    this.game = game;

    this.sprite = sprite;
    this.sprite.eventMode = "dynamic";

    this.sprite.anchor = 0.5;

    this.sprite.width = size.x;
    this.sprite.height = size.y;

    this.body_type = body_type;

    this._createDefaultBody();

    this.setPosition(position);

    this.sprite.texture.source.magFilter = "nearest";
    this.sprite.texture.source.minFilter = "nearest";

    this.updateRotation = true;
  }

  setPosition(position: Matter.Vector) {
    Matter.Body.setPosition(this.body, position);
  }

  update(deltaTime: number) {
    if (this.body.position.x < 0) {
      Matter.Body.applyForce(this.body, this.body.position, { x: 5, y: 0 });
    }
    if (this.body.position.y < 0) {
      Matter.Body.applyForce(this.body, this.body.position, { x: 0, y: 5 });
    }
    if (this.body.position.x > this.game.pixi_app.canvas.width) {
      Matter.Body.applyForce(this.body, this.body.position, { x: -5, y: 0 });
    }
    if (this.body.position.y > this.game.pixi_app.canvas.height) {
      Matter.Body.applyForce(this.body, this.body.position, { x: 0, y: -5 });
    }


    this.sprite.x = this.body.position.x;
    this.sprite.y = this.body.position.y;

    if (this.updateRotation) this.sprite.rotation = this.body.angle;

  }

  _createDefaultBody() {
    console.log(this.sprite.width);
    switch (this.body_type) {
      case "circle":
        let radius = (this.sprite.width + this.sprite.height) / 4;
        this.body = Matter.Bodies.circle(0, 0, radius);
        break;
      case "rectangle":
        this.body = Matter.Bodies.rectangle(
          0,
          0,
          this.sprite.width,
          this.sprite.height
        );
        break;
    }
  }
}
