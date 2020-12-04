class Lingkaran {
	constructor(r) {
		this.phi = 3.14;
		this.r = r;
	}

	luas() {
		return this.phi * this.r * this.r;
	}
	keliling() {
		return this.phi * 2 * this.r;
	}
}

class Tabung extends Lingkaran {
	constructor(r, t) {
		super(r);
		this.t = t;
	}

	selimut() {
		return this.t * this.keliling();
	}

	permukaan() {
		return 2 * this.luas() + this.selimut();
	}

	volume() {
		return this.luas() * this.t;
	}
}

class Kerucut extends Lingkaran {
	constructor(r, t, p) {
		super(r);
		this.t = t;
		if (p) {
			this.s = p;
		} else {
			this.s = Math.sqrt(this.t * this.t + this.r * this.r);
		}
	}

	selimut() {
		return this.phi * this.r * this.s;
	}

	permukaan() {
		return this.luas() + this.selimut();
	}

	volume() {
		return (this.luas() * this.t) / 3;
	}
}

class Bola extends Lingkaran {
	constructor(r, t) {
		super(r);
		this.t = t;
	}

	permukaan() {
		return 4 * this.luas();
	}

	volume() {
		return (this.luas() * this.r * 4) / 3;
	}
}

let hitung = new Tabung(7, 10);

console.log('Tabung');
console.log('Luas Selimut =', hitung.selimut().toString());
console.log('Luas Permukaan =', hitung.permukaan().toString());
console.log('Volume =', hitung.volume().toString(), '\n');

hitung = new Kerucut(7, 10);

console.log('Kerucut');
console.log('Luas Selimut =', hitung.selimut().toString());
console.log('Luas Permukaan =', hitung.permukaan().toString());
console.log('Volume =', hitung.volume().toString(), '\n');

hitung = new Kerucut(7, 10, 10);
console.log('Kerucut');
console.log('Luas Selimut =', hitung.selimut().toString());
console.log('Luas Permukaan =', hitung.permukaan().toString());
console.log('Volume =', hitung.volume().toString(), '\n');

hitung = new Bola(7, 10, 10);

console.log('Bola');
console.log('Luas Permukaan =', hitung.permukaan().toString());
console.log('Volume =', hitung.volume().toString());
