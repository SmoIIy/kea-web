const blue = document.querySelector("#blue_container");
const red = document.querySelector("#red_container");
const redSprite = document.querySelector("#red_sprite");
const blueSprite = document.querySelector("#blue_sprite");

let point = 0;
window.addEventListener("load", sidenVises);

//function addFlyv() {
//    red.classList.add("flyv");
//    red.classList.add("pos1");
//}

function sidenVises(){
    console.log("Page Loaded");
    //indsæt flere classes på én gang
    red.classList.add("flyv", "pos1");
    blue.classList.add("flyv", "pos2");
    red.addEventListener("mousedown", clickRedHandler);
    blue.addEventListener("mousedown", clickBlueHandler);
}

function clickRedHandler() {
    red.classList.add("frys");
    redSprite.classList.add("forsvind");
    red.addEventListener("animationend", redReset);
}

function redReset() {
    point++;
    document.querySelector("#score").innerHTML = point;
    red.classList = "";
    redSprite.classList = "";
    red.offsetLeft;
    red.classList.add("flyv", "pos2")
}

function clickBlueHandler() {
    blue.classList.add("frys");
    blueSprite.classList.add("forsvind");
    blue.addEventListener("animationend", blueReset);
}

function blueReset() {
    point--;
    document.querySelector("#score").innerHTML = point;
    blue.classList = "";
    blueSprite.classList = "";
    blue.offsetLeft;
    blue.classList.add("flyv", "pos1")
}