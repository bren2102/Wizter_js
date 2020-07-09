import menuBackground from '../../assets/menuBackground.png';
import menuButton from '../../assets/html/menuButton.html';
import pGameButton from '../../assets/playButton.png';
import instButton from '../../assets/instructionButton.png';
import recButton from '../../assets/recordButton.png';

/* eslint-disable */
class MenuMainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'menuMainScene' });
    this.playGameButton;
    this.recordsGameButton;
    /* eslint-enable */
  }

  preload() {
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
      this.scene.stop();
    });
    const recordButton = document.getElementById('recordButton');
    recordButton.src = recButton;
    recordButton.addEventListener('click', () => {
      this.scene.start('recordScene');
      this.scene.stop();
    });
    const instructionButton = document.getElementById('instructionButton');
    instructionButton.src = instButton;
    instructionButton.addEventListener('click', () => {
      this.scene.start('instructionsScene');
      this.scene.stop();
    });
  }
}
export default MenuMainScene;