var names = [{
  firstName: "pedro",
  lastName: "Paramo"
}, {
  firstName: "chuck",
  lastName: "Norris"
}, {
  firstName: "vicente",
  lastName: "Fernandez"
}, {
  firstName: "electric",
  lastName: "Blue"
}];



// The map() method creates a new array with the results of calling a function for every array element.
// The map () method calls the provided function once for each element in an array, in order.

// let firstNameLttr = names.map(function(names){
// 	console.log(names.firstName[0].toUpperCase())
// 	return names.firstName[0].toUpperCase();
// });

function getFirstLetterFromFirstName(names){
	var x = [];
	for(var i = 0; i < names.length; i++){
		for (key in names[i]){
			var y = names[i];
			if(key === "firstName"){
				x.push(y[key][0].toUpperCase());
			}
		}
	}
	return x;
}


// => ["P", "C", "V", "E"] function getFirstLetterFromFirstName(names); 