'use strict';

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

function removeLemons(arr){
  let noLemons = arr.filter(fruit => fruit !== 'Lemon')
                    .join(', ')
  console.log(`My mom bought me a fruit basket, containing ${noLemons}!`)
}

removeLemons(fruitBasket)
