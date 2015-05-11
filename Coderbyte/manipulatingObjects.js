//Manipulating Objects

var collegeFootballTeams = {
	Team1: {School: "Clemson", Coach: "Dabo Swinney", Stadium: "Clemson Memorial Stadium" },
	Team2: {School: "Wisconsin", Coach: "Paul Chryst", Stadium: "Camp Randall Stadium"},
	Team3: {School: "North Carolina", Coach: "Larry Fedora", Stadium: "Kenan Memorial Stadium"}
}

var universities = []


for(key in collegeFootballTeams){
    universities.push(collegeFootballTeams[key].School);
    universities.push(collegeFootballTeams[key].Coach)
    universities.push(collegeFootballTeams[key].Stadium)
}



console.log(universities) //makes an object now an array of all the Properties of the team


function listToArray (obj){
    var newArr = [];
    function converter(obj){
        newArr.push(obj.Team1)
        newArr.push(obj.Team2)
        newArr.push(obj.Team3)
    }
return newArr;
}


listToArray(collegeFootballTeams)


function getCoach(coachname, array){
    for(var i = 0; i < array.length; i++){
     if(array[i].Coach === coachname){
         return coachname;
     }  
    }
}

getCoach("Dabo Swinney", universities)
