const fisk = document.querySelector("#fisk_container");
const skrald = document.querySelector("#fisk_container");
const fiskSprite = document.querySelector("#fisk_sprite");
const skraldSprite = document.querySelector("#skrald_sprite");

let point = 0;
window.addEventListener("load", setup);

function setup() {
    console.log("Page Loaded");
    fisk.classList.add("move_right", "fisk_pos_1");
    skrald.classList.add("move_down", "skrald_pos1");
    fisk.addEventListener("mousedown", clickFiskhandler);
    skrald.addEventListener("mousedown", clickSkraldhandler);   
}

function clickFiskhandler() {
    fisk.classList.add("frys");
    redSprite.classList.add("remove");
    red.addEventListener("animationend", fiskReset);
}

function clickSkraldhandler() {
    skrald.classList.add("frys");
    skraldSprite.classList.add("remove");
    skrald.addEventListener.add("animationend", skraldReset);
}

function fiskReset() {
    point++;
    document.querySelector("#score").innerHTML = point;
    fisk.classList = "";
    fisk.offsetLeft;
    fisk.classList.add("move_right", "fisk_pos_2");
}

function skraldReset() {
    point--;
    document.querySelector("#score").innerHTML = point;
    skrald.classList = "";
    skrald.offsetLeft;
    skrald.classList.add("move_down", "skrald_pos_2");
}