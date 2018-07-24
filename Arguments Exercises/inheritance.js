Function.prototype.inherits1 = function(parent) {
  function Surrogate(){}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {}
MovingObject.prototype.testMethod = function(){console.log("inherited");};

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

let ship = new Ship();

ship.testMethod();