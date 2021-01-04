const reverseString = (str) => {
  const strArr = str.split('');
  const tempArr = [];
  for (let i = strArr.length - 1; i > -1; i -= 1) {
    tempArr.push(strArr[i]);
  }

  return tempArr.join('');
};

reverseString('elppa');

module.exports = reverseString;