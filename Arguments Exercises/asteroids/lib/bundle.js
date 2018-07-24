/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\n\nconst DEFAULTS = {\n  COLOR: \"black\",\n  RADIUS: 10,\n  SPEED: 3\n};\n\nfunction Asteroid(options) {  \n  const attributes = {\n    game: options.game,\n    pos: options.pos,\n    vel: Util.randomVec(DEFAULTS.SPEED),\n    radius: DEFAULTS.RADIUS,\n    color: DEFAULTS.COLOR\n  };\n  \n  MovingObject.call(this, attributes);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./lib/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./lib/game_view.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\n  let gv = new GameView(document.getElementById(\"canvas\").getContext(\"2d\"));\n  gv.start();\n});\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const DEFAULTS = {\n  DIM_X: 800,\n  DIM_Y: 600,\n  NUM_ASTEROIDS: 10\n};\n\nfunction Game() {\n  this.asteroids = [];\n  this.addAsteroids();\n  this.draw(document.getElementsByTagName(\"canvas\")[0].getContext(\"2d\"));\n}\n\nGame.prototype.randomPosition = function () {\n  let x = Math.random() * DEFAULTS.DIM_X;\n  let y = Math.random() * DEFAULTS.DIM_Y;\n  \n  return [x, y];\n};\n\nGame.prototype.addAsteroids = function () {\n  for (var i = 0; i < DEFAULTS.NUM_ASTEROIDS; i++) {\n    this.asteroids.push(new Asteroid({ pos: this.randomPosition(), game: this }));\n  }\n};\n\nGame.prototype.draw = function (ctx) {\n  ctx.clearRect(0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);\n  \n  this.asteroids.forEach((asteroid) => {\n    asteroid.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function () {\n  this.asteroids.forEach((asteroid) => {\n    asteroid.move();\n  });\n};\n\nGame.prototype.wrap = function (pos) {\n  // left & right bound\n  if (pos[0] <= -20) {\n    pos[0] = DEFAULTS.DIM_X + 20;\n  } else if (pos[0] >= DEFAULTS.DIM_X + 20) {\n    pos[0] = -20;\n  }\n  \n  // top & bottom bound\n  if (pos[1] <= -20) {\n    pos[1] = DEFAULTS.DIM_Y + 20;\n  } else if (pos[1] >= DEFAULTS.DIM_Y + 20) {\n    pos[1] = -20;\n  }\n  \n  return pos;\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./lib/game.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n  setInterval(() => {\n    this.game.moveObjects();\n    this.game.draw(this.ctx);\n  }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(attributes) {\n  this.game = attributes.game;\n  this.pos = attributes.pos;\n  this.vel = attributes.vel;\n  this.radius = attributes.radius;\n  this.color = attributes.color;  \n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  \n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n  \n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  this.game.wrap(this.pos);\n};\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(child, parent) {\n    child.prototype = Object.create(parent.prototype);\n    child.prototype.constructor = child;\n  },\n  \n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  \n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./lib/util.js?");

/***/ })

/******/ });