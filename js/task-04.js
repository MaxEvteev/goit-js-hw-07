let counterValue = 0;

const refs = {
    increment: document.querySelector('[data-action="increment"]'),
    decrement: document.querySelector('[data-action="decrement"]'),
    value: document.querySelector('#value')
}

const onIncrement = function () {
    counterValue += 1;
    refs.value.textContent = counterValue;
}

const onDecrement = function () {
    counterValue -= 1;
    refs.value.textContent = counterValue;
}

refs.increment.addEventListener('click', onIncrement);
refs.decrement.addEventListener('click', onDecrement);