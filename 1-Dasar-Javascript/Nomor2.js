let price = null;
let totalGoods = null;
let barang = [
	{ nama: 'Beras', harga: 10000, jumlah: 5 },
	{ nama: 'Gula', harga: 14000, jumlah: 5 },
	{ nama: 'Telur', harga: 20000, jumlah: 2 },
	{ nama: 'Minyak Goreng', harga: 9000, jumlah: 10 },
];

barang.map((prop) => {
	price += prop.harga * prop.jumlah;
	totalGoods += prop.jumlah;
});

console.log(`Total ${totalGoods} barang, dengan jumlah harga Rp. ${price}.`);
