import * as PIXI from "pixi.js";
import * as Matter from "matter-js";

document.body.style.backgroundColor = "#181818";

function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

const main = async () => {
  let Engine = Matter.Engine,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite;

  let engine = Engine.create();

  engine.world.gravity.y = 0;

  // Main app
  let app = new PIXI.Application();

  await app.init();
  document.body.appendChild(app.canvas);

  await PIXI.Assets.load("../assets/box.jpg");
  let box_sprite = PIXI.Sprite.from("../assets/box.jpg");
  box_sprite.texture.source.magFilter = "nearest";
  box_sprite.texture.source.minFilter = "nearest";

  box_sprite.setSize(50, 50);

  app.stage.addChild(box_sprite);

  var box_body = Bodies.rectangle(300, 400, 50, 50);
  box_body.frictionAir = 3;

  Composite.add(engine.world, [box_body]);

  // Create the sprite and add it to the stage
  await PIXI.Assets.load("../assets/player_0.png");
  let sprite = PIXI.Sprite.from("../assets/player_0.png");
  sprite.setSize(100, 100);

  sprite.texture.source.magFilter = "nearest";
  sprite.texture.source.minFilter = "nearest";

  app.stage.addChild(sprite);

  let vx = 0;
  let vy = 0;

  let velocity = 30.0;

  sprite.x = 300;
  sprite.y = 300;

  sprite.anchor.set(0.5);

  let sprite_body = Matter.Bodies.circle(sprite.x, sprite.y, 50);
  Composite.add(engine.world, sprite_body);

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

    Body.setVelocity(sprite_body, { x: vx, y: vy });
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

    Body.setVelocity(sprite_body, { x: vx, y: vy });
  });

  let mouse_x = 0;
  let mouse_y = 0;

  sprite.on("globalmousemove", (event: PIXI.FederatedPointerEvent) => {
    mouse_x = event.x;
    mouse_y = event.y;
  });
  sprite.eventMode = "dynamic";

  let bullets: {
    life: number;
    geom: PIXI.Graphics;
    body: Matter.Body;
  }[] = [];

  let bullet_speed = 25;

  document.addEventListener("mousedown", (e: MouseEvent) => {
    let vec_x = mouse_x - sprite.x;
    let vec_y = mouse_y - sprite.y;

    let vec_length = Math.sqrt(vec_x * vec_x + vec_y * vec_y);
    vec_x /= vec_length;
    vec_y /= vec_length;

    let grpx = new PIXI.Graphics().circle(0, 0, 2).fill("red");
    grpx.x = sprite.x + vec_x * 50;
    grpx.y = sprite.y + vec_y * 50;
    app.stage.addChild(grpx);

    let v_x = vec_x * bullet_speed;
    let v_y = vec_y * bullet_speed;
    let bullet_body = Matter.Bodies.circle(grpx.x, grpx.y, 2);
    Body.applyForce(bullet_body, bullet_body.position, { x: v_x, y: v_y });
    Body.setMass(bullet_body, 1);

    console.log(bullet_body.position.x, bullet_body.position.y);

    bullets.push({
      life: 50,
      geom: grpx,
      body: bullet_body
    });

    Composite.add(engine.world, [bullet_body]);
  });

  // Add a ticker callback to move the sprite back and forth
  let elapsed = 0.0;
  app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    // sprite.x += vx * ticker.deltaTime;
    // sprite.y += vy * ticker.deltaTime;

    sprite.x = sprite_body.position.x;
    sprite.y = sprite_body.position.y;
    console.log(sprite.x, sprite.y);

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
        Composite.remove(engine.world, bullet.body);
        removeItem(bullets, bullet);
      }
      bullet.geom.x = bullet.body.position.x;
      bullet.geom.y = bullet.body.position.y;

      bullet.life -= ticker.deltaTime;
    }

    box_sprite.x = box_body.position.x - box_sprite.width / 2;
    box_sprite.y = box_body.position.y - box_sprite.height / 2;

    box_sprite.rotation = box_body.angle;
    console.log(box_body.angle);

    sprite.rotation = angle;

    Matter.Engine.update(engine, ticker.deltaTime);
  });
};

main();
