import gameBackground1 from '../../assets/background.png';
import Wizard from '../characters/wizard';
class GameMainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameMainScene' });
    this.wizard;
  }

  preload() {
    this.load.image('gameBackground1', gameBackground1);
    Wizard.load(this);
  }
  create() {
    let backgroundImg1 = this.add.image(0, 0, 'gameBackground1');
    backgroundImg1.displayWidth = 960;
    backgroundImg1.displayHeight = 540;
    backgroundImg1.setOrigin(0, 0);
    backgroundImg1.setScrollFactor(0);
    this.wizard = new Wizard(this, 100, 450, 'wizardWalking');
    // this.scene.start('gameScene');
    this.wizard.animation('left');
    this.wizard.animation('right');
    this.wizard.animation('turn');
  }
  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
      this.wizard.moves('left');
    }
    else if (cursors.right.isDown) {
      this.wizard.moves('right');
    }
    else {
      this.wizard.moves('turn');
    }
  }
}

export default GameMainScene;