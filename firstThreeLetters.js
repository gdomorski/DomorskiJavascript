// Given a string, take the first 3 chars and return the string with the 3 chars added at both the front and back, 
// so "HelloWorld" yields"HelHelloWorldHel".

function front33(inputString){
    var firstThree =  word.slice(0,3); // takes the first three characters of a string. If there are not three characters it takes whatever is there
    return firstThree + word + firstThree; // returns the value with the first three letters in front and back
}