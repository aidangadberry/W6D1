const MovingObject = require("./moving_object");
const Util = require("./util");

const DEFAULTS = {
  COLOR: "black",
  RADIUS: 10,
  SPEED: 3
};

function Asteroid(options) {  
  const attributes = {
    game: options.game,
    pos: options.pos,
    vel: Util.randomVec(DEFAULTS.SPEED),
    radius: DEFAULTS.RADIUS,
    color: DEFAULTS.COLOR
  };
  
  MovingObject.call(this, attributes);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;