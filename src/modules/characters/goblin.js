//import 'phaser';
import Enemy from '../characters/enemy';
import goblinRun from '../../assets/goblinRun.png';
import goblinKick from '../../assets/goblinKick.png';
import goblinDies from '../../assets/goblinDies.png';

class Goblin extends Enemy {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.key = key;
    this.alive = true;
    this.setSize(200, 310);
    this.setScale(.4);
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);
    this.animation();
    this.iddleId = 'goblinIddle';
    this.moveId = 'goblinRuns';
    this.dieId = 'goblinDies';
    this.attackId = 'goblinKicks';
  }
  static load(scene) {
    scene.load.spritesheet('goblinRunning', goblinRun, { frameWidth: 450, frameHeight: 450 });
    scene.load.spritesheet('goblinKicking', goblinKick,{ frameWidth: 450, frameHeight: 450});
    scene.load.spritesheet('goblinDying', goblinDies, { frameWidth: 450, frameHeight: 450 });
  }
  animation(){
    this.scene.anims.create({
      key: 'goblinRuns',
      frames: this.scene.anims.generateFrameNumbers('goblinRunning', {start: 0, end: 11}),
      frameRate: 300,
      repeat: -1
    });
    this.scene.anims.create({
      key: 'goblinKicks',
      frames: this.scene.anims.generateFrameNumbers('goblinKicking', { start: 0, end: 11 }),
      frameRate: 200,
      repeat: 0
    });
    this.scene.anims.create({
      key: 'goblinDies',
      frames: this.scene.anims.generateFrameNumbers('goblinDying', { start: 0, end: 14 }),
      frameRate: 100,
      repeat: 0
    });
    this.scene.anims.create({
      key: 'goblinIddle',
      frames: [{ key: 'goblinRunning', frame: 0 }],
      frameRate: 0
    });
  }
}

export default Goblin;