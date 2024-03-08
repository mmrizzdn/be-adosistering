// const express = require('express');
// const router = express.Router();
// const path = require('path');
// const dotenv = require('dotenv');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// dotenv.config({ path: '../.env' });

// router.get(
// 	'/users',
// 	(req, res, next) => {
// 		const authHeader = req.headers['authorization'];
// 		const token = authHeader && authHeader.split(' ')[1];

// 		if (token == null) return res.sendStatus(401);

// 		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
// 			if (err) {
// 				return res.sendStatus(403);
// 			}

// 			req.username = decoded.username;
// 			next();
// 		});
// 	},
// 	async (req, res) => {
// 		try {
// 			const result = await prisma.users.findMany();
// 			// res.json(users);
// 			res.render('login', { login });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}
// );

// router.post('/users', async (req, res) => {
// 	const { username, password, confPassword } = req.body;

// 	if (password !== confPassword) {
// 		return res.status(400).json({ msg: 'Password does not match' });
// 	}

// 	const saltRounds = 10;
// 	const hashPassword = await bcrypt.hash(password, saltRounds);

// 	try {
// 		await prisma.users.create({
// 			username: username,
// 			password: hashPassword,
// 		});

// 		// res.json({ msg: 'Account created successfully!' });
// 		res.redirect('/login');
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

// router.get('/login', (req, res) => {
//     res.render('login');
// });

// router.post('/login', async (req, res) => {
// 	try {
// 		const result = await prisma.users.findMany({
// 			where: {
// 				username: req.body.username,
// 			},
// 		});

// 		const match = await bcrypt.compare(req.body.password, user[0].password);

// 		if (!match) {
// 			return res.status(400).json({ msg: 'Incorrect password' });
// 		}

// 		const userId = user[0].id;
// 		const username = user[0].username;

// 		const accessToken = jwt.sign(
// 			{ userId, username },
// 			process.env.ACCESS_TOKEN_SECRET,
// 			{
// 				expiresIn: '20s',
// 			}
// 		);

// 		const refreshToken = jwt.sign(
// 			{ userId, username },
// 			process.env.REFRESH_TOKEN_SECRET,
// 			{
// 				expiresIn: '1d',
// 			}
// 		);

// 		await prisma.users.update(
// 			{ refreshToken: refreshToken },
// 			{
// 				where: {
// 					id: userId,
// 				},
// 			}
// 		);

// 		res.cookie('refreshToken', refreshToken, {
// 			httpOnly: true,
// 			maxAge: 24 * 60 * 60 * 1000,
// 		});

// 		res.json({ accessToken });
// 	} catch (error) {
// 		res.status(404).json({ msg: 'Username not found!' });
// 	}
// });

// router.get('/token', async (req, res) => {
// 	try {
// 		const refreshToken = req.cookies.refreshToken;

// 		if (!refreshToken) {
// 			return res.sendStatus(401);
// 		}

// 		const result =await prisma.users.findAll({
// 			where: {
// 				refreshToken: refreshToken,
// 			},
// 		});

// 		if (!result[0]) {
// 			return res.sendStatus(403);
// 		}

// 		jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET),
// 			(err, decoded) => {
// 				if (err) {
// 					return res.sendStatus(403);
// 				}
// 			};

// 		const userId = result[0].id;
// 		const username = result[0].username;
// 		const accessToken = jwt.sign(
// 			{ userId, username },
// 			process.env.ACCESS_TOKEN_SECRET,
// 			{
// 				expiresIn: '15s',
// 			}
// 		);

// 		res.json({ accessToken });
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

// router.delete('/logout', async (req, res) => {
// 	const refreshToken = req.cookies.refreshToken;

// 	if (!refreshToken) {
// 		return res.sendStatus(204);
// 	}

// 	const result = await prisma.users.findMany({
// 		where: {
// 			refreshToken: refreshToken,
// 		},
// 	});

// 	if (!result[0]) {
// 		return res.sendStatus(204);
// 	}

// 	const userId = result[0].id;

// 	await prisma.users.update(
// 		{ refreshToken: null },
// 		{
// 			where: {
// 				id: userId,
// 			},
// 		}
// 	);

// 	res.clearCookie('refreshToken');
// 	return res.sendStatus(200);
// });

// module.exports = router;
