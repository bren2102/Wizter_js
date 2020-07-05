import recordBackground from '../../assets/recordBackground.png';
import recordList from '../../assets/html/recordsList.html';
import apiData from '../../api';

/* eslint-disable */
class RecordScene extends Phaser.Scene {
  /* eslint-enable */
  constructor() {
    super({ key: 'recordScene' });
  }

  preload() {
    this.load.image('recordBackground', recordBackground);
  }

  create() {
    this.recordBackgroundImg = this.add.image(0, this.game.scale.height / 2, 'recordBackground');
    this.recordBackgroundImg.x = (this.game.scale.width / 2);
    const div = this.add.dom((this.game.scale.width / 2) + 240,
      (this.game.scale.height / 2) ).createFromHTML(recordList);
    const player = document.getElementById('player');
    const namePlayer = document.getElementById('nameRecord');
    const scorePlayer = document.getElementById('scoreRecord');
    apiData.checkData(players).then((result) => { console.log(result) });
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
export default RecordScene;