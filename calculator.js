let isNewInput = false;

function clearDisplay() {
    document.getElementById('display').value = 0;
    isNewInput = false;
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === 'Error' || isNewInput) {
        display.value = value;
        isNewInput = false;
    } else {
        display.value += value;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        display.value = result;
        isNewInput = true;
    } catch (e) {
        display.value = 'Error';
        isNewInput = true;
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Escape', 'Backspace'];
    if (!allowedKeys.includes(key)) {
        return;
    }

    event.preventDefault();

    if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    } else {
        appendToDisplay(key);
    }
});

