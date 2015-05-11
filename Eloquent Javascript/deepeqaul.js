function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" || b == null || typeof b != "object")  //
    return false;