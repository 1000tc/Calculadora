

const display=document.getElementById("display");
const buttons=document.getElementsByClassName("button");
let expression = "";
let lastButtonWasOperator = false;



for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const buttonText = this.innerHTML;
    handleButtonClick(buttonText);
  });
}
function handleButtonClick(buttonText) {
  if (buttonText === "=" ) {
    if (expression != "" && !lastButtonWasOperator) {
    calculateResult();}
  }
   else if (buttonText == "C") {
    clearDisplay();
  }
   else if (buttonText === "<") {
    removeLastDigit();
  }

  else if (isOperator(buttonText)) {
      if (!lastButtonWasOperator) {
        expression += buttonText;
        updateDisplay(buttonText);
        lastButtonWasOperator = true;
      }
    }
   else {
    updateDisplay(buttonText);
    lastButtonWasOperator = false;
    
  }
}

function isOperator(buttonText) {
  const operators = ["+", "-", "*", "/","."];
  return operators.includes(buttonText);
}

function updateDisplay(value) {
  if (!lastButtonWasOperator){
  display.innerHTML += value;
}}

function calculateResult() {
  const expression = display.innerHTML;
  let result = eval(expression);

display.innerHTML = result;
}


function clearDisplay() {
  display.innerHTML = "";
}


const MAX_DISPLAY_LENGTH = 10;

function updateDisplay(value) {
  if (display.innerHTML.length < MAX_DISPLAY_LENGTH) {
    display.innerHTML += value;
  }
}