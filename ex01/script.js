const result = document.getElementById('output');
const num = document.getElementById('myNum');
const btn = document.getElementById('testBtn');

btn.addEventListener('click', checkVal);

function checkVal(){
    let val = num.value;
    let message = numChecker(val);
    result.innerHTML = message;
    //output(val.value);
}
function numChecker(num){
    if(num % 2 == 0){
        return 'Number is even';
    } else {
        return 'Number is not even';
    }
}
