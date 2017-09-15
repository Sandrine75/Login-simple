var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.post('/login', function(req, res) {

	var user = 'Marine';
	var password = 'mdp';
	var connect = {err: false, message: 'Vous êtes connecté'}
	var error = {err: true, message: 'Erreur d\'identifiant ou de mot de passe'}

	const saltRounds = 10;

	bcrypt.genSalt(saltRounds, function(err, salt) {
		bcrypt.hash(password, saltRounds, function(err, hash) {
			bcrypt.compare(req.body.password, hash, function(err, response) {
				if (req.body.user === user && response) {
					res.send(connect.err);
				}
				else {
					res.send(error.err);
				}
			})

		});
	});

})

app.listen(8080, function() {
	console.log('Listen');
});