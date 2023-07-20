let totalCounter = 0;

function addToCart(button) {
    const productItem = button.closest('.product-item');

    const addText = productItem.querySelector("#addToCartButton");
    addText.style.display = "none";

    const cartCounter = document.getElementById("counterCart");
    cartCounter.style.display = "flex";

    const counterWrapper = productItem.querySelector(".counter-wrapper");
    counterWrapper.style.display = "flex";

    const cartImage = document.getElementById("cartImage");
    cartImage.setAttribute("src", "assets/Shopping_Cart(item).svg");

    updateTotalCounter();
}

function decrementCounter(button) {
    const productItem = button.closest('.product-item');
    const counterElement = productItem.querySelector("#product-item__counter");
    let counter = parseInt(counterElement.innerText);

    if (counter === 1) {

        const counterWrapper = productItem.querySelector(".counter-wrapper");
        console.log(counterWrapper);
        counterWrapper.style.display = "none";

        const addText = productItem.querySelector(".product-item__button");
        console.log(addText);
        addText.style.display = "flex";

        updateTotalCounter();
    }
    else {
        counter--;
        counterElement.innerText = counter.toString();
        updateTotalCounter();
    }
}

function incrementCounter(button) {
    const productItem = button.closest('.button-container');
    const counterElement = productItem.querySelector("#product-item__counter");
    let counter = parseInt(counterElement.innerText);
    counter++;
    counterElement.innerText = counter.toString();
    updateTotalCounter();
}

function updateTotalCounter() {
    const counterWrappers = document.querySelectorAll(".counter-wrapper");
    let total = 0;

    counterWrappers.forEach(counterWrapper => {
        if (window.getComputedStyle(counterWrapper).display !== "none") {
            const counter = counterWrapper.querySelector(".counter");
            total += parseInt(counter.innerText);
        }
    });

    totalCounter = total;
    const totalCounterElement = document.getElementById("counterCart");
    totalCounterElement.innerText = totalCounter.toString();

    if (totalCounter < 1) {
        const cartCounter = document.getElementById("counterCart");
        cartCounter.style.display = "none";

        const cartImage = document.getElementById("cartImage");
        cartImage.setAttribute("src", "assets/Shopping_Cart.svg");
    }
}