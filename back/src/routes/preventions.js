const express = require('express');
const connection = require('../../config/db');
const Router = express.Router();

Router.get('/', (req, res) => {
	const sql = 'SELECT * FROM prevention';

	connection.connect();

	connection.query(sql, (err, result) => {
		if (err) throw err;
		return res.status(200).json(result);
	});
	console.log('GET on Prevention');
});

module.exports = Router;
