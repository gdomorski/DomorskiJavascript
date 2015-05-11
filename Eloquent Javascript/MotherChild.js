function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;  //person.name takes out the name, makes it the key, person, is just the object inside the object
});

// Find all mother-child relationships.
// var motherChildRelationships = [{
// 	motherName: null,
// 	childName: null,
// 	childBirthYear: 0,
// 	motherBirthYear: 0,
// 	motherAge: 0
// }];

var motherChildRelationships = [];

ancestry.forEach(function(person) {
	relationship = {};  //create an empty object named relationship
	
	if(person.mother){
		// Fill the relationship object
		relationship["motherName"] = person.mother; 
		relationship["childName"] = person.name;
		relationship["childBirthYear"] = person.born;
		mother = byName[person.mother];  //access the mothers name by referencing the byName object
		if (mother) {
			relationship["motherBirthYear"] = mother.born;
			// Find age of mother when child is born.
			relationship["ageDifference"] = person.born - mother.born; // subtract the two to get the age difference
	
	  	  	//motherName is a new key that we are setting. person.mother takes the mother value out of the object

			// Add relationship object to motherChild
			motherChildRelationships.push(relationship);
		}
	}
});

// Average this array.
// Set up array
var ageDifferences = [];

// Push age differences to array
motherChildRelationships.forEach(function(relationship) {
	ageDifferences.push(relationship.ageDifference);

});


average(ageDifferences);

//TESTING
console.log(motherChildRelationships);





