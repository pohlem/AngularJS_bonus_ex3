var app = angular.module('mailApp', []);

app.controller('emailCtrl', function($scope) {
  	$scope.check = function(nom,mail,sujet){
  		console.log(nom);
  		console.log(mail);
  		console.log(sujet);
  		if(nom == undefined){
  			alert('Nom Incorrect');
  		}
  		if(mail == undefined || mail.includes('@')){
  			alert('email Incorrect');
  		}
  		if(sujet == undefined){
  			alert('sujet Incorrect');
  		}
  	}
});