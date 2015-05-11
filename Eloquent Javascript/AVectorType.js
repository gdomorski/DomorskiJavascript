//A Vector Type

//write a constructor vector


function Vector (x,y){

	this.x = x;
	this.y = y;
	this.length = Math.sqrt((this.x * this.x) + (this.y * this.y));
	

	}
	//could do Vector.prototype.plus
	this.plus = function (vector){
		
		// vector.firstNumber
		// vector.secondNumber
		// this.firstNumber
		// this.secondNumber

		// Add vectors together

		var addedFirstNumber = vector.x + this.x;
		var addedSecondNumber = vector.y + this.y;

		// return new vector
		return new Vector(addedFirstNumber, addedSecondNumber);
	}


		this.minus = function (vector){
		
		// vector.firstNumber
		// vector.secondNumber
		// this.firstNumber
		// this.secondNumber

		// Add vectors together

		var subtractedFirstNumber = this.x - vector.x;
		var subtractedSecondNumber = this.y - vector.y;

		// return new vector
		return new Vector(subtractedFirstNumber, subtractedSecondNumber);
	}


 	

}


function getByAge(age) {
	return myData[age]
}

myData["fullName"] = 
myData.fullName = 

//PLUS

//add the first number to the other first number
//add the second number to the other second number

//MINUS

//subtract the first number to the other first number
//subtract the second number to the other second number


//return a Vector
vector = new Vector(1, 2)
vector2 = new Vector(2, 3)

console.log(vector.plus(vector2));
console.log(vector.length);
