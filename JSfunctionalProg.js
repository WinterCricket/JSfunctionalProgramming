// function sliceHouses(house, beginHouse, endHouse) {
  
//   return house.slice(beginHouse, endHouse);
  
// }
// var inputHouse = ["Mobile Home", "Small Camp", "Single Family", "Multi-Family"];

var dogs = [
  {weight: "fat", color: "red"}, 
  {weight: "thin", color: "blue"}, 
  {weight: "just right", color: "brown"},
  {weight: "fat", color: "brown"}
];

var filterDogs = dogs.filter(function(dog){
	return dog.color === "brown";
});
var newVar = filterDogs.map(function(filtered) {
	return filtered['weight'];
  
});


//output is    ["just right","fat"]
