const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(dir = true) {
		this.dir = dir;
	}

	symCode(sym) {
		return sym.charCodeAt(0) - 'A'.charCodeAt(0);
	}

	shift(sym, len) {
		let cod = this.symCode(sym);
		return String.fromCharCode((cod + len) % 26 + 'A'.charCodeAt(0));
	}

	encrypt(str, key) {
		return this.crypt(str, key, false);
	}

	decrypt(str, key) {
		return this.crypt(str, key, true);
	}

	crypt(str, key, isDec) {
		if (str === undefined || key == undefined) {
			throw new Error();
		}

		str = str.toUpperCase();
		key = key.toUpperCase();

		let arr = [];
		let coded = 0;
		for (let i = 0; i < str.length; ++i) {
			if (str[i] >= 'A' && str[i] <= 'Z') {
				if (isDec) {
					arr.push(this.shift(str[i], 26 - this.symCode(key[coded % key.length])));
				} else {
					arr.push(this.shift(str[i], this.symCode(key[coded % key.length])));
				}
				coded++;
			} else {
				arr.push(str[i]);
			}
		}

		if (!this.dir) {
			arr.reverse();
		}

		return arr.join('');
	}
}
module.exports = VigenereCipheringMachine;
