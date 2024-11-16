import * as PIXI from "pixi.js";
import * as Matter from "matter-js";
import { GameObject } from "./GameObject";
import { Game } from "./Game";

document.body.style.backgroundColor = "#181818";

function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

const main = async () => {
  let game = new Game();
  game.run();
};

main();
