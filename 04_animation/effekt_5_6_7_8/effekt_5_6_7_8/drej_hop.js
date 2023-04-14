const blue = document.querySelector("#blue_container");
const red = document.querySelector("#red_container");

window.addEventListener("load", drej);
red.addEventListener("animationend", hop)

function drej() {
    red.classList.add("drej");
}
function hop() {
    blue.classList.add("hop");
}