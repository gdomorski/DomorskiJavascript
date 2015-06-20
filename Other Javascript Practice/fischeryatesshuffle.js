//FISHER YATES SHUFFLE

function shuffleArray(arr){

    //get the current length of an array
    var currentIndex = arr.length
    //set a temp val variable
    var tempVal;
    //set a randomIndex variable
    var randomIndex;
    
    
    
    //while it does not go past the end of the array
    while(currentIndex !== 0){
        //find a random index;
        randomIndex = Math.floor(Math.random() * currentIndex);
        
        //subtract from the current index;
        currentIndex--;
        //set a temp val to the current index;
        tempVal = arr[currentIndex];
        //switch the value of the currnetIndex with the val of the randomIndex;
        arr[currentIndex] = arr[randomIndex]
        //switch the value of the randomIndex with the randomIndex;
        arr[randomIndex] = tempVal;
    }
    return arr;
    
}


shuffleArray([1,2,3,4,5]);
