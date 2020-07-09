import background1 from '../../assets/background.png';
import Wizard from '../characters/wizard';
import Orc from '../characters/orc';
import Goblin from '../characters/goblin';
import Ice from '../characters/ice';
/* eslint-disable */
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
    this.scoreLabel;
    this.scorePointsLabel;
    /* eslint-enable */
    this.scorePoints = 0;
  }

  preload() {
    this.load.image('background1', background1);
    this.load.image('background2', background1);
    Wizard.load(this);
    Ice.load(this);
    Orc.load(this);
    Goblin.load(this);
  }

  create() {
    this.backgroundImg1 = this.physics.add.image(0, this.game.scale.height / 2, 'background1');
    this.backgroundImg2 = this.physics.add.image(0, this.game.scale.height / 2, 'background2');
    this.backgroundImg1.body.setAllowGravity(false);
    this.backgroundImg2.body.setAllowGravity(false);
    this.backgroundImg1.displayWidth = 1200;
    this.backgroundImg1.displayHeight = 540;
    this.backgroundImg1.x = (this.game.scale.width / 2);
    this.backgroundImg2.displayWidth = 1200;
    this.backgroundImg2.displayHeight = 540;
    this.backgroundImg2.x = this.game.scale.width / 2 + this.backgroundImg2.displayWidth;
    this.backgroundImg1.setVelocityX(-100);
    this.backgroundImg2.setVelocityX(-100);

    this.scoreLabel = this.add.text(20, 20, 'Score:', {
      font: '25px Arial',
      fill: 'white',
    });

    this.wizard = new Wizard(this, 100, 450, 'wizardWalking');
    this.wizard.animation();
    this.enemies = this.add.group();

    this.time.addEvent({
      delay: 2500,
      loop: true,
      callbackScope: this,
      callback: () => {
        const orc = new Orc(this, 1150, 500, 'orcWalking');
        orc.move();
        this.enemies.add(orc);
        const goblin = new Goblin(this, 850, 500, 'goblinRunning');
        goblin.move();
        this.enemies.add(goblin);
      },
    });
    const wizardDead = (enemy) => {
      this.time.addEvent({
        delay: 400,
        callbackScope: this,
        callback: () => {
          this.wizard.destroy();
          enemy.move();
          this.scene.start('gameOverScene', { score: this.scorePoints });
          this.scene.stop();
        },
      });
    };
    this.physics.add.collider(this.enemies, this.wizard,
      (enemy, wizard) => {
        if (wizard.getIsDead() === false) {
          enemy.attacks();
          wizard.dies();
          wizardDead(enemy);
        }
      });

    const killEnemies = (enemy, ice) => {
      if (enemy.getIsDead() === false) {
        enemy.shooted();
        ice.destroy();
        this.scorePoints += 15;
        this.scoreLabel.text = `Score: ${this.scorePoints}`;
        this.time.addEvent({
          delay: 600,
          callbackScope: this,
          callback: () => {
            enemy.destroy();
          },
        });
      }
    };

    this.physics.add.collider(this.enemies, this.wizard.bullets,
      (enemies, bullets) => {
        killEnemies(enemies, bullets);
      });
  }

  update() {
    if (this.backgroundImg1.x <= -(this.backgroundImg1.displayWidth / 2)) {
      this.backgroundImg1.x = this.backgroundImg2.x + this.backgroundImg2.displayWidth;
    } else if (this.backgroundImg2.x <= -(this.backgroundImg2.displayWidth / 2)) {
      this.backgroundImg2.x = this.backgroundImg1.x + this.backgroundImg1.displayWidth;
    }
    /* eslint-disable */
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
    /* eslint-enable */
  }
}

export default GameMainScene;