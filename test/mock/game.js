import 'phaser';
import GameMainScene from './modules/scenes/gameMainScene';
import MenuMainScene from './modules/scenes/menuMainScene';
import GameOverScene from './modules/scenes/gameOverScene';
import RecordScene from './modules/scenes/recordScene';
import InstructionsScene from './modules/scenes/instructionsScene';

function startGame () {
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
        debug: true,
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

  const game = new Phaser.Game(config);
  
  return game
}

export default startGame;