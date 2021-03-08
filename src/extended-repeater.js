const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {
  let newStr = '';
  if (typeof options === 'undefined') return str;
  if (typeof options.addition !== 'undefined') {
    if (typeof options.additionRepeatTimes === 'undefined' || options.additionRepeatTimes === 1) {
      newStr = str + options.addition;
    }
    else if (typeof options.additionSeparator === 'undefined') {
      newStr = str + (options.addition + '|').repeat(options.additionRepeatTimes - 1) + options.addition;
    }
    else if (typeof options.additionSeparator !== 'undefined') {
      newStr = str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
    }
  }
  else newStr = str;
  if (typeof options.repeatTimes === 'number') {
    if (options.repeatTimes === 1) return newStr;
    else {
      if (typeof options.separator !== 'string') {
        return newStr + ('+' + newStr).repeat(options.repeatTimes - 1);
      }
      else return newStr + (options.separator + newStr).repeat(options.repeatTimes - 1);
    }
  }
  else return newStr;
};
