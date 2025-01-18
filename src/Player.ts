import { GameObject, Position, Size } from "./GameObject";
import { FederatedMouseEvent, Sprite } from "pixi.js";
import * as PIXI from "pixi.js";
import { Game } from "./Game";

export class Player extends GameObject {
  vx: number;
  vy: number;

  _mouse_x: number;
  _mouse_y: number;

  ball: GameObject;

  ballRadius: number;

  balls: GameObject[];

  velocity: number;

  timer: number;
  timer_started: boolean;

  game: Game;

  ball_cd: number;

  constructor(position: Position, size: Size, sprite: Sprite, game: Game) {
    super(-1, position, size, sprite, game);
    this.updateRotation = false;

    this.velocity = 20;
    this.ballRadius = 50;
    this.vx = 0;
    this.vy = 0;

    this._mouse_x = 0;
    this._mouse_y = 0;

    this.balls = [];

    this.timer = 0;
    this.ball_cd = 5;
    this.timer_started = false;

    this.game = game;

    let ball_position: Position = { x: 0, y: 0 };
    ball_position.x = position.x;
    ball_position.y = position.y - 70;

    let ball_sprite = PIXI.Sprite.from("./assets/circles/sphere-02.png");
    this.ball = new GameObject(
      0,
      ball_position,
      { width: 50, height: 50 },
      ball_sprite,
      game
    );

    document.addEventListener("keydown", (e: KeyboardEvent) =>
      this.handleKeyDown(e.key)
    );

    document.addEventListener("keyup", (e: KeyboardEvent) =>
      this.handleKeyUp(e.key)
    );

    this.sprite.on("globalmousemove", (e: FederatedMouseEvent) => {
      this.handleMouseMove(e.x, e.y);
    });

    document.addEventListener("mousedown", (e) => {
      this.handleClick();
    });
  }

  handleMouseMove(mouse_x: number, mouse_y: number) {
    this._mouse_x = mouse_x;
    this._mouse_y = mouse_y;
    // this.sprite.position.x = mouse_x;
    // this.sprite.position.y = mouse_y;
    let message = {
      id: this.id,
      mouse_x: this._mouse_x,
      mouse_y: this._mouse_y
    };
    this.game.sendMessage(JSON.stringify(message));
  }

  onTimerEnd() {
    let ball_position: Position = { x: 0, y: 0 };
    ball_position.x = this.sprite.x;
    ball_position.y = this.sprite.y - 70;

    let ball_sprite = PIXI.Sprite.from("./assets/circles/sphere-02.png");
    this.ball = new GameObject(
      0,
      ball_position,
      { width: 50, height: 50 },
      ball_sprite,
      this.game
    );
    this.game.addGameObject(this.ball);
  }

  update(deltaTime: number) {
    if (this.ball) {
      let vec_x = this._mouse_x - this.sprite.x;
      let vec_y = this._mouse_y - this.sprite.y;

      let length = Math.sqrt(vec_x * vec_x + vec_y * vec_y);
      vec_x /= length;
      vec_y /= length;

      let ball_position_x = this.sprite.x + vec_x * (this.ballRadius + 10);
      let ball_position_y = this.sprite.y + vec_y * (this.ballRadius + 10);

      if (Number.isNaN(ball_position_x) || Number.isNaN(ball_position_y))
        return;

      this.ball.setPosition({ x: ball_position_x, y: ball_position_y });
      this.ball.update(deltaTime);
    }

    for (let ball of this.balls) ball.update(deltaTime);

    if (this.timer_started) {
      this.timer -= deltaTime;
      if (this.timer < 0) {
        this.onTimerEnd();
        this.timer_started = false;
      }
    }

    super.update(deltaTime);
  }

  handleClick() {
    if (!this.ball) return;
    let vec_x = this._mouse_x - this.sprite.x;
    let vec_y = this._mouse_y - this.sprite.y;

    let length = Math.sqrt(vec_x * vec_x + vec_y * vec_y);
    vec_x /= length;
    vec_y /= length;

    let force = 60;

    vec_x *= force;
    vec_y *= force;

    // Matter.Body.applyForce(this.ball.body, this.ball.body.position, {
    //   x: vec_x,
    //   y: vec_y
    // });
    this.balls.push(this.ball);
    this.ball = undefined;

    this.timer = this.ball_cd;
    this.timer_started = true;
  }

  handleKeyDown(key: string) {}

  handleKeyUp(key: string) {}
}
