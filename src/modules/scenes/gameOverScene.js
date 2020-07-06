import gOverBackground from '../../assets/gameOverBackground.png';
import scoreInput from '../../assets/html/scoreInput.html';
import GameMainScene from './gameMainScene';
import apiData from '../../api';

/* eslint-disable */
class GameOverScene extends Phaser.Scene {
  /* eslint-enable */
  constructor() {
    super({ key: 'gameOverScene' });
    this.points;
  }

  preload() {
    this.load.image('gOverBackground', gOverBackground);
  }

  create(load) {
    this.gOverBackgroundImg = this.add.image(0, this.game.scale.height / 2, 'gOverBackground');
    this.gOverBackgroundImg.x = (this.game.scale.width / 2);

    const inputScore = this.add.dom((this.game.scale.width / 2) + 310,
      this.game.scale.height / 2 - 20).createFromHTML(scoreInput);
    document.clear();
    const points = document.getElementById('score');
     points.innerHTML = load.score;
    const name = document.getElementById('nameInput');
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', () => {
      const saveName = name.value;
      this.points = load.score
      if (saveName.length <= 10) {
        apiData.saveData(saveName, this.points).then((result) => { console.log(result) });
        this.scene.start('recordScene');
      }
      else {
        name.placeholder = 'Please use less than 10 letters';
      }
    });
  }
}
export default GameOverScene;