function Cat(){
	this.stomach =[];
}

Cat.prototype.eat = function(dog){
	this.stomach.push(dog);
}

module.exports = Cat;