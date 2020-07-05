import 'phaser';
import background from './assets/background.png';
//import wizardWalk from './assets/wizardWalk.png';
import Wizard from './modules/characters/wizard';
import GameMainScene from './modules/scenes/gameMainScene';
import MenuMainScene from './modules/scenes/menuMainScene';
import GameOverScene from './modules/scenes/gameOverScene';
import RecordScene from './modules/scenes/recordScene';

var config = {
  type: Phaser.AUTO,
  width: 1200,//960
  height: 540,
  parent: 'divld',
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: true
    }
  },
  scene: [
    GameOverScene,
    MenuMainScene,
    GameMainScene,
    
    RecordScene
    // preload: preload,
    // create: create,
    // update: update
  ]
};

var game = new Phaser.Game(config);

let wizard;

function preload() {
  this.load.image('background', background);
  Wizard.load(this);
  
  // this.load.spritesheet('wizardWalking', wizardWalk,{ frameWidth: 409, frameHeight: 420 });
}

//let player;
let backgroundImg;
function create() {
  backgroundImg = this.add.image(0, 0, 'background');
  backgroundImg.displayWidth = config.width
  backgroundImg.displayHeight = config.height;
  backgroundImg.setOrigin(0, 0);
  backgroundImg.setScrollFactor(0);
  wizard = new Wizard(this, 100, 450, 'wizardWalking');
  wizard.animation('left');
  wizard.animation('right');
  wizard.animation('turn');
}

function update() {
  const cursors = this.input.keyboard.createCursorKeys();
  if (cursors.left.isDown) {
    wizard.moves('left');
  }
  else if (cursors.right.isDown) {
    wizard.moves('right');
  }
  else {
    wizard.moves('turn');
  }
}