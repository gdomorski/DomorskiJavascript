//Filter Method Example

function isBigEnough(value){
    return value > 10;
}

var numbers = [1,2,45,6,612,622,424];

var filtered = numbers.filter(isBigEnough);     //the first parameter of the filter method is the callback
console.log(filtered);


//MAP Method examples


function isBigEnough(value){
    return value > 10;
}

var numbers = [1,2,45,6,612,622,424];

var trueOrFalse = numbers.map(isBigEnough);     //if you change filter to the map method it will log all true and false values of whether the number is larger than 10
console.log(trueOrFalse);


//Exmaple number two


function MultNums(value){
    return value * 2
}

var numbers = [1,2,45,6,612,622,424];

var numsTimesTwo = numbers.map(MultNums);

console.log(numsTimesTwo);






