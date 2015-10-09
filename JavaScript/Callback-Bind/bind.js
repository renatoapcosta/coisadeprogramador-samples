function Process(){
	this.createAt = new Date();
}

Process.prototype.start = function start(cb){
	this.finish(cb);
};

Process.prototype.finish = function finish(cb){
	if(typeof cb !== 'function')
		throw new Error('Callback function required!');
	
	cb();
};

(function(){
	var process = new Process();
	var callback = function (){
		console.log(this);
		
		if(!this.createAt){
			console.log('>>>>>>>>>>>>>>>>>>>>>>');
			console.log('>>>>>>> Error >>>>>>>>');
			console.log('>>>>>>>>>>>>>>>>>>>>>>');
			return;
		}
		
		console.log('>>>>>>>>>>>>>>>>>>>>>>');
		console.log('>>>>>> Success >>>>>>>');
		console.log('>>>>>>>>>>>>>>>>>>>>>>');
	};
	
	//
	// Não utiliza o contexto, (Web: this === "window")
	//
	process.start(callback);
	
	//
	// Usa o contexto do "Process""
	//
	process.start(callback.bind(process));
})();