/**
 * Represents a hello world function ;).
 * @public
 * @class
*/
function helloWorld(){
		
};

/**
 * Say hello to someone
 * @param {string} yourName - Person Name
 * @returns {string}
*/
helloWorld.prototype.sayHello = function sayHello(yourName){
	if(!yourName)
		throw new Error('Name is invalid :) !');
	
	return 'Hello ' + yourName + '!';
};

/**
 * Print message to console
 * @param {string} message - Text message
*/
helloWorld.prototype.printToConsole = function sayHello(message){
	if(!message)
		throw new Error('Message is invalid :) !');
	
	console.log(message);
};