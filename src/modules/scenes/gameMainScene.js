import gameBackground1 from '../../assets/background.png';
import Wizard from '../characters/wizard';
import Orc from '../characters/orc';
import Ice from '../characters/ice';
class GameMainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameMainScene' });
    this.wizard;
    this.orc;
    this.ice;
  }
  preload() {
    this.load.image('gameBackground1', gameBackground1);
    Wizard.load(this);
    Ice.load(this);
    Orc.load(this);
  }
  create() {
    let backgroundImg1 = this.add.image(0, 0, 'gameBackground1');
    backgroundImg1.displayWidth = 960;
    backgroundImg1.displayHeight = 540;
    backgroundImg1.setOrigin(0, 0);
    backgroundImg1.setScrollFactor(0);
    
    this.wizard = new Wizard(this, 100, 450, 'wizardWalking');
    this.wizard.animation();
    this.orc = new Orc(this, 950, 500, 'orcWalking');
    this.orc.move();
    this.physics.add.collider(this.orc, this.wizard,
      function(orc, wizard) {
        wizard.dies();
        orc.attacks();
      });
    const killOrc = (orc, ice) => {
      orc.shooted();
      ice.destroy();
      this.time.addEvent({
        delay: 1000,
        callback: function() {
          orc.destroy();
        },
      });
    }
    this.physics.add.collider(this.orc, this.wizard.bullets, killOrc);
  }
  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
      this.wizard.moves('left');
    } else if (cursors.right.isDown) {
      this.wizard.moves('right');
    } else {
      this.wizard.moves('turn');
    }
    if (cursors.space._justDown) {
      this.wizard.moves('space');
    }
  }
}

export default GameMainScene;