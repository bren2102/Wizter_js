import Phaser from 'phaser';
import recordBackground from '../../assets/recordBackground.png';
import recordList from '../../assets/html/recordsList.html';
import apiData from '../../api';

/* eslint-disable */
class RecordScene extends Phaser.Scene {
  
  constructor() {
    super({ key: 'recordScene' });
  }

  preload() {
    this.load.image('recordBackground', recordBackground);
  }

  create() {
    this.recordBackgroundImg = this.add.image(0, this.game.scale.height / 2, 'recordBackground');
    this.recordBackgroundImg.x = (this.game.scale.width / 2);
    this.text = this.add.text(620, 450, 'Press A to go to the Menu', {
      font: '20px Arial',
      fill: 'white',
    });
    const div = this.add.dom((this.game.scale.width / 2) + 240,
      (this.game.scale.height / 2) - 20 ).createFromHTML(recordList);
    /* eslint-enable */
    const scroll = document.getElementById('scrollSection');

    apiData.checkData().then((result) => {
      result.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        }
        if (a.score > b.score) {
          return -1;
        }
        return 0;
      });
      for (let i = 0; i < result.length; i += 1) {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        scroll.appendChild(playerDiv);

        const namePlayer = document.createElement('h3');
        namePlayer.classList.add('nameRecord');
        playerDiv.appendChild(namePlayer);
        playerDiv.textContent = result[i].user;

        const scorePlayer = document.createElement('h3');
        scorePlayer.classList.add('scoreRecord');
        playerDiv.appendChild(scorePlayer);
        scorePlayer.textContent = result[i].score;
      }
    });
  }

  update() {
    const keys = this.input.keyboard.addKeys('A');
    if (keys.A.isDown) {
      this.scene.start('menuMainScene');
      this.scene.stop();
    }
  }
}
export default RecordScene;