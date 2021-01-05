const calculator = () => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  return {
    add,
    subtract,
    multiply,
    divide,
  };
};

calculator(4, 3);
module.exports = calculator;
