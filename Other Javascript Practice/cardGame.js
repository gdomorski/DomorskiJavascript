function WarGame(Steve, Jake) {
  steveCounter = 0;
  jakeCounter = 0;
  
 var Cards = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King", "Ace"]
    
if(Cards.indexOf(Steve[0]) > Cards.indexOf(Jake[0])) { 
    steveCounter++;
 } else {
    jakeCounter++;
 }
 
if(Cards.indexOf(Steve[1]) > Cards.indexOf(Jake[1])) { 
    steveCounter++;
 } else {
    jakeCounter++;
 }
 
if(Cards.indexOf(Steve[2]) > Cards.indexOf(Jake[2])) { 
    steveCounter++;
 } else {
    jakeCounter++;
 }
 
    if(steveCounter > jakeCounter) {
        return "Steve wins " + steveCounter + " to " + jakeCounter; 
    } else {
        return "Jake wins " + jakeCounter + " to " + steveCounter;
    }
 
    
}


WarGame(['King','5','9'], ["5", "6", "7"]);



1440-750






//Card Game

function winner(deckSteve, deckJosh) {
  var rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
  var steve_score = 0;
  var josh_score  = 0;
 
  
  for (var card_idx = 0; card_idx < deckSteve.length; card_idx++) {
  
    if (rank.indexOf(deckSteve[card_idx]) > rank.indexOf(deckJosh[card_idx])) {
      steve_score++;
    } else if (rank.indexOf(deckSteve[card_idx]) < rank.indexOf(deckJosh[card_idx])) {
      josh_score++;      
    }
    
  }
  
  if (steve_score > josh_score) {
    var msg = "Steve wins " + steve_score + " to " + josh_score;
  } else if (steve_score < josh_score) {
    var msg = "Josh wins " + josh_score + " to " + steve_score;
  } else {
    var msg = "Tie";
  }
  
  return msg;
}


