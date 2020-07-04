import background1 from '../../assets/background.png';
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
    this.backgroundImg1;
    this.backgroundImg2;
  }
  preload() {
    this.load.image('gamethis.background1', background1);
    this.load.image('gamethis.background2', background1);
    Wizard.load(this);
    Ice.load(this);
    Orc.load(this);
    Goblin.load(this);
  }
  create() {
    this.backgroundImg1 = this.physics.add.image(0, this.game.scale.height / 2, 'gamethis.background1');
    this.backgroundImg2 = this.physics.add.image(0, this.game.scale.height / 2, 'gamethis.background2');
    this.backgroundImg1.body.setAllowGravity(false);
    this.backgroundImg2.body.setAllowGravity(false);
    this.backgroundImg1.displayWidth = 1200;
    this.backgroundImg1.displayHeight = 540;
    this.backgroundImg1.x = (this.game.scale.width /2);
    this.backgroundImg2.displayWidth = 1200;
    this.backgroundImg2.displayHeight = 540;
    this.backgroundImg2.x = this.game.scale.width /2 + this.backgroundImg2.displayWidth;
    this.backgroundImg1.setVelocityX(-200);
    this.backgroundImg2.setVelocityX(-200);
        
    this.wizard = new Wizard(this, 100, 450, 'wizardWalking');
    this.wizard.animation();
    this.orc = new Orc(this, 850, 500, 'orcWalking');
    this.goblin = new Goblin(this, 650, 500, 'goblinRunning');
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
        delay: 600,
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
    //this.cameras.main.setBounds(0, 0, this.displayWidth * 3, this.displayHeight);
  }
  update() {
    if (this.backgroundImg1.x <= -(this.backgroundImg1.displayWidth / 2)) {
      this.backgroundImg1.x = this.game.scale.width / 2 + this.backgroundImg2.displayWidth;
     } else if(this.backgroundImg2.x <= -(this.backgroundImg2.displayWidth / 2)) {
      this.backgroundImg2.x = this.game.scale.width / 2 + this.backgroundImg1.displayWidth;
    }
    //console.log(this.backgroundImg1.x);
    const cursors = this.input.keyboard.createCursorKeys();
    // const cam = this.cameras.main;
    // const camSpeed = 1;
    if (cursors.left.isDown) {
      this.wizard.moves('left');
      //cam.scrollX -= camSpeed;
    } else if (cursors.right.isDown) {
      this.wizard.moves('right');
      //cam.scrollX += camSpeed;
    } else {
      this.wizard.moves('turn');
    }
    if (cursors.space._justDown) {
      this.wizard.moves('space');
    }
  }
}

export default GameMainScene;