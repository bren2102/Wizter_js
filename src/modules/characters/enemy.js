import Phaser from 'phaser';

/* eslint-disable */
class Enemy extends Phaser.Physics.Arcade.Sprite {
  /* eslint-enable */
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.key = key;
    this.dead = false;
    /* eslint-disable */
    this.moveVelocity;
    this.iddleId;
    this.moveId;
    this.attackId;
    this.dieId;
    /* eslint-enable */
    this.setSize(100, 310);
    this.setScale(0.4);
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);
    this.animation();
  }

  getIsDead() {
    return this.dead;
  }

  iddle() {
    this.flipX = true;
    this.anims.play(this.iddleId, true);
    this.setVelocityX(0);
  }

  move() {
    this.flipX = true;
    this.anims.play(this.moveId, true);
    this.setVelocityX(this.moveVelocity);
  }

  shooted() {
    this.dead = true;
    this.flipX = true;
    this.anims.play(this.dieId, true);
    this.setVelocityX(0);
  }

  attacks() {
    this.flipX = true;
    this.anims.play(this.attackId, true);
    this.setVelocityX(-50);
  }
}
export default Enemy;