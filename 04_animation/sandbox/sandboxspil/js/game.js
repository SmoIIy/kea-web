const fisk = document.querySelector("#fisk_container");
const skrald = document.querySelector("#skrald_container");
const fiskSprite = document.querySelector("#fisk_sprite");
const skraldSprite = document.querySelector("#skrald_sprite");
const timeContainer = document.querySelector("#time_container");
const timeSprite = document.querySelector("#time_sprite");

let randomPositionFisk = Math.floor(Math.random() * 5) + 1;
let randomPositionSkrald = Math.floor(Math.random() * 5) + 1;

let point = 0;
let liv = 3;
window.addEventListener("load", setup);

function setup() {
    console.log("Page Loaded");
    //Setup positions
    fisk.classList.add("move_right", "fisk_pos_" + randomPositionFisk);
    skrald.classList.add("move_down", "skrald_pos_" + randomPositionSkrald);
    //Setup clicks
    fisk.addEventListener("mousedown", clickFiskhandler);
    skrald.addEventListener("mousedown", clickSkraldhandler); 
    //Setup restart 
    fisk.addEventListener("animationiteration", fiskReset); 
    skrald.addEventListener("animationiteration", skraldReset);
}

function clickFiskhandler() {
    liv--;
    fisk.classList.add("frys");
    fiskSprite.classList.add("remove");
    fisk.addEventListener("animationend", fiskReset);
}

function clickSkraldhandler() {
    point++;
    skrald.classList.add("frys");
    skraldSprite.classList.add("remove");
    skrald.addEventListener("animationend", skraldReset);
}

function fiskReset() {
    randomPositionFisk = Math.floor(Math.random() * 5) + 1;
    console.log("Point Added - fiskposition is " + randomPositionFisk);
    document.querySelector("#point").innerHTML = point;
    fiskSprite.classList = "";
    fisk.classList = "";
    fisk.offsetLeft;
    fisk.classList.add("move_right", "fisk_pos_" + randomPositionFisk);
}

function skraldReset() {
    randomPositionSkrald = Math.floor(Math.random() * 10) + 1;
    console.log("Point Removed - skraldposition is " + randomPositionSkrald);
    document.querySelector("#point").innerHTML = point;
    skraldSprite.classList = "";
    skrald.classList = "";
    skrald.offsetLeft;
    skrald.classList.add("move_down", "skrald_pos_" + randomPositionSkrald);
}

function stopGame() {
    console.log("Game Over");
    timeSprite.classList.remove("tid");
    timeContainer.removeEventListener("animationend", stopGame);

    skrald.classList = "";
    skrald.firstElementChild.classList = "";
    fisk.classList = "";
    fisk.firstElementChild.classList = "";

    fisk.removeEventListener("animationiteration", fiskReset);
    fisk.removeEventListener("animationend", fiskReset);
    fisk.removeEventListener("mousedown", clickFiskhandler);

    skrald.removeEventListener("animationiteration", skraldReset);
    skrald.removeEventListener("animationend", skraldReset);
    skrald.removeEventListener("mousedown", clickSkraldhandler);
}
//Refactor maybe
const timeEnd = document.querySelector("tid");
timeEnd.addEventListener("animationend", gameEnd);

function gameEnd(){    
    if (liv == 0) {
        stopGame();
        //game lost screen
    } else {
        stopGame();
        //game won score
    }
}