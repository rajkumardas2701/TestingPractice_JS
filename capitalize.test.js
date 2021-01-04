import capitalize from './capitalize';

test('capitalize a string', () => {
  expect(capitalize('name')).toBe('Name');
  expect(capitalize('hello')).not.toBe('hello');
});