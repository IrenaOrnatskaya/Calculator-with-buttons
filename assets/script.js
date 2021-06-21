let input = document.querySelector('.inputField');
let firstNumber = 0;
let secondNumber = 0;
let calculatedValue = '';

document.addEventListener('click', function(event) {
	let target = event.target;

	if(target.classList.contains('numberClear')) {
		calculatedValue = '';
		input.value = '';
	}
	if(target.parentNode.classList.contains('buttons') && !target.classList.contains('result') && input.value != 0) {
		firstNumber = parseInt(input.value);
		input.value = '';
		calculatedValue = target.innerHTML;
	}
    if(target.classList.contains('result')) {
    	secondNumber = parseInt(input.value);
        let result;
        switch (calculatedValue) {
        	case '/':
        	result = firstNumber / secondNumber;
        	break;
        	case '*':
        	result = firstNumber * secondNumber;
        	break;
        	case '-':
        	result = firstNumber - secondNumber;
        	break;
        	case '+':
        	result = firstNumber + secondNumber;
        	break;
            case '√':
            result = Math.sqrt(firstNumber);
            break;
            case '1/x':
            result = (1/firstNumber);
            break;
        }
        input.value = `${result}`;
    }
});