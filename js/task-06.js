const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

const num = Number(dataLength);
console.log(num);

input.addEventListener('blur', check);

function check() {
    if (input.value.length === num) {
        input.classList.add('valid'),
            input.classList.remove('invalid')
    }
    else {
        input.classList.add('invalid'),
            input.classList.remove('valid')
    }
}