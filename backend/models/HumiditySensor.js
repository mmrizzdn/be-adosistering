const { Sequelize } = require('sequelize');
const db = require('../config/mysql');

const { DataTypes } = Sequelize;

const humiditySensor = db.define(
	'SensorKelembaban',
	{
		KadarAir: {
			type: DataTypes.FLOAT,
		},
		Kelembaban: {
			type: DataTypes.FLOAT,
		},
	},
	{
		freezeTableName: true,
	}
);

module.exports = humiditySensor;
