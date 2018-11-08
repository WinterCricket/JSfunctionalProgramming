// function sliceHouses(house, beginHouse, endHouse) {
  
//   return house.slice(beginHouse, endHouse);
  
// }
// var inputHouse = ["Mobile Home", "Small Camp", "Single Family", "Multi-Family"];

rest operation and spread…
const sum = (function() {
  
  "use strict";
  return function sum(...args) {
    
    return args.reduce((a, b) => a + b, 0);
  };
  
})();
  function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(sum(1, 2, 3)); // 6




