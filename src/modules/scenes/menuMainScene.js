import menuBackground from '../../assets/menuBackground.png';
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
    this.playGameButton = this.add.text((this.game.scale.width / 2) - 100, (this.game.scale.height / 2) - 60, 'Start Game', {
      font: '25px Arial',
      fill: '#1D6474' })
      .setBackgroundColor('#B2B29C')
      .setPadding(40, 15, 40, 15)
      .setInteractive({useHandCursor: true})
      .on('pointerdown', () => this.scene.start('gameMainScene'))
      .on('pointerover', () => this.hoverStateButton(this.playGameButton))
      .on('pointerout', () => this.restStateButton(this.playGameButton));
    this.recordsGameButton = this.add.text((this.game.scale.width / 2) - 100, (this.game.scale.height / 2) + 20, 'Records', {
      font: '25px Arial',
      fill: '#1D6474'})
      .setBackgroundColor('#B2B29C')
      .setPadding(57, 15, 57, 15)
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => this.scene.start('gameMainScene'))
      .on('pointerover', () => this.hoverStateButton(this.recordsGameButton))
      .on('pointerout', () => this.restStateButton(this.recordsGameButton))
      ;
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