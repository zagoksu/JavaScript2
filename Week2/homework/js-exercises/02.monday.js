'use strict'
const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30, // specified in minutes
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];

const hourlyRate = 25;

  function calculateTotal(arr){
    let total = arr.map(elem => elem.duration)
              .reduce((acc,duration) =>(acc + duration/60 * hourlyRate),0)
              .toFixed(2); //Convert a number into a string, keeping only two decimals
    return console.log(`The total amount earned: €${total}`)
  }
  
  calculateTotal(mondayTasks)
