import Enemy from '../src/modules/characters/enemy';

jest.mock('../src/modules/characters/enemy');

let enemy;

beforeEach(() => {
  enemy = new Enemy('GameMainScene', 600, 40, 'enemy');
});

test('Test if enemies are created as an object element', () => {
  expect(typeof enemy).toBe('object');
});

test('Test if enemies are created correctly, they are not undefined', () => {
  expect(Enemy).not.toBe(undefined);
});

test('Test if an enemy constructor is called when an enemy is created', () => {
  expect(Enemy).toHaveBeenCalled();
});