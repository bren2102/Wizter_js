import Phaser from 'phaser';
import GameMainScene from './modules/scenes/gameMainScene';
import MenuMainScene from './modules/scenes/menuMainScene';
import GameOverScene from './modules/scenes/gameOverScene';
import RecordScene from './modules/scenes/recordScene';
import InstructionsScene from './modules/scenes/instructionsScene';

const config = {
  /* eslint-disable */
  type: Phaser.AUTO,
  /* eslint-enable */
  width: 1200,
  height: 540,
  parent: 'divld',
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [
    MenuMainScene,
    InstructionsScene,
    GameMainScene,
    GameOverScene,
    RecordScene,
  ],
};
/* eslint-disable */
const game = new Phaser.Game(config);
/* eslint-enable */