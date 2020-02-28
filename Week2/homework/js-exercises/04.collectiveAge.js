'use strict';

const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];
//  first way

  function combinedAges(arr){
  let ages = arr.map(member => member.age)
   return sumAges(ages)
}

function sumAges(arr){
  let total = arr.reduce(((acc, age) => acc + age), 0);
  console.log(`The collective age of the HYF team is: ${total}`);
}

combinedAges(hackYourFutureMembers)


 // second way              
 /*
function getAges(arr){
   return arr.map(elem => elem.age).reduce((acc, elem) => acc + elem);
}

function printAges(callback){
  return `The collective age of the HYF team is: ${callback}` 
}

console.log(printAges(getAges(hackYourFutureMembers)));

*/

/* third way

let sumOfAges = hackYourFutureMembers.reduce((total, item) => {
  return  total + item.age ;
}, 0)

console.log(sumOfAges)
//114
*/

// fourth way
/*
let printAges = function(arr){

    let callback = arr.map(elem => elem.age).reduce((acc, value) => acc + value)
    console.log(`The collective age of the HYF team is: ${callback}.`)
  }

printAges(hackYourFutureMembers);
*/
