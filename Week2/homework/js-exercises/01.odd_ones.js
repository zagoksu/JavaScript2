'use strict';

const myNumbers = [1, 2, 3, 4];

function doubleEvenNumbers(arr){
    return arr
         .filter(x => x % 2 === 0)
         .map(x => x * 2);
}; 

console.log(doubleEvenNumbers(myNumbers));


/** Another way
 
let doubleEvenNumbers = myNumbers
                    .filter(x => x % 2 === 0)
                    .map(x => x * 2);

console.log(doubleEvenNumbers);
 */

/* another way
const even = myNumbers.filter(num => num % 2 === 0);
const double= even.map(num => num * 2)
console.log(double)
*/





