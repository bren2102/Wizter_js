import gOverBackground from '../../assets/gameOverBackground.png';
import scoreInput from '../../assets/html/scoreInput.html';
import GameMainScene from './gameMainScene';
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
    const score = document.getElementById('nameInput');
    score.textContent = GameMainScene.getScorePoints();
    const name = document.getElementById('nameInput').value;
    const submitBtn = document.getElementById('submitBtn');
    const points = GameMainScene.getScorePoints;
    console.log(GameMainScene.scorePoints);
    submitBtn.addEventListener('click', () => {
      if (name.length <= 10) {
        apiData.saveData(name, points).then((result) => { console.log(result) });
        this.scene.start('recordScene');
      }
      else {
        name.placeholder = 'Please use less than 10 letters';
      }
    });
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