import recordBackground from '../../assets/recordBackground.png';
class RecordScene extends Phaser.Scene {
  constructor() {
    super({ key: 'recordScene' });
  }
  preload() {
    this.load.image('recordBackground', recordBackground);
  }
  create() {
    this.recordBackgroundImg = this.add.image(0, this.game.scale.height / 2, 'recordBackground')
    this.recordBackgroundImg.x = (this.game.scale.width / 2);
  }
  update() {
    let keys = this.input.keyboard.addKeys('S, A');
    if (keys.A.isDown) {
      this.scene.start('menuMainScene');
    }
    if (keys.S.isDown) {
      this.scene.start('gameMainScene');
    }
  }
}
export default RecordScene;