import 'phaser';
import background from './assets/background.png';
import wizardWalk from './assets/wizardWalk.png';

var config = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);


function preload() {
  this.load.image('background', background);
  this.load.spritesheet('wizardWalking', wizardWalk,{ frameWidth: 409, frameHeight: 420 });
}

function create() {
  const backgroundImg = this.add.image(480, 270, 'background');
  backgroundImg.displayWidth = config.width
  backgroundImg.displayHeight = config.height;
  
  const player = this.physics.add.sprite(100, 450, 'wizardWalking');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('wizardWalking', { start: 0, end: 4 }),
    frameRate: 10,
    repeat: -1
  });
  player.anims.play('right',true);
}
function update() {}