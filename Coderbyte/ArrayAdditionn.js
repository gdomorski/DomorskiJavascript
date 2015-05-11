function ArrayAdditionI(arr) { 

     
 var doesThisComboWork = false;  
 
 
  arr.sort(function(a,b){return a - b})  
  var largest = arr.pop();  
  var secondLargest = arr.pop();  
  
if (secondLargest === largest){ 
    return "true";
}else{
    tester(arr); 
}


function sum (arr){
      return arr.reduce(function (a,b){ return a+b}) 
  }


function AddThemUp(arr) {
   
   if(sum(arr) + secondLargest === largest){
       return true
   }else{
      for(var j = 0; j<arr.length; j++){
    if((sum(arr) + secondLargest) - arr[j] === largest){
        return true;
      }
    }
   }
   }
   


function tester (arr){  
 if(arr.length === 0){ 
     return false; 
     
 }

 for(var i = 0; i < arr.length; i++){ 
   if(arr[i] + secondLargest === largest){  
       return doesThisComboWork = true;
   }
 }

 if(AddThemUp(arr)){
     return doesThisComboWork = true;
 }
    
 
 if(!(doesThisComboWork)){
    secondLargest = arr.pop()
    return tester(arr);
 }
 
}
   
if(doesThisComboWork){ 
return true 
}else{ 
return false;
}
 

 }

