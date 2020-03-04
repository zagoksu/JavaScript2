'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

// To try function with numbers.
const numbers = [1, 1, 2, 3, 4, 2, 12, 12, 34, 4]

let removeDuplicates = function(array) {
  let newArray = []
  array.map(x => !newArray.includes(x) ? newArray.push(x) : false);
  console.log(newArray);
  };
  
  removeDuplicates(letters);
  removeDuplicates(numbers);

// ----------------------------- second way  ------------------------------------------  

// const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
// const numbers = [1, 1, 2, 3, 4, 2, 12, 12, 34, 4]

// function removeDuplicate(array){
//     const uniqueCharacters = new Set(array);
//     const backToArray = [...uniqueCharacters];
//     return backToArray
// };

// console.log(removeDuplicate(numbers));
// console.log(removeDuplicate(letters));

// //OR simpler

// const removeDuplicate = arr => console.log([...new Set(arr)]);
// removeDuplicate(letters);
// removeDuplicate(numbers);

//---------------------------------- third way ------------------------

// const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
// const numbers = [1, 1, 2, 3, 4, 2, 12, 12, 34, 4]

// function removeDuplicates(array) {
//   function duplicate(value, index, arr) { 
//       return arr.indexOf(value) === index;
//   }
//   let noDuplicate = array.filter( duplicate );
//   return noDuplicate;
// }

// console.log(removeDuplicates(letters)) 
// console.log(removeDuplicates(numbers)) 

// --------------------------------- fourth way -----------------------------------------------------

// const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
// const numbers = [1, 1, 2, 3, 4, 2, 12, 12, 34, 4]

// function removeDuplicates (array) {
//   let noDuplicate = {};
//   array.forEach(function(i) {
//     if(!noDuplicate[i]) {
//       noDuplicate[i] = true;
//     }
//   });
//   return Object.keys(noDuplicate);
// }

// console.log(removeDuplicates(letters)); 
// console.log(removeDuplicates(numbers)); 


