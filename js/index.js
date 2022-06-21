const userInput = document.getElementById("givenInput");
const result = document.getElementById("result");

const submitButton = (document.getElementById("submitButton").onclick =
  calculateSeq);



let fIndex = userInput.value;

function calculateSeq() {
  console.log("..calculating sequence.. ");

  // a + b are the numbers added, c is the index
  let a = 0,
    b = 1,
    c = fIndex;

  for (let i = 2; i <= fIndex; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  console.log(c);
  result.innerHTML = c;
}
