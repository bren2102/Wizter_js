import Wizard from '../src/modules/characters/wizard';

jest.mock('../src/modules/characters/wizard');

let wizard;

beforeEach(() => {
  wizard = new Wizard('GameMainScene', 600, 40, 'wizard');
});

test('Test if wizard is created as an object element', () => {
  expect(typeof wizard).toBe('object');
});

test('Test if a wizard is created correctly, it is not undefined', () => {
  expect(Wizard).not.toBe(undefined);
});

test('Test if a wizard constructor is called when a wizard is created', () => {
  expect(Wizard).toHaveBeenCalled();
});