'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for(let i = startIndex; i <= stopIndex; i++){
    numbers.push(i) 
  }
  numbers.forEach(number => {
    if(number % 3 === 0 && number % 5 === 0){
      threeCallback(number);
      fiveCallback(number);
    } else if (number % 3 === 0){
      threeCallback(number);
    } else if (number % 5 === 0){
      fiveCallback(number);
    }
  })
}

function sayThree(num){
  if(num % 3 === 0){
    console.log(`Number ${num} is divisible by 3.`);
}};

function sayFive(num){
  if(num % 5 === 0){
    console.log(`Number ${num} is divisible by 5.`);
}};

threeFive(10, 15, sayThree, sayFive);