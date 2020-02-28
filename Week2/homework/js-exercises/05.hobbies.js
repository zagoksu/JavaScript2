'use strict';

const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];

let list = document.createElement('ul')
document.body.appendChild(list);
list.setAttribute('id', 'list');

// with map method 

function showHobbies(arr){
return arr.map(function(elem){

  let listEl = document.createElement('li')
  list.appendChild(listEl)
  listEl.innerText = elem;})
}

showHobbies(myHobbies);



//  - -----   with forEach method  -- --------
/*
function showHobbies(arr){
return arr.forEach(element => {
  let listEl = document.createElement('li')
  list.appendChild(listEl)
  listEl.innerText = element
});
}

showHobbies(myHobbies)
*/