const clickMeBtnEl = document.querySelector("#myButton")

clickMeBtnEl.addEventListener("click", function () {
    alert("Button clicked!");
});
clickMeBtnEl.addEventListener("mouseover", function () {
    document.body.style.backgroundColor = "#312f2f";
})

clickMeBtnEl.addEventListener('mouseout', function () {
    document.body.style.backgroundColor = "initial";
})