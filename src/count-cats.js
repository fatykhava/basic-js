const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  //   throw new CustomError('Not implemented');
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr[i];
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] === '^^') count++;
    }
  }

  return count;
  // remove line with error and write your code here
};
