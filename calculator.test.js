import calculator from './calculator';

test('add numbers', () => {
  expect(calculator().add(4, 3)).toEqual(7);
  expect(calculator().add(4, 3)).not.toEqual(3);
});

test('subtract numbers', () => {
  expect(calculator().subtract(4, 3)).toEqual(1);
  expect(calculator().add(4, 3)).not.toEqual(3);
});

test('multiply numbers', () => {
  expect(calculator().multiply(4, 3)).toEqual(12);
  expect(calculator().add(4, 3)).not.toEqual(3);
});

test('divide numbers', () => {
  expect(calculator().divide(4, 3)).toEqual(1.3333333333333333);
  expect(calculator().divide(4, 3)).not.toEqual(3);
});