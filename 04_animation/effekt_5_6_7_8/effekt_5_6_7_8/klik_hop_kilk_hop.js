
const blue = document.querySelector("#blue_container");
const red = document.querySelector("#red_container");

red.addEventListener("click", addHop);
red.addEventListener("animationend", removeHop);

function addHop() {
    red.classList.add("hop");
    console.log("test");
}
function removeHop() {
    red.classList.remove("hop");
}