function every(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i]))             //checks to see if any of the conditions are not true and if it is, will break out of the loop and return false
      return false;
  }
  return true;
}

function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))  //checks if any of the condtions are true and if so, will return true
      return true;
  }
  return false;
}
