const crypto = require('crypto');

// Generate a random string of 64 characters (512 bits)
const generateAccessTokenSecret = () => {
	return crypto.randomBytes(32).toString('hex');
};

console.log(generateAccessTokenSecret());
