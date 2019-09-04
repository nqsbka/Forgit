function Dog(name){
	this.name = name;
	this.dead = false;
}
Dog.prototype.die = function(){
	this.dead = true;
}
module.exports = Dog;