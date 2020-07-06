import gOverBackground from '../../assets/gameOverBackground.png';
import scoreInput from '../../assets/html/scoreInput.html';
import apiData from '../../api';

/* eslint-disable */
class GameOverScene extends Phaser.Scene {
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

    const points = document.querySelector('#score');
    
    const name = document.querySelector('#nameInput');
    const submitBtn = document.querySelector('#submitBtn');
    
    submitBtn.addEventListener('click', () => {
      const saveName = name.value;
      this.points = load.score;
      if (saveName.length <= 10) {
        apiData.saveData(saveName, this.points).then((result) => {
          this.scene.start('recordScene');
          this.scene.stop();
        });
      } else {
        name.placeholder = 'Please use less than 10 letters';
      }
    });
    points.innerHTML = load.score;
    /* eslint-enable */
  }
}
export default GameOverScene;