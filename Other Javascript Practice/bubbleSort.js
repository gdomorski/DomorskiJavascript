

var bubbleSort = function(arr) {
  arr.forEach(function (value, index){
    for(var j = index + 1; j < arr.length; j++){
      if(value > arr[j]){
        var temp = arr[index];
        arr[index] = arr[j];
        arr[j] = temp;
      }
    }
  });
  return arr;
};






Bubblesort([1,2,4,12,11,9]);
