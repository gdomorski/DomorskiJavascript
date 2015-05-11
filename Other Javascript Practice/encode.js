function encode(key, tweet){
	tweet = tweet.toUpperCase();
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var index;
	var phrase = "";
	
	for(var i = 0; i < tweet.length; i++){  //loops through the for loop
		index = alphabet.indexOf(tweet[i])  // makes each character a number and stores it in the variable index
		key[index]  // gets the letter from key using the index
		
		if(index === -1){
		phrase += tweet[i]; //returns the same character if it does not find a letter
		} else {
		phrase = phrase + key[index];
		}
		
	}	
	return phrase;
}

encode("REGKFJHUMWBOAXCDPLSQIYZTNV", "hello");




function decode(alphabet, eTweet){
	tweet = eTweet.toUpperCase();
	var key = "REGKFJHUMWBOAXCDPLSQIYZTNV";
	var index;
	var phrase = "";
	
	for(var i = 0; i < tweet.length; i++){  //loops through the for loop
		index = key.indexOf(tweet[i])  // makes each character a number and stores it in the variable index
		alphabet[index]  // gets the letter from key using the index
		
		if(index === -1){
		phrase += eTweet[i]; //returns the same character if it does not find a letter
		} else {
		phrase = phrase + alphabet[index];
		}
		
	}	
	return phrase;
}

decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "UFOOC");










}

