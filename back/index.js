const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const connection = require('./src/helper/db.js');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/public', express.static('public'));

app.listen(PORT, (err) => {
	// eslint-disable-next-line no-console
	if (err) console.error(err);
	// eslint-disable-next-line no-console
	console.log(`🚀 Server running on http://localhost:${PORT}`);
});
