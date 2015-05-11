function lastDigit(firstNum, secondNum){
	if(firstNum % 10 === secondNum % 10){  // the % "mod" operator computes remainders, so it is simple to find if the last digit of two values are equal
		return true;
	} else {
		return false;
	}