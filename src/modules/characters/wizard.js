import 'phaser';
import wizardWalk from '../../assets/wizardWalk.png';
class Wizard extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.key = key;
    this.setScale(.4);
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);
    // this.setData("type", type);
    // this.setData("isDead", false);
  }
  static load(x) {
    x.load.spritesheet('wizardWalking', wizardWalk, { frameWidth: 409, frameHeight: 420 });
  }
  animation(keySide) {
    if(keySide == 'left') {
      this.scene.anims.create({
        key: 'left',
        frames: this.scene.anims.generateFrameNumbers('wizardWalking', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1
      });
    }
    if(keySide == 'turn') {
      this.scene.anims.create({
        key: 'turn',
        frames: [{ key: 'wizardWalking', frame: 2 }],
        frameRate: 20
      });
    }
    if(keySide == 'right') {
      this.scene.anims.create({
        key: 'right',
        frames: this.scene.anims.generateFrameNumbers('wizardWalking', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1
      });
    }
  }
  moves(direction) {
    if(direction == 'left') {
      this.setVelocityX(-160);
      this.flipX = true;
      this.anims.play('left', true);
    }
    if(direction == 'right') {
      this.setVelocityX(160);
      this.flipX = false;
      this.anims.play('right', true);
    }
    if(direction == 'turn') {
      this.setVelocityX(0);
      this.anims.play('turn');
    }
  }
}
export default Wizard;