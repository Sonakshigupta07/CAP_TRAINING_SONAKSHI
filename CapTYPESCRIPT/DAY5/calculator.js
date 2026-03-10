const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } 
    else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } 
    else if (value === "=") {
      try {
        currentInput = calculate(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } 
    else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// ---- Calculation Logic (no eval) ----
function calculate(expression) {
  const numbers = expression.split(/[\+\-\*\/]/).map(Number);
  const operators = expression.replace(/[0-9\.]/g, "").split("");

  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    const nextNumber = numbers[i + 1];

    switch (operators[i]) {
      case "+":
        result += nextNumber;
        break;
      case "-":
        result -= nextNumber;
        break;
      case "*":
        result *= nextNumber;
        break;
      case "/":
        if (nextNumber === 0) throw new Error("Divide by zero");
        result /= nextNumber;
        break;
    }
  }

  return result;
}