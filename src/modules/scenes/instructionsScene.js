import instructionsBackground from '../../assets/instructionsBackground.png';
import homeButton from '../../assets/homeButton.png';
import Wizard from '../characters/wizard';
import Orc from '../characters/orc';
import Goblin from '../characters/goblin';

/* eslint-disable */
class InstructionsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'instructionsScene' });
    this.wizard;
    this.orc;
    this.goblin;
    this.enemies;
    /* eslint-enable */
  }

  preload() {
    this.load.image('instructionsBackground', instructionsBackground);
    this.load.image('homeButton', homeButton);
    Wizard.load(this);
    Orc.load(this);
    Goblin.load(this);
  }

  create() {
    this.instructionsBackgroundImg = this.add.image(0, this.game.scale.height / 2, 'instructionsBackground');
    this.instructionsBackgroundImg.x = (this.game.scale.width / 2);

    this.home = this.add.image(1080, 100, 'homeButton').setInteractive();
    this.home.on('pointerdown', () => {
      this.scene.start('menuMainScene');
      this.scene.stop();
    });

    this.wizard = new Wizard(this, 650, 320, 'wizardWalking');
    this.wizard.body.setAllowGravity(false);
    this.wizard.animation();
    this.wizard.anims.play('attack');

    this.wizard = new Wizard(this, 380, 320, 'wizardWalking');
    this.wizard.body.setAllowGravity(false);
    this.wizard.animation();
    this.wizard.anims.play('right');

    this.wizard = new Wizard(this, 200, 320, 'wizardWalking');
    this.wizard.body.setAllowGravity(false);
    this.wizard.animation();
    this.wizard.flipX = true;
    this.wizard.anims.play('left');

    const orc = new Orc(this, 1020, 340, 'orcDying');
    orc.body.setAllowGravity(false);
    orc.shooted();
    const goblin = new Goblin(this, 900, 340, 'goblinWalking');
    goblin.body.setAllowGravity(false);
    goblin.shooted();
  }
}

export default InstructionsScene;