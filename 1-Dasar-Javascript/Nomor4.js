const count = (a, r, sp) => {
	for (let n = sp; n <= sp; n++) {
		console.log(
			'Baris ke',
			n.toString(),
			'hasilnya adalah',
			((a * (r ** n - 1)) / (r - 1)).toString(),
		);
	}
};

count(4, 3, 10);
