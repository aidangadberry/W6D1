const DEFAULTS = {
  DIM_X: 800,
  DIM_Y: 600,
  NUM_ASTEROIDS: 10
};

function Game() {
  this.asteroids = [];
  this.addAsteroids();
  this.draw(document.getElementsByTagName("canvas")[0].getContext("2d"));
}

Game.prototype.randomPosition = function () {
  let x = Math.random() * DEFAULTS.DIM_X;
  let y = Math.random() * DEFAULTS.DIM_Y;
  
  return [x, y];
};

Game.prototype.addAsteroids = function () {
  for (var i = 0; i < DEFAULTS.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({ pos: this.randomPosition(), game: this }));
  }
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);
  
  this.asteroids.forEach((asteroid) => {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach((asteroid) => {
    asteroid.move();
  });
};

Game.prototype.wrap = function (pos) {
  // left & right bound
  if (pos[0] <= -20) {
    pos[0] = DEFAULTS.DIM_X + 20;
  } else if (pos[0] >= DEFAULTS.DIM_X + 20) {
    pos[0] = -20;
  }
  
  // top & bottom bound
  if (pos[1] <= -20) {
    pos[1] = DEFAULTS.DIM_Y + 20;
  } else if (pos[1] >= DEFAULTS.DIM_Y + 20) {
    pos[1] = -20;
  }
  
  return pos;
};

module.exports = Game;