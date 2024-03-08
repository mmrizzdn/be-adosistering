const { PrismaClient } = require('@prisma/client');
const express = require('express');
const fetch = require('node-fetch');

const prisma = new PrismaClient();
const currentDate = new Date();

const router = express.Router();

router.get('/firebase', async (req, res) => {
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

		console.log(responseData[0]);
		// Save data to MySQL using prisma for each table
		const savedData = await Promise.all([
			prisma.SensorKelembaban.create({
				data: { ...responseData[0], createdAt: currentDate, updatedAt: currentDate },
			}),
			prisma.SensorWaterFlow.create({
				data: { ...responseData[1], createdAt: currentDate, updatedAt: currentDate },
			}),
		]);

		// Return a response with the data that has been saved
		res.status(201).json(savedData);
	} catch (error) {
		console.error('Error fetching or adding data: ', error);
		res.status(500).json({ error: 'Failed to fetch or add data.' });
	}
});

module.exports = router;
