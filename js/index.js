// const USER_INPUT = document.getElementById("givenInput"); // input
// const RESULT = document.getElementById("result"); // result display
// const FIB_URL = "http://localhost:5050/fibonacci/{$number}"; // local server

const fibForm = document.getElementById('fibForm');

fibForm.addEventListener('submit', function(e){
  e.preventDefault();
  fib();
})

// let num = USER_INPUT.value;



function fib()  {
  document.getElementById("res").innerHTML = ''
  number = document.getElementById("givenInput").value;
  server = `http://localhost:5050/fibonacci/${number}`;
  fetch(server).then((response) => {
    response.json().then( data => { document.getElementById("res").innerHTML = data.result});
  console.log(response)});
  }

// function calculateSeqServer() {
//   //let fIndex = USER_INPUT.value;

//   let server = `http://localhost:5050/fibonacci/11`
//   fetch(server)
//   .then((response) => {
//     response.json().then(data => {
//       document.getElementById("res") = data.res
//     });
//   })
// }





// OLD FUNCTION (LOCAL)
// function calculateSeqLocal() {
  
//   console.log("..calculating sequence.. ");

//   let fIndex = USER_INPUT.value;

//   console.log("checking input for errors");
//   if (fIndex > 50) {
//     console.log("ERROR too big");
//     // make pop up type red error crap
//   } else if (fIndex == 42) {
//     console.log("ERROR Secret of life");
//     RESULT.innerText = "ERROR Secret of life";
//     ////// change text and append new html error
//   } else {
//     // a + b are the numbers added, c is the index
//     let a = 0,
//       b = 1,
//       c = fIndex;

//     for (let i = 2; i <= fIndex; i++) {
//       c = a + b;
//       a = b;
//       b = c;
//     }

//     console.log(c);
//     RESULT.innerText = c;
//   }
// }
