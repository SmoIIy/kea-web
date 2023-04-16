const blue = document.querySelector("#blue_container");
const red = document.querySelector("#red_container");

window.addEventListener("load", drej);
red.addEventListener("animationiteration", hop);
blue.addEventListener("animationend", removeHop);

function drej() {
    red.classList.add("drej");
}
function hop() {
    blue.classList.add("hop");
}
function removeHop(){
    blue.classList.remove("hop");
}