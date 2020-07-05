import gOverBackground from '../../assets/gameOverBackground.png';
class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameOverScene' });
  }
  preload() {
    this.load.image('gOverBackground', gOverBackground);
  }
  create() {
    //this.scene.start('gameOverScene');
    this.gOverBackgroundImg = this.add.image(0, this.game.scale.height / 2, 'gOverBackground')
    this.gOverBackgroundImg.x = (this.game.scale.width / 2);

    this.playAgainLabel = this.add.text((this.game.scale.width / 2) + 120, (this.game.scale.height / 2) + 150, 'Press S to play again', {
      font: '20px Arial',
      fill: 'white'
    });
    this.backToMenuLabel = this.add.text((this.game.scale.width / 2) + 120, (this.game.scale.height / 2) + 180, 'Press A to go back to the Menu', {
      font: '20px Arial',
      fill: 'white'
    });
  }
  update() {
    let keys = this.input.keyboard.addKeys('S, A');
    if (keys.A.isDown) {
      this.scene.start('menuMainScene');
    }
    if(keys.S.isDown) {
      this.scene.start('gameMainScene');
    }
  }
}
export default GameOverScene;