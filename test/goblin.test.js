import Goblin from '../src/modules/characters/goblin';

jest.mock('../src/modules/characters/goblin');

let goblin;

beforeEach(() => {
  goblin = new Goblin('GameMainScene', 600, 40, 'goblin');
});

test('Test if goblin is created as an object element', () => {
  expect(typeof goblin).toBe('object');
});

test('Test if a goblin is created correctly, it is not undefined', () => {
  expect(Goblin).not.toBe(undefined);
});

test('Test if a goblin constructor is called when a goblin enemy is created', () => {
  expect(Goblin).toHaveBeenCalled();
});