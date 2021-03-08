const CustomError = require("../extensions/custom-error");

const chainMaker = {
	chain: [],

	getLength() {
		return this.chain.length;
	},
	addLink(value) {
		this.chain.push(`( ${String(value)} )`);
		return this;
	},
	removeLink(position) {
		if (typeof (position) !== 'number') {
			this.chain = [];
			throw new Error();
		}

		position--;
		if (position < 0 || position >= this.getLength()) {
			this.chain = [];
			throw new Error();
		}

		this.chain.splice(position, 1);
		return this;
	},

	reverseChain() {
		this.chain.reverse();
		return this;
	},

	finishChain() {
		let finalChain = this.chain.reduce((chainStr, item) => `${chainStr}~~${item}`);
		this.chain = [];
		return finalChain;
	}
};

module.exports = chainMaker;
