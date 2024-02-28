const express = require('express');
const fetch = require('node-fetch');

const humiditySensor = require('../models/HumiditySensor');
const waterFlowSensor = require('../models/WaterFlowSensor');

const router = express.Router();

router.get('/api/firebase', async (req, res) => {
	try {
		const urls = [
			'https://adosistering-default-rtdb.asia-southeast1.firebasedatabase.app/SensorKelembaban.json',
			'https://adosistering-default-rtdb.asia-southeast1.firebasedatabase.app/SensorWaterFlow.json',
		];

		const fetchPromises = urls.map((url) => fetch(url));

		const responses = await Promise.all(fetchPromises);

		const responseData = await Promise.all(
			responses.map((response) => response.json())
		);

		// Save data to MySQL using Sequelize for each table
		const savedData = await Promise.all([
			humiditySensor.create(responseData[0]),
			waterFlowSensor.create(responseData[1]),
		]);

		// Return a response with the data that has been saved
		res.status(201).json(savedData);
	} catch (error) {
		console.error('Error fetching or adding data: ', error);
		res.status(500).json({ error: 'Failed to fetch or add data.' });
	}
});

module.exports = router;
