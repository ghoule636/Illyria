import * as Phaser from 'phaser';
import { testScene } from './Scenes/testScene';
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

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sample',
 
  type: Phaser.AUTO,
 
  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  scene:  testScene,

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
 
  parent: 'game',
  backgroundColor: '#ffffff',
};
 
export const game = new Phaser.Game(gameConfig);