const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

let first = "";
let second = "";
let operator = "";
let enteringSecond = false;

buttons.addEventListener("click", function (e) {
  const target = e.target;

  if (target.tagName !== "BUTTON") return;

  const type = target.dataset.type;
  const value = target.innerText;

  if (type === "num") {
    handleNumber(value);
  }
  else if (type === "op") {
    handleOperator(value);
  }
  else if (type === "equal") {
    calculate();
  }
  else if (type === "clear") {
    clearAll();
  }
});

function handleNumber(value) {
  if (!enteringSecond) {
    first += value;
    display.value = first;
  } else {
    second += value;
    display.value = second;
  }
}

function handleOperator(op) {
  operator = op;
  enteringSecond = true;
}

function calculate() {
  let num1 = Number(first);
  let num2 = Number(second);
  let result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  display.value = result;
}

function clearAll() {
  first = "";
  second = "";
  operator = "";
  enteringSecond = false;
  display.value = "";
}