const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');
const moviedb = require('../helper/moviedb.js');

// var items = require('../database-mongo');

const app = express();

app.use(bodyParser.json());


app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
	tvMaze.getInfoByTitle('Game of thrones', (data) => {
		console.log(JSON.parse(data))
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/recommend', function (req, res) {
	moviedb.getPopularShows((data) => {
		res.send(JSON.parse(data));
	})
	
});

app.post('/submit', function (req, res) {
	var title = req.body.topic.split(' ').join('_')
	moviedb.getInfoByTitle(title, (data) => {
		res.send(JSON.parse(data))
	})
})

app.post('/signUp', function (req, res) {
	var user = req.body.username;
	var pw = req.body.password;
	db.createUser(user, pw, (err, data) => {
		if (err) {
			res.send(err);
		} else {
			res.send(data);
		}
	})
})

	})
})

app.post('/signUp', function (req, res) {
	var user = req.body.username;
	var pw = req.body.password;
	db.createUser(user, pw, (err, data) => {
		if (err) {
			res.send(err);
		} else {
			res.send(data);
		}
	})
})

app.post('/logIn', function (req, res){
	var user = req.body.username;
	var pw = req.body.password;
	db.checkUser(user, pw, (err, data) => {
		if (err){
			res.send(err);
		} else {
			res.send(data);
		}
	})
})
app.listen(3000, function() {
  console.log('listening on port 3000!');
});

