(function() {
	"use strict";

	var app = {

		init: function() {
			this.listeners();
		},

		listeners: function() {
			$('#connexion').on('click', this.submit.bind(this))
			$('form').on('submit', function(event) {
				event.preventDefault();
			});
		},

		submit: function() {
			var user = $('#user').val();
			var password = $('#password').val();

			$.ajax({
				url: '/login',
				type: 'POST',
				data: {
					'user' : user,
					'password' : password
				},
				dataType: 'html'
			})
			.done(function(data) {

				if (data === 'true') {
					$('#error').html('<div class="ui negative message">' + "Erreur d\'identifiant ou mot de passe" + '</div>');
				}  
				else {
					$('html').html('Vous êtes connectée');
				}			
			})
			.fail(function() {
				console.log('fail');
			});
		},
	};

	$(document).ready(function(){
		app.init();
	});
})();  ''