function SecondGreatLow(arr) { 
 
 for(var i = 0; i < arr.length; i++){
  if(arr[i + 1] === arr[i]){
   arr.splice(i,1);
   i = -1 
  }
 }

  
 function arrLowest (arr){ return arr.sort(function (a,b){ return a-b})[1]}
 
 function arrHighest (arr) {return arr.sort(function (a,b){ return b-a})[1]}

 
 if(arr.length >= 2){
 return (arrLowest(arr).toString()) + " " + (arrHighest(arr).toString());
 } else {
 return arr[0].toString() + " " + arr[0].toString();
 }
}