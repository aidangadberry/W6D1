const MovingObject = require("./moving_object");
const Asteroid = require("./asteroid");
const Game = require("./game");
const GameView = require("./game_view");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;

document.addEventListener("DOMContentLoaded", function(event) {
  let gv = new GameView(document.getElementById("canvas").getContext("2d"));
  gv.start();
});