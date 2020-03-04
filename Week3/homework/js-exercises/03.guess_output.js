'use strict';

// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

// The output would be 12.
// The variable a is defined and initialized with 10 in global scope. Then a function is created and assigned to variable x. "a" is reassigned with 12 inside the x function. As we did not re-declare the variable and just reassigned it and inner function can access the value of "a" in outer scope (closure), when the function is called twice we get the result of 12. 
