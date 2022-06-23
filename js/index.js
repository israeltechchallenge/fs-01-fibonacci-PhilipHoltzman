// const USER_INPUT = document.getElementById("givenInput"); // input
// const RESULT = document.getElementById("result"); // result display
// const FIB_URL = "http://localhost:5050/fibonacci/{$number}"; // local server

const fibForm = document.getElementById("fibForm");
const spinner = document.getElementById("spinner");
const bottomAlert = document.getElementById("bottom-alert");
const inputBox = document.getElementById("givenInput");
const result = document.getElementById("res");

let error42;

bottomAlert.style.color = "#A94442";
bottomAlert.style.background = "#F2DEDE";
bottomAlert.style.border = "#EBCCCC";
bottomAlert.style.borderWidth = "5";

inputBox.addEventListener("click", removeAlert);

function removeAlert() {
  bottomAlert.classList.add("d-none");
  inputBox.style.color = "#373A3C";
  inputBox.style.borderColor = "#373A3C";
}

fibForm.addEventListener("submit", function (e) {
  e.preventDefault();
  fib();
  //fib();
});

//submitBtn.addEventListener()

// let num = USER_INPUT.value;

function fib() {
  // Server variables
  document.getElementById("res").innerHTML = "";
  number = document.getElementById("givenInput").value;
  server = `http://localhost:5050/fibonacci/${number}`;

  // Load state variables

  let isLoading = false;

  if (number > 50) {
    console.log("ERROR TOO BIG");
    bottomAlert.classList.remove("d-none");
    inputBox.style.color = "#D9534F";
    inputBox.style.borderColor = "#D9534F";

    // } else if (number == 42) {
    //   console.log("ERROR 42 MEANING OF LIFE");
  } else if (number <= 0) {
    console.log("TOO SMALL");
  } else {
    spinner.classList.remove("d-none"); // show spinner
    fetch(server).then((response) => {
      if (!response.ok) {
        console.log("BROKEN");
        response.text().then((error42) => {
          console.log(error42);
          result.innerHTML = "Server Error: " + error42;
          result.style.color = "#D9534F";
          //result.classList.remove('fs-4');
          result.classList.remove("fw-bold");
        });
      }
      response.json().then((data) => {
        result.innerHTML = data.result;
        result.style.color = "#373A3C";
      });
      console.log(response);
      spinner.classList.add("d-none"); // remove spinner
    });
  }
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
