const count = document.querySelector('.count');
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');
let number = parseInt(count.innerHTML);

function checkNumber(){
    if (number < 0){
        count.style.color = 'red';
    } else if (number > 0){
        count.style.color = 'green';
    } else{
        count.style.color = 'black';
    }
}

const decreaseNumber = () => {
    decrease.addEventListener('click', () => {
        number -= 1;
        count.innerHTML = number;
        checkNumber();
    })
}

const resetNumber = () => {
    reset.addEventListener('click', () => {
        number = 0;
        count.innerHTML = 0;
        checkNumber();
    })
}

const increaseNumber = () => {
    increase.addEventListener('click', () => {
        number += 1;
        count.innerHTML = number;
        checkNumber();
    })
}

decreaseNumber();
resetNumber();
increaseNumber();
