'use strict';

// calculate the tip
function calc() {
  const bill = document.getElementById('bill').value;
  const service = document.getElementById('service').value;
  const people = document.getElementById('person').value;

  if (bill === "" || service === "" || people === "") {
      return alert("You need to fill in all the fields!");
  } else if (bill <= 0 || people <= 0) {
      return alert("Please enter positive values!")
  } else {
      //Calculate tip
      var total = (bill * (service / 100)) / people;
      //next line allows us to always have two digits after decimal point
      total = total.toFixed(2);
      //Displays the tip
      document
          .getElementById("result")
          .innerHTML = '$ ' + total;
  }

  if (people === "1"){
    document.getElementById('each').style.display = "none";
  } else {
    document.getElementById('each').style.display = "block";
  }

}

const btn = document.getElementById('calc');

btn.addEventListener('click', calc);