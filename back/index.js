const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
// const bodyParser = require('body-parser')
require('dotenv').config();
const connection = require('./config/db');
const prevention = require('./src/routes/preventions');
const questions = require('./src/routes/questions')
const reponses = require('./src/routes/reponses')
const { setupRoutes } = require('./server');

const app = express();
const PORT = process.env.PORT || 8000;

//connection test Mysql
connection.connect((err) => {
	if (err) {
		console.error('error connecting: ' + err.stack);
	} else {
		console.log(
			'connected to database with threadId :  ' + connection.threadId
		);
	}
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

//routes
app.use('/prevention', prevention);
app.use('/questions', questions)
app.use('/reponses', reponses)
//setupRoutes(app)

app.listen(PORT, (err) => {
	// eslint-disable-next-line no-console
	if (err) console.error(err);
	// eslint-disable-next-line no-console
	console.log(`🚀 Server running on http://localhost:${PORT}`);
});
