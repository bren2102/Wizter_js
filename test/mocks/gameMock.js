import Phaser from 'phaser';
import GameMainScene from '../../src/modules/scenes/gameMainScene';
import MenuMainScene from '../../src/modules/scenes/menuMainScene';
import GameOverScene from '../../src/modules/scenes/gameOverScene';
import RecordScene from '../../src/modules/scenes/recordScene';
import InstructionsScene from '../../src/modules/scenes/instructionsScene';

const game = (() => {
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
  return { game };
})();

export default game;