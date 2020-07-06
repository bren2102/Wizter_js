import orcWalk from '../../assets/orcWalk2.png';
import orcDie from '../../assets/orcDies.png';
import orcAttack from '../../assets/orcAttack.png';
import Enemy from './enemy';

/* eslint-disable */
class Orc extends Enemy {
  /* eslint-enable */
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.key = key;
    this.setScale(0.4);
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);
    this.animation();
    this.moveVelocity = -100;
    this.moveId = 'orcWalks';
    this.dieId = 'orcDies';
    this.attackId = 'orcAttacks';
  }

  static load(scene) {
    scene.load.spritesheet('orcWalking', orcWalk, { frameWidth: 450, frameHeight: 450 });
    scene.load.spritesheet('orcDying', orcDie, { frameWidth: 450, frameHeight: 450 });
    scene.load.spritesheet('orcAttacking', orcAttack, { frameWidth: 450, frameHeight: 450 });
  }

  animation() {
    this.scene.anims.create({
      key: 'orcWalks',
      frames: this.scene.anims.generateFrameNumbers('orcWalking', { start: 0, end: 23 }),
      frameRate: 200,
      repeat: -1,
    });

    this.scene.anims.create({
      key: 'orcDies',
      frames: this.scene.anims.generateFrameNumbers('orcDying', { start: 0, end: 14 }),
      frameRate: 50,
      repeat: 0,
    });
    this.scene.anims.create({
      key: 'orcAttacks',
      frames: this.scene.anims.generateFrameNumbers('orcAttacking', { start: 0, end: 11 }),
      frameRate: 100,
      repeat: 0,
    });
  }
}
export default Orc;