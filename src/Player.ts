import * as Matter from "matter-js";
import { GameObject } from "./GameObject";
import { FederatedMouseEvent, Sprite } from "pixi.js";

export class Player extends GameObject {
  vx: number;
  vy: number;

  _mouse_x: number;
  _mouse_y: number;

  velocity: number;

  constructor(position: Matter.Vector, size: Matter.Vector, sprite: Sprite) {
    super(position, size, sprite, "circle");
    this.updateRotation = false;

    this.velocity = 20;
    this.vx = 0;
    this.vy = 0;

    document.addEventListener("keydown", (e: KeyboardEvent) =>
      this.handleKeyDown(e.key)
    );

    document.addEventListener("keyup", (e: KeyboardEvent) =>
      this.handleKeyUp(e.key)
    );

    this.sprite.on("globalmousemove", (e: FederatedMouseEvent) => {
      this.handleMouseMove(e.x, e.y);
    });
  }

  handleMouseMove(mouse_x: number, mouse_y: number) {
    this._mouse_x = mouse_x;
    this._mouse_y = mouse_y;
  }

  update(deltaTime: number) {
    let vec_x = this._mouse_x - this.sprite.x;
    let vec_y = this._mouse_y - this.sprite.y;

    let vec_length = Math.sqrt(vec_x * vec_x + vec_y * vec_y);
    vec_x /= vec_length;
    vec_y /= vec_length;

    let angle = Math.acos(vec_x);
    if (vec_y < 0) angle *= -1;

    this.sprite.rotation = angle;

    super.update(deltaTime);
  }

  handleKeyDown(key: string) {
    switch (key) {
      case "a":
        this.vx = -this.velocity;
        break;
      case "d":
        this.vx = this.velocity;
        break;
      case "w":
        this.vy = -this.velocity;
        break;
      case "s":
        this.vy = this.velocity;
        break;
    }
    console.log(this.vx, this.vy);
    Matter.Body.setVelocity(this.body, { x: this.vx, y: this.vy });
  }

  handleKeyUp(key: string) {
    switch (key) {
      case "a":
      case "d":
        this.vx = 0;
        break;
      case "w":
      case "s":
        this.vy = 0;
        break;
    }

    Matter.Body.setVelocity(this.body, { x: this.vx, y: this.vy });
  }
}
