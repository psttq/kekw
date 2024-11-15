import * as PIXI from "pixi.js";

const main = async () => {
  // Main app
  let app = new PIXI.Application();

  await app.init();
  document.body.appendChild(app.canvas);

  // Create the sprite and add it to the stage
  await PIXI.Assets.load("../assets/hello-world.png");
  let sprite = PIXI.Sprite.from("../assets/hello-world.png");
  sprite.setSize(100, 100);
  app.stage.addChild(sprite);

  let vx = 0;
  let vy = 0;

  let velocity = 2.0;

  document.addEventListener("keydown", (e: KeyboardEvent): any => {
    switch (e.key) {
      case "a":
        vx = -velocity;
        break;
      case "d":
        vx = velocity;
        break;
      case "w":
        vy = -velocity;
        break;
      case "s":
        vy = velocity;
        break;
    }
  });

  document.addEventListener("keyup", (e: KeyboardEvent): any => {
    switch (e.key) {
      case "a":
      case "d":
        vx = 0;
        break;
      case "w":
      case "s":
        vy = 0;
        break;
    }
  });

  sprite.x = 300;
  sprite.y = 300;
  let pivot = new PIXI.Circle(
    sprite.x + sprite.pivot._x,
    sprite.y + sprite.pivot._y,
    4
  );

  app.stage.addChild(pivot);

  sprite.pivot.set(200, 200);
  // Add a ticker callback to move the sprite back and forth
  let elapsed = 0.0;
  app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    sprite.x += vx * ticker.deltaTime;
    sprite.y += vy * ticker.deltaTime;

    sprite.rotation += 0.01 * ticker.deltaTime;
  });
};

main();
