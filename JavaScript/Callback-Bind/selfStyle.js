var Number = function(value) {
  this.value = value;
  
  var self = this;
  
  var add = function(value) {
    this.value = value;
	
	return this.value + self.value;
  }
  
  return add;
}

//Resultado esperado é (3)
console.log(new Number(1)(2));