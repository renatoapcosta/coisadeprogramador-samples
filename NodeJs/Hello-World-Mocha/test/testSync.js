var assert = require('assert');
var convert = require('../modules/convert');

describe('Testing convert', function(){
	it('...toInt success', function(){
		var input = '1';
		var inputNumber = convert.toInt(input) || undefined;
		
		assert.notEqual(inputNumber, undefined, 'Ohhh no Error!');
	});
	
	it('...toInt fail', function(){
		var input = 'abc';
		var inputNumber = convert.toInt(input) || undefined;
		
		assert.notEqual(inputNumber, undefined, 'Ohhh no Error!');
	});
});