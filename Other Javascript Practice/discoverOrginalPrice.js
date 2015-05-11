//Discover Orginal Price

function discoverOriginalPrice(discountedPrice, salePercentage){
  var answer = 0;  
  answer = discountedPrice / ((100-salePercentage)/100);  // mathamatical formula for finding the orginal price
  return Math.round((answer)*100)/100; //round the value to the second decimal point
}
