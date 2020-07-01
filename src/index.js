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

let player;
let backgroundImg;
function create() {
  backgroundImg = this.add.image(0, 0, 'background');
  backgroundImg.displayWidth = config.width
  backgroundImg.displayHeight = config.height;
  backgroundImg.setOrigin(0, 0);
  backgroundImg.setScrollFactor(0);

  player = this.physics.add.sprite(100, 450, 'wizardWalking');
  player.setScale(.4);
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('wizardWalking', { start: 0, end: 4 }),
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
    key: 'turn',
    frames: [{ key: 'wizardWalking', frame: 2 }],
    frameRate: 20
  });
  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('wizardWalking', { start: 0, end: 4 }),
    frameRate: 10,
    repeat: -1
  });
  this.cameras.main.setBounds(0, 0, backgroundImg.displayWidth, backgroundImg.displayHeight);
  this.cameras.main.startFollow(player);
}

function update() {
  const cursors = this.input.keyboard.createCursorKeys();
  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.flipX = true;
    player.anims.play('left', true);
  }
  else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.flipX = false;
    player.anims.play('right', true);
  }
  else {
    player.setVelocityX(0);
    player.anims.play('turn');
  }
}