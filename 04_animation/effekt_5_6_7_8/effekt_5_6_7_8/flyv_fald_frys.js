const blue = document.querySelector("#blue_container");
const red = document.querySelector("#red_container");

window.addEventListener("load", addFlyv);
red.addEventListener("click", addFald);

function addFlyv() {
    red.classList.add("flyv");
}

function addFald(){
    red.classList.add("fald");
}