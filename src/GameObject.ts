import * as PIXI from "pixi.js";
import { Game } from "./Game";

export type Position = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export class GameObject {
  sprite: PIXI.Sprite;
  game: Game;
  updateRotation: boolean;
  id: number;

  constructor(
    id: number,
    position: Position,
    size: Size,
    sprite: PIXI.Sprite,
    game: Game
  ) {
    this.game = game;

    this.id = id;

    this.sprite = sprite;
    this.sprite.eventMode = "dynamic";

    this.sprite.position.x = position.x;
    this.sprite.position.y = position.y;

    this.sprite.anchor = 0.5;

    this.sprite.width = size.width;
    this.sprite.height = size.height;

    this.setPosition(position);

    this.sprite.texture.source.magFilter = "nearest";
    this.sprite.texture.source.minFilter = "nearest";

    this.updateRotation = true;
  }

  setPosition(position: Position) {
    this.sprite.position.x = position.x;
    this.sprite.position.y = position.y;
  }

  update(deltaTime: number) {}
}
