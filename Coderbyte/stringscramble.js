
//String Scrambler


var str = "I am really looking forward to going to coding school";

var shuffled = str.split("").sort(function(){return 0.5-Math.random()}).join('');
