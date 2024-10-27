let input = document.querySelector(".input");
let storedValue = "";
let operator = null;
let currentValue = "";
let buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;
        if (!isNaN(value) || value === ".") {
            currentValue += value;
            input.value = currentValue;
        } else if (value === "+" || value === "-" || value === "*" || value === "/") {
            storedValue = currentValue;
            operator = value;
            input.value = currentValue + " " + operator + " ";
            currentValue = "";
        } else if (value === "=") {
            let result;
            let firstValue = parseFloat(storedValue);
            let secondValue = parseFloat(currentValue);
            if (operator === "+") {
                result = firstValue + secondValue;
            } else if (operator === "-") {
                result = firstValue - secondValue;
            } else if (operator === "*") {
                result = firstValue * secondValue;
            } else if (operator === "/") {
                result = firstValue / secondValue;
            }
            input.value = result;
            currentValue = result.toString();
            operator = null;
        } else if (value === "C") {
            currentValue = "";
            storedValue = "";
            operator = null;
            input.value = "";
        }
    });
});
