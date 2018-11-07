// function sliceHouses(house, beginHouse, endHouse) {
  
//   return house.slice(beginHouse, endHouse);
  
// }
// var inputHouse = ["Mobile Home", "Small Camp", "Single Family", "Multi-Family"];

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
 
  const squaredIntegers = arr.filter((num)=> num % parseInt(num) === 0 && num > 0).map(num => Math.pow(num, 2));
  
 

  return squaredIntegers;
};
//test code
const squaredIntegers = squareList(realNumberArray)
console.log(squaredIntegers);



