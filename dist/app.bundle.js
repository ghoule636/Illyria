/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Scenes/testScene.ts":
/*!*********************************!*\
  !*** ./src/Scenes/testScene.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testScene = void 0;
var player_1 = __webpack_require__(/*! ../Sprites/player */ "./src/Sprites/player.ts");
var testScene = /** @class */ (function (_super) {
    __extends(testScene, _super);
    function testScene() {
        return _super.call(this, 'SceneTest') || this;
    }
    testScene.prototype.preload = function () {
        this.load.spritesheet("player", "assets/player_idle.png", { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("player_walking_forward", "assets/player_walking_forward.png", { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("player_idle_side", "assets/player_idle_right.png", { frameWidth: 64, frameHeight: 64 });
    };
    testScene.prototype.create = function () {
        this.anims.create({
            key: 'player-idle',
            frames: this.anims.generateFrameNumbers('player', { frames: [0, 1, 2, 3, 4] }),
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'player-idle-side',
            frames: this.anims.generateFrameNumbers('player_idle_side', { frames: [0, 1, 2, 3, 4, 5, 6] }),
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'player-walking-forward',
            frames: this.anims.generateFrameNumbers('player_walking_forward', { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
            frameRate: 8,
            repeat: -1
        });
        var player = new player_1.PlayerSprite({ scene: this, x: 100, y: 100 });
    };
    return testScene;
}(Phaser.Scene));
exports.testScene = testScene;


/***/ }),

/***/ "./src/Sprites/player.ts":
/*!*******************************!*\
  !*** ./src/Sprites/player.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerSprite = void 0;
var PlayerSprite = /** @class */ (function (_super) {
    __extends(PlayerSprite, _super);
    function PlayerSprite(config) {
        var _this = _super.call(this, config.scene, config.x, config.y, "player") || this;
        _this.scene = config.scene;
        _this.lastAnim = null;
        _this.vel = 200;
        _this.direction = 'front';
        _this.scene.physics.world.enable(_this);
        _this.scene.add.existing(_this);
        var _a = Phaser.Input.Keyboard.KeyCodes, A = _a.A, D = _a.D, W = _a.W, S = _a.S;
        _this.keys = _this.scene.input.keyboard.addKeys({
            left: A,
            right: D,
            up: W,
            down: S,
        });
        return _this;
    }
    PlayerSprite.prototype.preUpdate = function (time, delta) {
        _super.prototype.preUpdate.call(this, time, delta);
        var keys = this.keys;
        var animationName = 'player-idle';
        if (keys.left.isDown) {
            this.body.velocity.x = -this.vel;
            this.direction = 'side';
            this.setFlipX(true);
        }
        else if (keys.right.isDown) {
            this.body.velocity.x = this.vel;
            this.direction = 'side';
            this.setFlipX(false);
        }
        else {
            this.body.velocity.x = 0;
        }
        if (keys.up.isDown) {
            this.body.velocity.y = -this.vel;
            this.direction = 'back';
        }
        else if (keys.down.isDown) {
            this.direction = 'front';
            this.body.velocity.y = this.vel;
        }
        else {
            this.body.velocity.y = 0;
        }
        // TODO: Clean this up
        if (keys.down.isDown) {
            animationName = "player-walking-forward";
        }
        else if (this.direction == 'side') {
            animationName = 'player-idle-side';
        }
        else {
            animationName = 'player-idle';
        }
        if (this.lastAnim !== animationName) {
            this.lastAnim = animationName;
            this.anims.play(animationName, true);
        }
    };
    return PlayerSprite;
}(Phaser.GameObjects.Sprite));
exports.PlayerSprite = PlayerSprite;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.game = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var testScene_1 = __webpack_require__(/*! ./Scenes/testScene */ "./src/Scenes/testScene.ts");
// const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
//     active: false,
//     visible: false,
//     key: 'Game',
//   };
//   export class GameScene extends Phaser.Scene {
//     private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
//     constructor() {
//       super(sceneConfig);
//     }
//     public create() {
//       this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any;
//       this.physics.add.existing(this.square);
//     }
//     public update() {
//         // const cursorKeys = this.input.keyboard.addKeys({ 
//         //     'up': Phaser.Input.Keyboard.KeyCodes.W,
//         //     'down': Phaser.Input.Keyboard.KeyCodes.S,
//         //     'left': Phaser.Input.Keyboard.KeyCodes.A,
//         //     'right': Phaser.Input.Keyboard.KeyCodes.D });
//         //     console.log(cursorKeys);
//         const cursorKeys = this.input.keyboard.createCursorKeys();
//         if (cursorKeys.up.isDown) {
//           this.square.body.setVelocityY(-500);
//         } else if (cursorKeys.down.isDown) {
//           this.square.body.setVelocityY(500);
//         } else {
//           this.square.body.setVelocityY(0);
//         }
//         if (cursorKeys.right.isDown) {
//           this.square.body.setVelocityX(500);
//         } else if (cursorKeys.left.isDown) {
//           this.square.body.setVelocityX(-500);
//         } else {
//           this.square.body.setVelocityX(0);
//         }
//     }
//   }
var gameConfig = {
    title: 'Sample',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    scene: testScene_1.testScene,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    parent: 'game',
    backgroundColor: '#ffffff',
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkIllyria"] = self["webpackChunkIllyria"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["modules"], () => (__webpack_require__("./src/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["modules"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?http://localhost:8080")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map