const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
}

const fontSize = function () {
    text.style.fontSize = refs.input.value + 'px';
}

refs.input.addEventListener('input', fontSize);