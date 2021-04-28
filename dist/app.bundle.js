/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Scenes/testScene.ts":
/*!*********************************!*\
  !*** ./src/Scenes/testScene.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.testScene = void 0;\r\nvar player_1 = __webpack_require__(/*! ../Sprites/player */ \"./src/Sprites/player.ts\");\r\nvar testScene = /** @class */ (function (_super) {\r\n    __extends(testScene, _super);\r\n    function testScene() {\r\n        return _super.call(this, 'SceneTest') || this;\r\n    }\r\n    testScene.prototype.preload = function () {\r\n        this.load.spritesheet(\"player\", \"assets/player_idle.png\", { frameWidth: 64, frameHeight: 64 });\r\n    };\r\n    testScene.prototype.create = function () {\r\n        this.anims.create({\r\n            key: 'player-idle',\r\n            frames: this.anims.generateFrameNumbers('player', { frames: [0, 1, 2, 3, 4] }),\r\n            frameRate: 4,\r\n            repeat: -1\r\n        });\r\n        var player = new player_1.PlayerSprite({ scene: this, x: 100, y: 100 });\r\n    };\r\n    return testScene;\r\n}(Phaser.Scene));\r\nexports.testScene = testScene;\r\n\n\n//# sourceURL=webpack://Illyria/./src/Scenes/testScene.ts?");

/***/ }),

/***/ "./src/Sprites/player.ts":
/*!*******************************!*\
  !*** ./src/Sprites/player.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PlayerSprite = void 0;\r\nvar PlayerSprite = /** @class */ (function (_super) {\r\n    __extends(PlayerSprite, _super);\r\n    function PlayerSprite(config) {\r\n        var _this = _super.call(this, config.scene, config.x, config.y, \"player\") || this;\r\n        _this.scene = config.scene;\r\n        _this.lastAnim = null;\r\n        _this.vel = 200;\r\n        _this.scene.physics.world.enable(_this);\r\n        _this.scene.add.existing(_this);\r\n        var _a = Phaser.Input.Keyboard.KeyCodes, LEFT = _a.LEFT, RIGHT = _a.RIGHT, UP = _a.UP, DOWN = _a.DOWN;\r\n        _this.keys = _this.scene.input.keyboard.addKeys({\r\n            left: LEFT,\r\n            right: RIGHT,\r\n            up: UP,\r\n            down: DOWN,\r\n        });\r\n        return _this;\r\n    }\r\n    PlayerSprite.prototype.preUpdate = function (time, delta) {\r\n        _super.prototype.preUpdate.call(this, time, delta);\r\n        var keys = this.keys;\r\n        var animationName = 'player-idle';\r\n        if (keys.left.isDown) {\r\n            this.body.velocity.x = -this.vel;\r\n            this.setFlipX(true);\r\n        }\r\n        else if (keys.right.isDown) {\r\n            this.body.velocity.x = this.vel;\r\n            this.setFlipX(false);\r\n        }\r\n        else {\r\n            this.body.velocity.x = 0;\r\n        }\r\n        if (keys.up.isDown) {\r\n            this.body.velocity.y = -this.vel;\r\n        }\r\n        else if (keys.down.isDown) {\r\n            this.body.velocity.y = this.vel;\r\n        }\r\n        else {\r\n            this.body.velocity.y = 0;\r\n        }\r\n        // TODO: Clean this up\r\n        // if (keys.up.isDown || keys.down.isDown || keys.left.isDown || keys.right.isDown) {\r\n        //   animationName = \"player-walk\";\r\n        // } else {\r\n        animationName = 'player-idle';\r\n        if (this.lastAnim !== animationName) {\r\n            this.lastAnim = animationName;\r\n            this.anims.play(animationName, true);\r\n        }\r\n    };\r\n    return PlayerSprite;\r\n}(Phaser.GameObjects.Sprite));\r\nexports.PlayerSprite = PlayerSprite;\r\n\n\n//# sourceURL=webpack://Illyria/./src/Sprites/player.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.game = void 0;\r\nvar Phaser = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\r\nvar testScene_1 = __webpack_require__(/*! ./Scenes/testScene */ \"./src/Scenes/testScene.ts\");\r\n// const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {\r\n//     active: false,\r\n//     visible: false,\r\n//     key: 'Game',\r\n//   };\r\n//   export class GameScene extends Phaser.Scene {\r\n//     private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };\r\n//     constructor() {\r\n//       super(sceneConfig);\r\n//     }\r\n//     public create() {\r\n//       this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any;\r\n//       this.physics.add.existing(this.square);\r\n//     }\r\n//     public update() {\r\n//         // const cursorKeys = this.input.keyboard.addKeys({ \r\n//         //     'up': Phaser.Input.Keyboard.KeyCodes.W,\r\n//         //     'down': Phaser.Input.Keyboard.KeyCodes.S,\r\n//         //     'left': Phaser.Input.Keyboard.KeyCodes.A,\r\n//         //     'right': Phaser.Input.Keyboard.KeyCodes.D });\r\n//         //     console.log(cursorKeys);\r\n//         const cursorKeys = this.input.keyboard.createCursorKeys();\r\n//         if (cursorKeys.up.isDown) {\r\n//           this.square.body.setVelocityY(-500);\r\n//         } else if (cursorKeys.down.isDown) {\r\n//           this.square.body.setVelocityY(500);\r\n//         } else {\r\n//           this.square.body.setVelocityY(0);\r\n//         }\r\n//         if (cursorKeys.right.isDown) {\r\n//           this.square.body.setVelocityX(500);\r\n//         } else if (cursorKeys.left.isDown) {\r\n//           this.square.body.setVelocityX(-500);\r\n//         } else {\r\n//           this.square.body.setVelocityX(0);\r\n//         }\r\n//     }\r\n//   }\r\nvar gameConfig = {\r\n    title: 'Sample',\r\n    type: Phaser.AUTO,\r\n    scale: {\r\n        width: window.innerWidth,\r\n        height: window.innerHeight,\r\n    },\r\n    scene: testScene_1.testScene,\r\n    physics: {\r\n        default: 'arcade',\r\n        arcade: {\r\n            debug: true,\r\n        },\r\n    },\r\n    parent: 'game',\r\n    backgroundColor: '#000000',\r\n};\r\nexports.game = new Phaser.Game(gameConfig);\r\n\n\n//# sourceURL=webpack://Illyria/./src/main.ts?");

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./log\": \"./node_modules/webpack/hot/log.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\";\n\n//# sourceURL=webpack://Illyria/./node_modules/webpack/hot/_sync_nonrecursive_^\\.\\/log$?");

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