const form = document.querySelector('form');
const button = document.querySelector('button');
const value = document.querySelector('.input-value');
const result = document.querySelector('.result');
const resultText = document.querySelector('.result-text');
const celsiusSign = `&deg;C`;
const fahrenheitSign = `&deg;F`;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let query = form.q.value;
    let inputValue = Number(value.innerText);

    if (resultText.classList.contains('d-none')) {
        resultText.classList.remove('d-none');
    }

    if (query === 'A') {
        let outputValue = (inputValue + 32) * (1.8);
        result.innerHTML = `<div class="result text-center text-white py-1 display-3">${outputValue}<span class="sign">${fahrenheitSign}</span></div>`;

    } else if (query === 'B') {
        let outputValue = (inputValue - 32) * (0.555);
        result.innerHTML = `<div class="result text-center text-white py-1 display-3">${outputValue}<span class="sign">${celsiusSign}</span></div>`;
    }
});