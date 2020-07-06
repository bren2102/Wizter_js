import game from './mock/game';

test('Receive an object in return when call gameRun', () => {
  const game = game.startGame();
  expect(typeof game).toBe('object');
});

test('Expect to see the object that contains all the games scenes', () => {
  expect(typeof game.scene.scenes).toBe('object');
});