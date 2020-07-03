import gameBackground1 from '../../assets/background.png';
import Wizard from '../characters/wizard';
import Orc from '../characters/orc';
import Goblin from '../characters/goblin';
import Ice from '../characters/ice';
import Enemy from '../characters/enemy';

class GameMainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameMainScene' });
    this.wizard;
    this.orc;
    this.ice;
    this.goblin;
    this.enemies;
  }
  preload() {
    this.load.image('gameBackground1', gameBackground1);
    Wizard.load(this);
    Ice.load(this);
    Orc.load(this);
    Goblin.load(this);
  }
  create() {
    let backgroundImg1 = this.add.image(0, 0, 'gameBackground1');
    backgroundImg1.displayWidth = 960;
    backgroundImg1.displayHeight = 540;
    backgroundImg1.setOrigin(0, 0);
    backgroundImg1.setScrollFactor(0);
    
    this.wizard = new Wizard(this, 100, 450, 'wizardWalking');
    this.wizard.animation();
    this.orc = new Orc(this, 950, 450, 'orcWalking');
    this.goblin = new Goblin(this, 650, 450, 'goblinRunning');
    this.orc.move();
    this.goblin.move();
    this.enemies = this.add.group();
    this.enemies.add(this.orc);
    this.enemies.add(this.goblin);
    this.physics.add.collider(this.orc, this.wizard,
      function(orc, wizard) {
        wizard.dies();
        orc.attacks();
      });
    this.physics.add.collider(this.goblin, this.wizard,
      function (goblin, wizard) {
        wizard.dies();
        goblin.attacks();
      });
    const killEnemies = (enemy, ice) => {
      enemy.shooted();
      ice.destroy();
      this.time.addEvent({
        delay: 800,
        callback: function () {
          enemy.destroy();
        },
      });
    }
    // const moveEnemies = (orc, goblin) => {
    //   goblin.move();
    //   orc.move();
    // }
    //this.physics.add.collider(this.enemies, this.enemies.scene, moveEnemies)
    this.physics.add.collider(this.enemies, this.wizard.bullets, killEnemies);
  }
  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
      this.wizard.moves('left');
    } else if (cursors.right.isDown) {
      this.wizard.moves('right');
    } else {
      this.wizard.moves('turn');
    }
    if (cursors.space._justDown) {
      this.wizard.moves('space');
    }
  }
}

export default GameMainScene;