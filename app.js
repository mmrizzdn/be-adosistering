const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { readdirSync } = require('fs');

const db = require('./config/mysql');
const Users = require('./models/User');
const humiditySensor = require('./models/HumiditySensor');
const waterFlowSensor = require('./models/WaterFlowSensor');
const usersRouter = require('./routes/users');
const firebaseRoutes = require('./routes/firebases');

require('dotenv').config();
const app = express();
const port = 3000;

// function connectToDatabase() {
// 	try {
// 		db.authenticate();
// 		console.log('Connection has been established successfully.');

// 		return true;
// 	} catch (error) {
// 		console.error('Unable to connect to the database:', error);
// 	}
// }

// connectToDatabase();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

readdirSync('./routes').map((file) =>
	app.use('/', require('./routes/' + file))
);
app.use('/login', usersRouter);
app.use('/firebase', firebaseRoutes);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
