const { Sequelize } = require('sequelize');
const db = require('../config/mysql');

const { DataTypes } = Sequelize;

const Users = db.define(
	'users',
	{
		username: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
		},
		refreshToken: {
			type: DataTypes.TEXT,
		},
	},
	{
		freezeTableName: true,
	}
);

module.exports = Users;
