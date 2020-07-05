import gOverBackground from '../../assets/gameOverBackground.png';
import scoreInput from '../../assets/html/scoreInput.html';
import apiData from '../../api';

/* eslint-disable */
class GameOverScene extends Phaser.Scene {
  /* eslint-enable */
  constructor() {
    super({ key: 'gameOverScene' });
  }

  preload() {
    this.load.image('gOverBackground', gOverBackground);
  }

  create() {
    // this.scene.start('gameOverScene');
    apiData.saveData('brenda', 500).then((result) => { console.log(result) });
    this.gOverBackgroundImg = this.add.image(0, this.game.scale.height / 2, 'gOverBackground');
    this.gOverBackgroundImg.x = (this.game.scale.width / 2);

    this.playAgainLabel = this.add.text((this.game.scale.width / 2) + 130, (this.game.scale.height / 2) + 150, 'Press S to play again', {
      font: '20px Arial',
      fill: 'white',
    });
    this.backToMenuLabel = this.add.text((this.game.scale.width / 2) + 130,
      (this.game.scale.height / 2) + 180, 'Press A to go back to the Menu', {
        font: '20px Arial',
        fill: 'white',
      });
    const inputScore = this.add.dom((this.game.scale.width / 2) + 310,
      this.game.scale.height / 2 - 20).createFromHTML(scoreInput);
  }

  update() {
    const keys = this.input.keyboard.addKeys('S, A');
    if (keys.A.isDown) {
      this.scene.start('menuMainScene');
    }
    if (keys.S.isDown) {
      this.scene.start('gameMainScene');
    }
  }
}
export default GameOverScene;