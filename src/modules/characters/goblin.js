import Enemy from './enemy';
import goblinRun from '../../assets/goblinRun.png';
import goblinAttack from '../../assets/goblinAttack.png';
import goblinDies from '../../assets/goblinDies.png';

class Goblin extends Enemy {
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
    this.moveVelocity = -180;
    this.moveId = 'goblinRuns';
    this.dieId = 'goblinDies';
    this.attackId = 'goblinAttacks';
  }

  static load(scene) {
    scene.load.spritesheet('goblinRunning', goblinRun, { frameWidth: 450, frameHeight: 450 });
    scene.load.spritesheet('goblinAttacking', goblinAttack, { frameWidth: 450, frameHeight: 450 });
    scene.load.spritesheet('goblinDying', goblinDies, { frameWidth: 450, frameHeight: 450 });
  }

  animation() {
    this.scene.anims.create({
      key: 'goblinRuns',
      frames: this.scene.anims.generateFrameNumbers('goblinRunning', { start: 0, end: 11 }),
      frameRate: 50,
      repeat: -1,
    });
    this.scene.anims.create({
      key: 'goblinAttacks',
      frames: this.scene.anims.generateFrameNumbers('goblinAttacking', { start: 0, end: 11 }),
      frameRate: 200,
      repeat: 0,
    });
    this.scene.anims.create({
      key: 'goblinDies',
      frames: this.scene.anims.generateFrameNumbers('goblinDying', { start: 0, end: 14 }),
      frameRate: 50,
      repeat: 0,
    });
  }
}

export default Goblin;