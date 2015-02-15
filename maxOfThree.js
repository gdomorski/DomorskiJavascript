function maxOfThree(num1, num2, num3){
	if(num1 > num2 && num1 > num3){  //checks if number 1 is larger than the other two numbers
		return num1;   // returns the first number if it is larger
	} else if(num2 > num3){  //checks if the second number is larger than third. Number 1 is out of picture because it would of already been returned above if larger
		return num2;
	} else {
		return num3; //if number 1 and number 2 are not larger than number 3, number 3 must be the largest of the three
	}
}
