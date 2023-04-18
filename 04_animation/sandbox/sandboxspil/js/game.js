const fisk = document.querySelector("#fisk_container");
const skrald = document.querySelector("#skrald_container");
const fiskSprite = document.querySelector("#fisk_sprite");
const skraldSprite = document.querySelector("#skrald_sprite");
let randomPositionFisk = Math.floor(Math.random() * 5) + 1;
let randomPositionSkrald = Math.floor(Math.random() * 5) + 1;

let point = 0;
window.addEventListener("load", setup);

function setup() {
    console.log("Page Loaded");
    fisk.classList.add("move_right", "fisk_pos_" + randomPositionFisk);
    skrald.classList.add("move_down", "skrald_pos_" + randomPositionSkrald);
    fisk.addEventListener("mousedown", clickFiskhandler);
    skrald.addEventListener("mousedown", clickSkraldhandler);   
}

function clickFiskhandler() {
    let randomPositionFisk = Math.floor(Math.random() * 5) + 1;
    fisk.classList.add("frys");
    fiskSprite.classList.add("remove");
    fisk.addEventListener("animationend", fiskReset);
}

function clickSkraldhandler() {
    let randomPositionSkrald = Math.floor(Math.random() * 5) + 1;
    skrald.classList.add("frys");
    skraldSprite.classList.add("remove");
    skrald.addEventListener("animationend", skraldReset);
}

function fiskReset() {
    console.log("Point Added - fiskposition is " + randomPositionFisk);
    point++;
    document.querySelector("#point").innerHTML = point;
    fiskSprite.classList = "";
    fisk.classList = "";
    fisk.offsetLeft;
    fisk.classList.add("move_right", "fisk_pos_" + randomPositionFisk);
}

function skraldReset() {
    console.log("Point Removed - skraldposition is " + randomPositionSkrald);
    point--;
    document.querySelector("#point").innerHTML = point;
    skraldSprite.classList = "";
    skrald.classList = "";
    skrald.offsetLeft;
    skrald.classList.add("move_down", "skrald_pos_" + randomPositionSkrald);
}