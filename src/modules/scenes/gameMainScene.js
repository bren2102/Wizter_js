import gameBackground1 from './assets/background.png';

class GameMainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameMainScene' });
  }

  preload() {
    this.load.image('gameBackground1', gameBackground1);
  }

  create() {
    let backgroundImg1 = this.add.image(0, 0, 'gameBackground1');
    backgroundImg1.displayWidth = config.width
    backgroundImg1.displayHeight = config.height;
    backgroundImg1.setOrigin(0, 0);
    backgroundImg1.setScrollFactor(0);
    this.scene.start('gameScene');
  }
}

export default GameMainScene;