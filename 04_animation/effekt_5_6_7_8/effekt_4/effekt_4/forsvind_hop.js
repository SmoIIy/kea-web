const blue = document.querySelector("#blue_container");
const red = document.querySelector("#red_container");

red.addEventListener("click", forsvind);
red.addEventListener("animationend", hop);

function forsvind() {
    red.classList.add("forsvind");
}

function hop() {
    blue.classList.add("hop");
}