function LetterCapitalize(str) {

    str = str.split(" ");  //splits the letters into an array of strings. A space is in the middle, because that is where it will seperate. If you did not put the space it will make each character an individual string

    for (var i = 0; i < str.length; i++) {    //loops through the array
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);  //for each string in the array, it makes the first letter uppercase and adds the rest using the substring method. The 1 at the slice says start at the after the capitalized letter and add everything after it. 
    }

    return str.join(" "); //makes an array into a string
}



