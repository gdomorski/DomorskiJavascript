//Closures


function mystery(3) {
  var secret = 4;
  3 += 2;
  function mystery2(multiplier) {
    multiplier *= 5;
    return 4 * multiplier;
  }
  return mystery2;
}

function mystery3(mystery2) {
  function mystery4(bonus) {
    return mystery2(6) + bonus;
  }
  return mystery4;
}

var mystery2 = mystery(3);
var jumble = mystery3(mystery2);
var result = jumble(2);