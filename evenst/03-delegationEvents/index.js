const addElementBtn = document.querySelector('#addElementBtn')
const ul = document.getElementById("dynamic-list");
addElementBtn.addEventListener('click', function () {
    const li = document.createElement('li')
    li.textContent = `Item: ${Math.random()}`
    ul.appendChild(li)
})


ul.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
        alert("Clicked on: " + event.target.textContent);
    }
})

