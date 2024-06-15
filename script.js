let counterValue = document.getElementById("counter");

function increment() {
    let value = parseInt(counterValue.innerText);
    value = value + 1
    counterValue.innerHTML = value;
}

function decrement() {
    let value = parseInt(counterValue.innerText);
    value = value - 1
    counterValue.innerHTML = value;
}

function reset() {
    counterValue.innerHTML = 0;
}

