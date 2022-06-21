const userInput = document.getElementById("givenInput");
const result = document.getElementById("result");
const hardcoded = document.getElementById("hardcoded");

const submitButton = (document.getElementById("submitButton").onclick =
  mainSeq);

let solution = 55;

let x = userInput;
let y = result;

// hardcoded milestone one variables
let hardcodeXindex = 5;
let hardcodeYnumber = 5;

function mainSeq() {
  calculateSeq();
  printFibSequence();
}

function calculateSeq() {
  console.log("calculating sequence.. ");
}

function printFibSequence() {
  hardcoded.innerHTML = hardcodeXindex;
  result.innerHTML = hardcodeYnumber;

  console.log("printing sequence..");
}
