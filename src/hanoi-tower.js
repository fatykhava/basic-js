const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let step = 1;
	for (let i = 0; i < disksNumber - 1; i++) {
			step = step * 2 + 1; 
	}
	 let speed = Math.floor((3600 * step / turnsSpeed));
	let result = { turns: step, seconds: speed}
	return result;
};