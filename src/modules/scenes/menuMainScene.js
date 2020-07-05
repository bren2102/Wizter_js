import menuBackground from '../../assets/menuBackground.png';
import menuButton from '../../assets/html/menuButton.html';
import pGameButton from '../../assets/playButton.png';
import instButton from '../../assets/instructionButton.png';
import recButton from '../../assets/recordButton.png';
//import audio from '../../assets/mainAudio.mp3'
class MenuMainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'menuMainScene' });
    this.playGameButton;
    this.recordsGameButton;
  }
  preload() {
    //this.load.audio('audio', audio);
    this.load.image('menuBackground', menuBackground);
  }
  create() {
    this.menuBackgroundImg = this.add.image(0, this.game.scale.height / 2, 'menuBackground',)
    this.menuBackgroundImg.x = (this.game.scale.width / 2);
    // this.scene.start('gameMainScene');
    // this.audio = this.sound.add('audio');
    // this.audio.play();
    
    // this.playGameButton = this.add.text((this.game.scale.width / 2) - 100, (this.game.scale.height / 2) - 60, 'Start Game', {
    //   font: '25px Arial',
    //   fill: '#1D6474' })
    //   .setBackgroundColor('#B2B29C')
    //   .setPadding(40, 15, 40, 15)
    //   .setInteractive({useHandCursor: true})
    //   .on('pointerdown', () => this.scene.start('gameMainScene'))
    //   .on('pointerover', () => this.hoverStateButton(this.playGameButton))
    //   .on('pointerout', () => this.restStateButton(this.playGameButton));
    // this.recordsGameButton = this.add.text((this.game.scale.width / 2) - 100, (this.game.scale.height / 2) + 20, 'Records', {
    //   font: '25px Arial',
    //   fill: '#1D6474'})
    //   .setBackgroundColor('#B2B29C')
    //   .setPadding(57, 15, 57, 15)
    //   .setInteractive({ useHandCursor: true })
    //   .on('pointerdown', () => this.scene.start('recordScene'))
    //   .on('pointerover', () => this.hoverStateButton(this.recordsGameButton))
    //   .on('pointerout', () => this.restStateButton(this.recordsGameButton))
    //   ;

    var div = this.add.dom((this.game.scale.width / 2) - 160, (this.game.scale.height / 2) - 20).createFromHTML(menuButton);
    const playButton = document.getElementById('playButton');
    playButton.src = pGameButton;
    playButton.addEventListener('click', () => {
      this.scene.start('gameMainScene')
    });
    const recordButton = document.getElementById('recordButton');
    recordButton.src = recButton;
    recordButton.addEventListener('click', () => {
      this.scene.start('recordScene')
    });
    const instructionButton = document.getElementById('instructionButton');
    instructionButton.src = instButton;
    // instructionButton.addEventListener('click', () => {
    //   this.scene.start('gameMainScene')
    // });
  }
  hoverStateButton(button) {
    button.setStyle({ fill: 'white' })
  }
  restStateButton(button) {
    button.setStyle({ fill: '#1D6474' });
  }
  update() {
  }
}
export default MenuMainScene;