function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        // console.log('pin not 3 digit')
        return getPin();
    }
}


function generatePin () {
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const generateInput = document.getElementById('generate-input');
    generateInput.value = pin;
})


document.getElementById('calculate-body').addEventListener('click', function (event) {
    const Characters = event.target.innerText;
    const inputCalc = document.getElementById('input-calc');
    const previousNumber = inputCalc.value;
    if (isNaN(Characters)) {
        if (Characters === 'C') {
            inputCalc.value = '';
        }else if (Characters === 'Del') {
            const digit = previousNumber.split('');
            digit.pop();
            const reamingDigits = digit.join('');
            console.log(reamingDigits)
            inputCalc.value = reamingDigits;

            
        }
    }
    else {
        const newTypeNumber = previousNumber + Characters;
        inputCalc.value = newTypeNumber
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const generateInput = document.getElementById('generate-input');
    const inputCalc = document.getElementById('input-calc');

    const rightMessage = document.getElementById('right');
    const wrongMessage = document.getElementById('wrong')
    
    if (generateInput.value === inputCalc.value) {
        rightMessage.style.display = 'block';
        wrongMessage.style.display = 'none'
    } else {
        wrongMessage.style.display = 'block'
        rightMessage.style.display = 'none';
    }

})


