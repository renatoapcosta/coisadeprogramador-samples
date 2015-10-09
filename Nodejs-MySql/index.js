var util = require('util');

var connection = require('./connection');
var model = {
	id: 1,
	text: util.format('Hello %s', Math.floor((Math.random() * 100) + 1))
};

connection.openConnection();

connection.truncateData(function(){
	connection.createData(model, function(err, rows, fields){
		
		console.log('1. Criação executada!, (%s) linha(s) afetada(s)!', rows.affectedRows);
		
		connection.updateData(model, function(err, rows, fields){
			console.log('2. Atualização executada!, (%s) linha(s) afetada(s)!', rows.affectedRows);
			
			connection.readData(function(err, rows, fields){
				console.log('3. Leitura executada!', JSON.stringify(rows));
				
				connection.deleteData(model, function(err, rows, fields){
					console.log('4. Exclusão executada, (%s) linha(s) afetada(s)!', rows.affectedRows);
					
					connection.closeConnection();
				});
			});
		});
	});
});