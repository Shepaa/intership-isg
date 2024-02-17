const items = document.querySelectorAll(".item");
const cartItems = document.getElementById("cart-items");
const totalPriceSpan = document.getElementById("total-price");

document.addEventListener("DOMContentLoaded", function () {
    function updateTotalPrice() {
        let totalPrice = 0;
        cartItems.querySelectorAll("li").forEach(function (item) {
            totalPrice += parseFloat(item.dataset.price);
        });
        totalPriceSpan.textContent = totalPrice.toFixed(2);
        document.dispatchEvent(new Event("priceUpdated"));
    }

    document.addEventListener("itemAdded", updateTotalPrice);

    function addItemToCart(event) {
        const selectedItem = event.target;
        const itemPrice = selectedItem.dataset.price;

        const newItem = document.createElement("li");
        newItem.textContent = selectedItem.textContent;
        newItem.dataset.price = itemPrice;

        cartItems.appendChild(newItem);

        document.dispatchEvent(new Event("itemAdded"));
    }

    items.forEach(function (item) {
        item.addEventListener("click", addItemToCart);
    });
});
