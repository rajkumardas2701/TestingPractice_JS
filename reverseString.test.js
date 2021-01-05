import reverseString from './reverseString';

test('reverse a string', () => {
  expect(reverseString('apple')).toBe('elppa');
  expect(reverseString('hello')).not.toBe('hello');
});