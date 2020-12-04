const ppnPakArman = (p, l, price) => {
	let ppn = (p * l * price * 15) / 100;
	let totalPrice = p * l * price + ppn;

	return totalPrice;
};

console.log('Rp.', ppnPakArman(20.5, 30, 1500000).toString());
