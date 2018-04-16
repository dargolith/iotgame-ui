/* eslint-disable prettier/prettier */
// import * as PIXI from 'pixi.js';
import Gamemode from './Gamemode';
import BasicCircle from '../entities/BasicCircle';
import BasicLine from '../entities/BasicLine';

/*
  Hockey gamemode, get the ball into the other teams goal!
*/
class Hockey extends Gamemode {
  constructor(game) {
    super(game);

    this.game.respawnHandler.registerRespawnListener(this);

    this.players = {};
    this.team1 = [];
    this.team2 = [];
    // this.respawn = {};

    // this.tags = {};

    const ball = new BasicCircle(this.game.app, 20, 0.5, 0xdddddd);
    ball.x = 800;
    ball.y = 400;
    ball.collisionGroup = 4;
    this.game.entityHandler.register(ball);
    this.ball = ball;

    this.addLine(0, 0, this.game.app.screen.width, 0);
    this.addLine(
      this.game.app.screen.width,
      0,
      this.game.app.screen.width,
      this.game.app.screen.height,
    ).collisionGroup = 4;
    this.addLine(0, 0, 0, this.game.app.screen.height).collisionGroup = 4;
    this.addLine(
      0,
      this.game.app.screen.height,
      this.game.app.screen.width,
      this.game.app.screen.height,
    );
  }

  addLine(x, y, ex, ey) {
    const line = new BasicLine(this.game.app, x, y, ex, ey, 0x6633ff);
    line.staticFriction = 0;
    line.dynamicFriction = 0;
    line.restitution = 1;
    line.collisionGroup = 0;
    this.game.entityHandler.register(line);
    return line;
  }

  resetBall() {
    this.ball.resetPhysics();
    this.ball.x = 800;
    this.ball.y = 400;
    this.ball.phase(3);
  }

  /* eslint-disable no-unused-vars, class-methods-use-this */

  // Called before the game objects are updated.
  preUpdate(dt) {

  }

  /* eslint-enable no-unused-vars, class-methods-use-this */

  /* eslint-disable class-methods-use-this, no-unused-vars */

  // Called after the game objects are updated.
  postUpdate(dt) {
    if (this.ball.x < 0) {
      // Team 2 scored!
      this.resetBall();
    } else if (this.ball.x > this.game.app.screen.width) {
      // Team 1 scored!
      this.resetBall();
    }
  }

  // Called when a new player has been created
  onPlayerCreated(playerObject, circle) {
    const { iconID } = playerObject;
    const idTag = playerObject.id;

    this.game.entityHandler.register(circle);

    circle.phase(3);

    this.players[idTag] = circle;

    if (this.team2.length < this.team1.length) {
      // join team 2
      this.team2.push(idTag);
      circle.team = 2;
      circle.collisionGroup = 2;
      circle.setColor(0xff3333);
      circle.x = 700;
      circle.y = 300;
    } else {
      // join team 1
      this.team1.push(idTag);
      circle.team = 1;
      circle.collisionGroup = 1;
      circle.setColor(0x3333ff);
      circle.x = 300;
      circle.y = 300;
    }

    circle.addEntityListener(this);

    circle.collision.addListener((player, victim) => {

    });
  }

  // Called when a player disconnects
  onPlayerLeave(idTag) {

  }

  /* eslint-enable class-methods-use-this, no-unused-vars */

  // Clean up after the gamemode is finished.
  cleanUp() {
    this.game.entityHandler.clear();
    // TODO: Clear respawns
    // this.game.respawnHandler.clear();
  }

  // Called when an entity is respawned.
  onRespawn(entity) {

  }

  // Called when an entity dies.
  onDeath(entity) {

  }

  onWindowResize() {

  }

  /* eslint-disable class-methods-use-this */
}

export default Hockey;
