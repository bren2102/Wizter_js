import Ice from '../src/modules/characters/ice';

jest.mock('../src/modules/characters/ice');

let ice;

beforeEach(() => {
  ice = new Ice('GameMainScene', 600, 40, 'ice');
});

test('Test if ice is created as an object element', () => {
  expect(typeof ice).toBe('object');
});

test('Test if an ice is created correctly, it is not undefined', () => {
  expect(Ice).not.toBe(undefined);
});

test('Test if a ice constructor is called when an ice is created', () => {
  expect(Ice).toHaveBeenCalled();
});