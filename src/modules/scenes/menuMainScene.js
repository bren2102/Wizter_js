import menuBackground from '../../assets/menuBackground.png';
import menuButton from '../../assets/html/menuButton.html';
import pGameButton from '../../assets/playButton.png';
import instButton from '../../assets/instructionButton.png';
import recButton from '../../assets/recordButton.png';
// import audio from '../../assets/mainAudio.mp3'

/* eslint-disable */
class MenuMainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'menuMainScene' });
    this.playGameButton;
    this.recordsGameButton;
    /* eslint-enable */
  }

  preload() {
    // this.load.audio('audio', audio);
    this.load.image('menuBackground', menuBackground);
  }

  create() {
    this.menuBackgroundImg = this.add.image(0, this.game.scale.height / 2, 'menuBackground');
    this.menuBackgroundImg.x = (this.game.scale.width / 2);
    /* eslint-disable */
    const div = this.add.dom((this.game.scale.width / 2) - 160,
      (this.game.scale.height / 2) - 20).createFromHTML(menuButton);
    /* eslint-enable */
    const playButton = document.getElementById('playButton');
    playButton.src = pGameButton;
    playButton.addEventListener('click', () => {
      this.scene.start('gameMainScene');
    });
    const recordButton = document.getElementById('recordButton');
    recordButton.src = recButton;
    recordButton.addEventListener('click', () => {
      this.scene.start('recordScene');
    });
    const instructionButton = document.getElementById('instructionButton');
    instructionButton.src = instButton;
    // instructionButton.addEventListener('click', () => {
    //   this.scene.start('gameMainScene')
    // });
  }

  // update() {
  // }
}
export default MenuMainScene;