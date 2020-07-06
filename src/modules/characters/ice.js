import Phaser from 'phaser';
import ice from '../../assets/ice.png';

/* eslint-disable */
class Ice extends Phaser.Physics.Arcade.Sprite {
  /* eslint-enable */
  constructor(scene, x, y, key, direction) {
    super(scene, x, y, key);
    this.scene = scene;
    this.flipX = direction;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.key = key;
    this.setScale(0.1);
    this.setBounce(0.2);
    this.animation();
    this.setCollideWorldBounds(false);
  }

  static load(scene) {
    scene.load.spritesheet('iceShooting', ice, { frameWidth: 240, frameHeight: 328 });
  }

  animation() {
    this.scene.anims.create({
      key: 'spaceIceShooting',
      frames: [{ key: 'iceShooting', frame: 0 }],
      frameRate: 10,
    });
  }

  shooting() {
    if (this.flipX === true) {
      this.setVelocityX(-1000);
    } else {
      this.setVelocityX(1000);
    }
  }
}
export default Ice;