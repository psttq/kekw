import * as PIXI from "pixi.js";

document.body.style.backgroundColor = "#181818";

function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

const main = async () => {
  // Main app
  let app = new PIXI.Application();

  await app.init();
  document.body.appendChild(app.canvas);

  // Create the sprite and add it to the stage
  await PIXI.Assets.load("../assets/player_0.png");
  let sprite = PIXI.Sprite.from("../assets/player_0.png");
  sprite.setSize(100, 100);

  sprite.texture.source.magFilter = "nearest";
  sprite.texture.source.minFilter = "nearest";

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

  sprite.anchor.set(0.5);

  let mouse_x = 0;
  let mouse_y = 0;

  sprite.on("globalmousemove", (event: PIXI.FederatedPointerEvent) => {
    mouse_x = event.x;
    mouse_y = event.y;
  });
  sprite.eventMode = "dynamic";

  let bullets: {
    v_x: number;
    v_y: number;
    life: number;
    geom: PIXI.Graphics;
  }[] = [];

  let bullet_speed = 10.0;

  document.addEventListener("mousedown", (e: MouseEvent) => {
    let vec_x = mouse_x - sprite.x;
    let vec_y = mouse_y - sprite.y;

    let vec_length = Math.sqrt(vec_x * vec_x + vec_y * vec_y);
    vec_x /= vec_length;
    vec_y /= vec_length;

    let grpx = new PIXI.Graphics().circle(sprite.x, sprite.y, 2).fill("red");
    app.stage.addChild(grpx);

    bullets.push({
      v_x: vec_x * bullet_speed,
      v_y: vec_y * bullet_speed,
      life: 50,
      geom: grpx
    });
  });

  // Add a ticker callback to move the sprite back and forth
  let elapsed = 0.0;
  app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    sprite.x += vx * ticker.deltaTime;
    sprite.y += vy * ticker.deltaTime;

    let vec_x = mouse_x - sprite.x;
    let vec_y = mouse_y - sprite.y;

    let vec_length = Math.sqrt(vec_x * vec_x + vec_y * vec_y);
    vec_x /= vec_length;
    vec_y /= vec_length;

    let angle = Math.acos(vec_x);
    if (vec_y < 0) angle *= -1;

    for (let bullet of bullets) {
      if (bullet.life < 0) {
        app.stage.removeChild(bullet.geom);
        removeItem(bullets, bullet);
      }
      bullet.geom.x += bullet.v_x * ticker.deltaTime;
      bullet.geom.y += bullet.v_y * ticker.deltaTime;

      bullet.life -= ticker.deltaTime;
    }

    sprite.rotation = angle;
  });
};

main();
