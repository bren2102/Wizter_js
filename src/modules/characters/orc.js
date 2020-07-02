import 'phaser';
import orcWalk from '../../assets/orcWalk2.png';

class Orc extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key){
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.key = key;
    this.setSize(200, 310);
    this.setScale(.4);
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);
    this.animation();
    // this.move();
  }
  static load(scene) {
    scene.load.spritesheet('orcWalking', orcWalk, { frameWidth: 450, frameHeight: 450 });
  }
  animation() {
    this.scene.anims.create({
      key: 'leftwalk',
      frames: this.scene.anims.generateFrameNumbers('orcWalking', { start: 0, end: 23 }),
      frameRate: 10,
      repeat: -1
    });
  }
  move() {
    this.flipX = true;
    this.anims.play('leftwalk', true);
    this.setVelocityX(-500);
  }
}
export default Orc;