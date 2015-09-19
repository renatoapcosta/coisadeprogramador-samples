var assert = require('assert');
var http = require('http');
var convert = require('../modules/convert');

describe('Testing async', function(){
	it('...get google page', function(done){
		http.get('http://www.google.com/index.html', function(res){
			done();
		}).on('error', function(e){
			assert.fail(e);
		})
	});
});