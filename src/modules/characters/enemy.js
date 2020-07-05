import 'phaser';
class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.key = key;
    this.dead = false;
    this.moveVelocity;
    this.iddleId;
    this.moveId;
    this.attackId;
    this.dieId;
    this.setSize(200, 310);
    this.setScale(.4);
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);
    this.animation();
  }
  getIsDead() {
    this.dead;
  }
  iddle() {
    this.flipX = true;
    this.anims.play(this.iddleId, true)
    this.setVelocityX(0);
  }
  move() {
    this.flipX = true;
    this.anims.play(this.moveId, true);
    this.setVelocityX(this.moveVelocity);
  }
  shooted() {
    this.flipX = true;
    this.anims.play(this.dieId, true);
    this.setVelocityX(0);
    this.dead = false;
  }
  attacks() {
    this.flipX = true;
    this.anims.play(this.attackId, true);
    this.setVelocityX(-50)
  }
}
export default Enemy;