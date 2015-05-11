
//Catsylvanian money is a strange thing: they have a coin for every denomination (including zero!). A wonky change machine in Catsylvania takes any coin of value N and returns 3 new coins, valued at N/2, N/3 and N/4 (rounding down).

//Write a function wonkyCoins(num)that returns the number of coins you are left with if you take all non-zero coins and keep feeding them back into the machine until you are left with only zero-value coins.



function wonkyCoins(num){
  num = Math.floor(num); //round num down to the nearest integer
  if (num == 0){
    return 1;
  } else {
    return wonkyCoins(num/4) + wonkyCoins(num/3) + wonkyCoins(num/2); 
  }
}










familyMembers = [
  {"name": "Emma de Milliano", "sex": "f",
   "born": 1876, "died": 1956,
   "father": "Petrus de Milliano",
   "mother": "Sophia van Damme"},
  {"name": "Carolus Haverbeke", "sex": "m",
   "born": 1832, "died": 1905,
   "father": "Carel Haverbeke",
   "mother": "Maria van Brussel"},
]

schools = [{"nick-name": "Tigers"}]

// JSON - the way JavaScript defines objects and arrays. The syntax of how to write objects and arrays.