'use strict';

const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];
//  first way

// creating array of ages 
let ages = hackYourFutureMembers.map(member => member.age)

// console.log(ages) // prints [ 33, 32, 27, 22 ]

let sumAges = function(arr) {
  let total = arr.reduce(((acc, age) => acc + age), 0);
  return total;
}

//  console.log(sumAges(ages)); prints 114

function collectiveAges(callback, arr){
  let combinedAges = callback(arr);
  console.log(`The collective age of the HYF team is: ${combinedAges}`);
}

collectiveAges(sumAges, ages)


/*  second way  */

/*
let sumAges = function(arr) {
  let total = arr
              .map(member => member.age)
              .reduce(((acc, age) => acc + age), 0);
  return total;
}

function collectiveAges(callback, arr){
  let combinedAges = callback(arr);
  console.log(`The collective age of the HYF team is: ${combinedAges}`);
}

collectiveAges(sumAges, hackYourFutureMembers)

*/


