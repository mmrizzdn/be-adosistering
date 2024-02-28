const firebase = require('firebase');

const firebaseConfig = {
	apiKey: 'AIzaSyCvqhFr3FVIXB4rgGOMmd8dv-yk4_OKbgg',
	authDomain: 'adosistering.firebaseapp.com',
	databaseURL:
		'https://adosistering-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'adosistering',
	storageBucket: 'adosistering.appspot.com',
	messagingSenderId: '977658287786',
	appId: '1:977658287786:web:e5a4de012a438824d722d3',
	measurementId: 'G-SKTDRSFYWJ',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

module.exports = db;
