import * as Phaser from 'phaser';
import { testScene } from './Scenes/testScene';

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