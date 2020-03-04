'use strict';
// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

//  When the function f1(x) fired, it is called by directly passing the value of the variable x as the argument. Changing the argument inside the function doesn’t affect the variable passed from outside the function. so the output will be 9.

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

// In Javascript objects and arrays follows pass by reference. Function f2() is called by passing the reference of the variable as the argument. Changing the argument inside the function affect the variable passed from outside the function. So, the output will be {x: 10}.