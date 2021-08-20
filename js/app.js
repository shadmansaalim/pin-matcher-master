//Using Recursive Function To Generate 4 Digit Pin
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        if (number == '<') {
            if (calcInput.value.length == 1 || calcInput.value.length == 0) {
                calcInput.value = '';
            }
            else {
                calcInput.value = Math.floor(calcInput.value / 10);
            }

        }
    }
    else {
        const previousNumber = calcInput.value
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }


});


let count = 3;
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;


    let pinUpdate = document.getElementById('pin-update');

    if (pin != '') {
        if (pin == typedNumbers) {

            pinUpdate.innerText = 'Congratulations Pin Matched';

        }
        else {



            count -= 1;

            var tryCounter = document.getElementById('try-counter');
            tryCounter.innerText = count;


            if (count == 0) {
                pinUpdate.innerText = 'Invalid Pin! Please try again.';

            }

        }

    }

}




