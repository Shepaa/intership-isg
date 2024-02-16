const textInputEl = document.querySelector("#textInput")

textInputEl.addEventListener("keydown", function (event) {
    console.log("Key code:", event.keyCode);

    if (event.keyCode === 13) {
        event.preventDefault();
        alert("You entered: " + this.value);
    }
})

textInputEl.addEventListener("keyup", function (event) {
    console.log("Released key code:", event.keyCode);
})

textInputEl.addEventListener("keypress", function(event) {
    console.log("Key pressed code:", event.keyCode);
})