let previousValue = "0";
let currentValue = 0;
let newValue = "0";
let currentOperation = "";
let isResultDisplayed = false;

function updateDisplay() {
    document.querySelector(".displayUnit").value = currentValue;
}

function btn(value) {
    if (currentOperation === "") {
        // If no operation is selected, update previousValue.
        previousValue += value;
        currentValue = previousValue.slice(1); // Update currentValue for immediate display.
    } else if (currentOperation !== "") {
        // If an operation is selected, update newValue.
        newValue += value;
        currentValue = newValue.slice(1); // Update currentValue for immediate display.
    }
    if (isResultDisplayed && currentOperation === "") {
        // If a result is displayed, clear the calculator state and start a new calculation.
        currentValue = 0;
        previousValue = 0;
        newValue = 0;
        currentOperation = "";
        isResultDisplayed = false;
    }
    updateDisplay()
}

function square() {
    previousValue = Math.pow(previousValue, 2);
    currentValue = previousValue;
    updateDisplay();
}

function squareRoot() {
    previousValue = Math.sqrt(previousValue);
    currentValue = previousValue;
    updateDisplay()
}

function del() {
    if (currentOperation === "") {
        previousValue = previousValue.slice(0, -1);
        currentValue = previousValue.slice(1);
    } else if (currentOperation !== "") {
        newValue = newValue.slice(0, -1);
        currentValue = newValue.slice(1);
    } else {
        currentValue = 0
    }

    updateDisplay();
}

function operation(operator) {
    if (currentOperation !== "" && newValue !== 0) {
        calculate();
    }
    currentOperation = operator;
}


function calculate() {
    let num1 = parseFloat(previousValue);
    let num2 = parseFloat(newValue);

    switch (currentOperation) {
        case "+":
            currentValue = (num1 + num2);
            break;
        case "-":
            currentValue = (num1 - num2);
            break;
        case "x":
            currentValue = (num1 * num2);
            break;
        case "/":
            currentValue = (num1 / num2);
            break;

        default:
            alert("Please choose correct operator")
    }
    previousValue = currentValue;
    newValue = 0;
    currentOperation = "";
    isResultDisplayed = true;
    updateDisplay()

}


function allClear() {
    currentValue = 0;
    previousValue = 0;
    isResultDisplayed = false;
    currentOperation = "";
    updateDisplay();
}