const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});

function calculate(event) {

    const clickedButtonValue = event.target.value;
    if (clickedButtonValue === '=') {
        if (display.value.includes('÷0')) {
            alert('You can\'t divide by zero')
            display.value = '';
        }
        if (display.value !== '' && display.value.slice(-1) !== '+' && display.value.slice(-1) !== '-' && display.value.slice(-1) !== '*' && display.value.slice(-1) !== '÷') {
            display.value = Evaluate(display.value);
        }
    } else if (clickedButtonValue === 'C') {
        display.value = '';
    } else {
        if (!((clickedButtonValue === '+' || clickedButtonValue === '-' || clickedButtonValue === '*' || clickedButtonValue === '÷') &&
            (display.value === '' || display.value.slice(-1) === '+' || display.value.slice(-1) === '-' || display.value.slice(-1) === '*' || display.value.slice(-1) === '÷'))) {
            display.value += clickedButtonValue;
        }
    }
}
//TODO jQuery + ajax
function Evaluate(expression) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'Calculator/Evaluate/' + expression, false);
    xmlHttp.send();
    xmlHttp.onload = function () {
        if (xmlHttp.status != 200) {
            alert(`Error ${xmlHttp.status}: ${xmlHttp.statusText}`);
        }
    };
    if (xmlHttp.readyState === 4)
        return xmlHttp.response;
}