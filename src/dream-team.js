const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  //   throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof arguments !== 'object' || arr === null || arr === undefined) return false;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      newArr.push(arr[i].trim().toUpperCase().charAt(0));
    }
  }
  newArr.sort();
  let dreamTeam = '';
  for (let i = 0; i < newArr.length; i++) {
    dreamTeam += newArr[i];
  }
  return dreamTeam;
};
