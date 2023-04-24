//Fisk variables
const fisk1 = document.querySelector("#fisk_container_1");
const fisk2 = document.querySelector("#fisk_container_2");
const fisk3 = document.querySelector("#fisk_container_3");
const fiskSprite = document.querySelector("#fisk_sprite");
const alleFisk = [fisk1, fisk2, fisk3];

//Skrald variables
const skrald1 = document.querySelector("#skrald_container_1");
const skrald2 = document.querySelector("#skrald_container_2");
const skrald3 = document.querySelector("#skrald_container_3");
const skraldSprite = document.querySelector("#skrald_sprite");
const alleSkrald = [skrald1, skrald2, skrald3];

//Time variables
const timeContainer = document.querySelector("#time_container");
const timeSprite = document.querySelector("#time_sprite");

//                      UI Variables
//Score and life
const score = document.querySelector("#score");
const life = document.querySelector("#life");
let point = 0;
let liv;

const timeEnd = document.querySelector("#time_sprite");
timeEnd.addEventListener("animationend", gameEnd);

function gameEnd(){    
    if (_point => 15){
        stopGameWin();
    } else {
        stopGameLost();
    }
}



//Start screen
const start_knap_1 = document.querySelector("#start_knap_1");
const start_knap_2 = document.querySelector("#start_knap_2");
const start_screen = document.querySelector("#start");
//Lost screen
const start_restart = document.querySelector("#start_knap_restart");
const lost_game = document.querySelector("#game_over_lost");
//Won screen
const won_game = document.querySelector("#game_over_won");
//TO DO
//Refaktor random
let randomPositionFisk = Math.floor(Math.random() * 5) + 1;
let randomPositionSkrald = Math.floor(Math.random() * 10) + 1;


window.addEventListener("load", setup);

function setup() {
    //Hide elements
    console.log("Page Loaded");
    for(i in alleFisk){
        alleFisk[i].classList.add("hide");
    }
    for(i in alleSkrald){
        alleSkrald[i].classList.add("hide");
    }
    timeContainer.classList.add("hide");
    life.classList.add("hide");
    score.classList.add("hide");
    game_over_lost.classList.add("hide");
    game_over_won.classList.add("hide");
    start_knap_1.addEventListener("click", startGame);
    start_screen.classList = "";
}

function startGame() {
    console.log("Game started");
    //Setup eventlisteners
    //Remove "hide"
    liv = 3;
    point = 0;
    for (i in alleFisk){
        let randomPositionFisk = Math.floor(Math.random() * 5) + 1;
        alleFisk[i].classList.remove("hide");
        alleFisk[i].addEventListener("mousedown", clickFiskhandler);
        alleFisk[i].addEventListener("animationiteration", fiskReset);
        alleFisk[i].classList.add("move_right", "fisk_pos_" + randomPositionFisk);
    }
    for (i in alleSkrald){
        let randomPositionSkrald = Math.floor(Math.random() * 10) + 1;
        alleSkrald[i].classList.remove("hide");
        alleSkrald[i].addEventListener("mousedown", clickSkraldhandler);
        alleSkrald[i].addEventListener("animationiteration", skraldReset);
        alleSkrald[i].classList.add("move_down", "skrald_pos_" + randomPositionSkrald);
    }
    timeSprite.classList.add("tid");
    timeContainer.classList.remove("hide");
    life.classList.remove("hide");
    score.classList.remove("hide");
    start_screen.classList.add("hide");
    lost_game.classList.add("hide");
    won_game.classList.add("hide");
    
}

//Fisk handler
function clickFiskhandler() {
    liv--;
    this.classList.add("frys");
    this.firstElementChild.classList.add("remove");
    this.addEventListener("animationend", fiskReset);
    if (liv == 0) {
        stopGameLost();
        //game lost screen
    } 
}

//Skrald handler
function clickSkraldhandler() {
    point++;
    this.classList.add("frys");
    this.firstElementChild.classList.add("remove");
    this.addEventListener("animationend", skraldReset);
}

function fiskReset() {
    randomPositionFisk = Math.floor(Math.random() * 5) + 1;
    console.log("Fiskposition is " + randomPositionFisk);
    document.querySelector("#liv").innerHTML = liv;
    this.firstElementChild.classList = "";
    this.classList = "";
    this.offsetLeft;
    this.classList.add("move_right", "fisk_pos_" + randomPositionFisk);
}

function skraldReset() {
    randomPositionSkrald = Math.floor(Math.random() * 10) + 1;
    console.log("Skraldposition is " + randomPositionSkrald);
    document.querySelector("#point").innerHTML = point;
    this.firstElementChild.classList = "";
    this.classList = "";
    this.offsetLeft;
    this.classList.add("move_down", "skrald_pos_" + randomPositionSkrald);
}

function stopGameWin() {
    console.log("Game Over - Win");
    //Hide stuff
    timeSprite.classList.remove("tid");
    timeContainer.removeEventListener("animationend", gameEnd);
    timeContainer.classList.add("hide");
    life.classList.add("hide");
    score.classList.add("hide");
    //Show game won screen
    game_over_won.classList.remove("hide");

    for(i in alleFisk){
        alleFisk[i].classList = "";
        alleFisk[i].firstElementChild.classList = "";
        alleFisk[i].removeEventListener("animationiteration", fiskReset);
        alleFisk[i].removeEventListener("animationend", fiskReset);
        alleFisk[i].removeEventListener("mousedown", clickFiskhandler);
        alleFisk[i].classList.add("hide");
    }
    for(i in alleSkrald){
        alleSkrald[i].classList = "";
        alleSkrald[i].firstElementChild.classList = "";
        alleSkrald[i].removeEventListener("animationiteration", skraldReset);
        alleSkrald[i].removeEventListener("animationend", skraldReset);
        alleSkrald[i].removeEventListener("mousedown", clickSkraldhandler);
        alleSkrald[i].classList.add("hide");
    }
    start_restart.addEventListener("click", startGame);
}
function stopGameLost() {
    console.log("Game Over - Lose");
    //Hide stuff
    timeSprite.classList.remove("tid");
    game_over_lost.classList.remove("hide");
    timeContainer.removeEventListener("animationend", gameEnd);
    timeContainer.classList.add("hide");
    life.classList.add("hide");
    score.classList.add("hide");

    for(i in alleFisk){
        alleFisk[i].classList = "";
        alleFisk[i].firstElementChild.classList = "";
        alleFisk[i].removeEventListener("animationiteration", fiskReset);
        alleFisk[i].removeEventListener("animationend", fiskReset);
        alleFisk[i].removeEventListener("mousedown", clickFiskhandler);
        alleFisk[i].classList.add("hide");
    }
    for(i in alleSkrald){
        alleSkrald[i].classList = "";
        alleSkrald[i].firstElementChild.classList = "";
        alleSkrald[i].removeEventListener("animationiteration", skraldReset);
        alleSkrald[i].removeEventListener("animationend", skraldReset);
        alleSkrald[i].removeEventListener("mousedown", clickSkraldhandler);
        alleSkrald[i].classList.add("hide");
    }
    start_restart.addEventListener("click", startGame);
}



