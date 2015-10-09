var util = require('util');
var convert = require('./modules/convert');

console.log(util.format('HELLO WORLD #%s', convert.toInt('123')));