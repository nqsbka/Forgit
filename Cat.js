function Cat(){
	this.stomach =[];
}

Cat.prototype.eat = function(dog){
	this.stomach.push(dog);
}

module.exports = Cat;
Cat.prototype.sleep = function(mouse){
	this.stomach.push(mouse);
}