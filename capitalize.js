const capitalize = (str) => {
  const temp = str.split('');
  for (let i = 0; i < temp.length; i += 1) {
    if (i === 0) {
      temp[i] = temp[i].toUpperCase();
    }
  }
  return temp.join('');
};

capitalize('hello');

module.exports = capitalize;
