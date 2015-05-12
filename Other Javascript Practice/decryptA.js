//Your task is to decrypt the true meaning of a given sentence. Here's an example:

//laugh ride lol hall bozo
//On first glance, this seems like an odd sentence. However, there's a secret message hidden beneath. If you combine the last letter of each word, you will find the sensible message "hello".


function decryptA(str){
    
    var answer = "";
    var strArr = str.split(" ")
    
    for(var i = 0; i < strArr.length; i++){
       answer += strArr[i].split("").pop();
    }
    return answer;
    
}




decryptA("laugh ride lol hall bozo")
