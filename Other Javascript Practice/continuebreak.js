//Notes on continue and break statements

  for(var i = 0; i < 10; i++){
    if(i === 4){
      break;  //break jumps of ouf the loop
    }
}
	console.log(i);


 for(var i = 1; i < 11; i++){
    if(i === 4){
      continue;  //continue jumps over the current value
    }
    console.log(i); //will log every number but 4
}
