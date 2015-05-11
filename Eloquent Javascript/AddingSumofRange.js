//Adding the sume of a Range


function range(start, end){
    var sum  = 0;
    var arr = [];
    for(var i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
	

}


function sum(arr){
    return eval(arr.join("+"));
    
}


range(1, 10);
sum(arr);