const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const port = 5000;
const db = mysql.createConnection({
	host: 'localhost',
	password: '',
	user: 'root',
	database: 'rest_api',
});

db.connect((err) => {
	err ? console.log(err.message) : console.log('Connected to db');
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/pegawai', (req, res) => {
	let sql = 'SELECT * FROM pegawai';
	db.query(sql, (err, result) => {
		if (err) throw err;
		let response = {
			count: result.length,
			pegawai: result,
		};

		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(response));
	});
});

app.post('/pegawai', (req, res) => {
	let find = req.body.find;
	let sql =
		"SELECT * FROM pegawai WHERE nip LIKE '%" +
		find +
		"%' OR nama LIKE '%" +
		find +
		"%' OR alamat LIKE '%" +
		find +
		"%'";

	db.query(sql, (err, result) => {
		if (err) throw err;
		let response = {
			count: result.length,
			pegawai: result,
		};

		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(response));
	});
});

app.post('/pegawai/save', (req, res) => {
	let data = {
		nip: req.body.nip,
		nama: req.body.nama,
		alamat: req.body.alamat,
	};
	let message = '';

	let sql = 'INSERT INTO pegawai SET ?';
	db.query(sql, data, (err, result) => {
		if (err) message = err.message;

		(message = result.affectedRows), 'inserted';

		let response = {
			message: message,
		};

		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(response));
	});
});

app.post('/pegawai/update', (req, res) => {
	let data = [
		{
			nip: req.body.nip,
			nama: req.body.nama,
			alamat: req.body.alamat,
		},
		req.body.nip,
	];
	let message = '';

	let sql = 'UPDATE pegawai SET ? WHERE nip = ?';
	db.query(sql, data, (err, result) => {
		if (err) message = err.message;

		(message = result.affectedRows), 'updated';

		let response = {
			message: message,
		};

		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(response));
	});
});

app.delete('/pegawai/:nip', (req, res) => {
	let data = {
		nip: req.params.nip,
	};
	let message = '';
	let sql = 'DELETE FROM pegawai WHERE ?';
	db.query(sql, data, (err, result) => {
		if (err) message = err.message;

		(message = result.affectedRows), 'deleted';

		let response = {
			message: message,
		};

		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(response));
	});
});

app.listen(port, (err) =>
	err ? console.error(err) : console.log('Connected to server'),
);
