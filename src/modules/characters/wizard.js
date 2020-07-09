import Phaser from 'phaser';
import wizardWalk from '../../assets/wizardWalk.png';
import Ice from './ice';
import wizardMagic from '../../assets/wizardMagic.png';
import wizardDie from '../../assets/wizardDie.png';

class Wizard extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.key = key;
    this.attack = false;
    this.isDead = false;
    this.bullets = this.scene.add.group();
    this.setSize(350, 380);
    this.setScale(0.4);
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);
  }

  static load(scene) {
    scene.load.spritesheet('wizardWalking', wizardWalk, { frameWidth: 698, frameHeight: 483 });
    scene.load.spritesheet('wizardMagic', wizardMagic, { frameWidth: 698, frameHeight: 483 });
    scene.load.spritesheet('wizardDie', wizardDie, { frameWidth: 373, frameHeight: 411 });
  }

  animation() {
    this.scene.anims.create({
      key: 'left',
      frames: this.scene.anims.generateFrameNumbers('wizardWalking', { start: 0, end: 4 }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: 'turn',
      frames: [{ key: 'wizardWalking', frame: 2 }],
      frameRate: 0,
    });
    this.scene.anims.create({
      key: 'right',
      frames: this.scene.anims.generateFrameNumbers('wizardWalking', { start: 0, end: 4 }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: 'space',
      frames: this.scene.anims.generateFrameNumbers('wizardMagic', { start: 0, end: 4 }),
      frameRate: 50,
      repeat: 0,
    });
    this.scene.anims.create({
      key: 'attack',
      frames: this.scene.anims.generateFrameNumbers('wizardMagic', { start: 0, end: 4 }),
      frameRate: 50,
      repeat: -1,
    });
    this.scene.anims.create({
      key: 'dies',
      frames: this.scene.anims.generateFrameNumbers('wizardDie', { start: 0, end: 4 }),
      frameRate: 50,
      repeat: 0,
    });

    this.on('animationcomplete', this.attackingComplete, this);
  }

  /* eslint-disable */
  attackingComplete(animation, frame) {
    
    switch (animation.key) {
      case 'space': {
        this.attack = false;
        const ice = new Ice(this.scene, this.body.x + ((this.flipX) ? 0 : 200), this.body.y + (this.body.height / 2), 'iceShooting', this.flipX);
        ice.shooting();
        this.bullets.add(ice);
      }
      default: {
        break;
      }
    }
  }
  /* eslint-enable */

  dies() {
    this.anims.play('dies', true);
    this.setVelocityX(0);
    this.isDead = true;
  }

  getIsDead() {
    return this.isDead;
  }

  moves(direction) {
    if (this.attack === true) {
      return;
    }
    if (this.isDead === false) {
      if (direction === 'space') {
        this.setSize(350, 380);
        this.anims.play('space', true);
        this.attack = true;
        this.setVelocityX(0);
      }
      if (direction === 'left') {
        this.setVelocityX(-160);
        this.flipX = true;
        this.anims.play('left', true);
      }
      if (direction === 'right') {
        this.setVelocityX(160);
        this.flipX = false;
        this.anims.play('right', true);
      }
      if (direction === 'turn') {
        this.anims.play('turn');
        this.setVelocityX(0);
      }
    }
  }
}
export default Wizard;