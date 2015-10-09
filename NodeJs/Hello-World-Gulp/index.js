var fs = require('fs'),
	gulp = require('gulp'),
	gulpFile = require('./gulpfile');

gulp.start('jsdoc-now', function (){
	fs.readFile('./resources/message.txt', { encoding: 'UTF-8' }, function(err, message){
		if(err)
			throw err;
		
		console.log("\x1b[33m", message);
		console.log("\x1b[0m", " ");
	});
});