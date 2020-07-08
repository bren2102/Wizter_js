import Orc from '../src/modules/characters/orc';

jest.mock('../src/modules/characters/orc');

let orc;

beforeEach(() => {
  orc = new Orc('GameMainScene', 600, 40, 'orc');
});

test('Test if orc is created as an object element', () => {
  expect(typeof orc).toBe('object');
});

test('Test if an orc is created correctly, it is not undefined', () => {
  expect(Orc).not.toBe(undefined);
});

test('Test if a orc constructor is called when a orc enemy is created', () => {
  expect(Orc).toHaveBeenCalled();
});