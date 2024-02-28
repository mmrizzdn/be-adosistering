const { Sequelize } = require('sequelize');
const db = require('../config/mysql');

const { DataTypes } = Sequelize;

const waterFlowSensor = db.define(
	'SensorWaterFlow',
	{
		DebitAir: {
			type: DataTypes.FLOAT,
		},
		TotalAir: {
			type: DataTypes.FLOAT,
		},
	},
	{
		freezeTableName: true,
	}
);

module.exports = waterFlowSensor;
