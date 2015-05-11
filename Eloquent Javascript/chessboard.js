//Making a Chessboard



function createChessBoard(size){
    var chessBoardString = "";
    var rowNumber = 0;
    for (var i = 0; i < size; i++) {  // the outer for loop creates a new line, 
        for (var j = 0; j < size; j++){ //the inner loop creates a # or space
            if ((j + i) % 2 == 0){
            chessBoardString += "#";
            } else {
                chessBoardString += " ";
                }
            }   
        chessBoardString += "\n";
        rowNumber++;
    }
return chessBoardString;
}


console.log(createChessBoard(8));