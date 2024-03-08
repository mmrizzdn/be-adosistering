const { Sequelize } = require('sequelize');

const Users = require('../models/User');
const humiditySensor = require('../models/HumiditySensor');
const waterFlowSensor = require('../models/WaterFlowSensor');

const db = new Sequelize(
	process.env.DB_DATABASE,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: 'mysql',
	}
);

async function connectToDatabase() {
	try {
		await db.authenticate();
		console.log(
			'Connection to database has been established successfully.'
		);
		await Users.sync();
		await humiditySensor.sync();
		await waterFlowSensor.sync();
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

connectToDatabase();

module.exports = db;
