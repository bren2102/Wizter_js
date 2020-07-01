class GameMainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameMainScene' });
  }

  create() {
    this.scene.start('gameScene');
  }  
}