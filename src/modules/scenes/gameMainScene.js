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
    this.backgroundImg1.setVelocityX(-100);
    this.backgroundImg2.setVelocityX(-100);

    this.wizard = new Wizard(this, 100, 450, 'wizardWalking');
    this.wizard.animation();
    this.enemies = this.add.group();

    this.time.addEvent({
      delay: 2500,
      loop: true,
      callbackScope: this,
      callback: function(){
        let orc = new Orc(this, 1150, 500, 'orcWalking');
        orc.move();
        this.enemies.add(orc);
        let goblin = new Goblin(this, 950, 500, 'goblinRunning');
        goblin.move();
        this.enemies.add(goblin);
      }
    });
    this.physics.add.collider(this.enemies, this.wizard,
      function(enemy, wizard) {
        wizard.dies();
        enemy.attacks();
      });
    const killEnemies = (enemy, ice) => {
      enemy.shooted();
      ice.destroy();
      this.time.addEvent({
        delay: 600,
        callbackScope: this,
        callback: function () {
          enemy.destroy();
          this.wizard.setPoints(15);          
          console.log(this.wizard.getPoints());
        },
      });
    }
    
    this.physics.add.collider(this.enemies, this.wizard.bullets, killEnemies);
  }
  update() {
    if (this.backgroundImg1.x <= -(this.backgroundImg1.displayWidth / 2)) {
      this.backgroundImg1.x = this.backgroundImg2.x + this.backgroundImg2.displayWidth;
     } else if(this.backgroundImg2.x <= -(this.backgroundImg2.displayWidth / 2)) {
      this.backgroundImg2.x = this.backgroundImg1.x + this.backgroundImg1.displayWidth;
    }
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