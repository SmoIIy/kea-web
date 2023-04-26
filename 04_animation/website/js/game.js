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




//Start screen
const start_knap_1 = document.querySelector("#start_knap_1");
const start_knap_2 = document.querySelector("#start_knap_2");
const start_screen = document.querySelector("#start");
//Lost screen
const start_restart_lost = document.querySelector("#start_knap_restart_lost");
const lost_game = document.querySelector("#game_bg_lost");
//Won screen
const start_restart_won = document.querySelector("#start_knap_restart_won");
const won_game = document.querySelector("#game_bg_won");
//Score screen
const score_screen = document.querySelector("#score_screen");
const final_score = document.querySelector("#final_score");
//TO DO
//RNG
function nytRand(max) {
    return Math.floor(Math.random() * max) + 1;
}
//Test Sound
const buzz_sound = document.querySelector("#buzz");
const splash_sound = document.querySelector("#splask");
buzz_sound.volume = 0.4;

function playBuzz(){
    buzz_sound.currentTime = 0.6;
    buzz_sound.play();
}  
function playSplash(){
    splash_sound.play();
}


window.addEventListener("load", setup);

//Functions

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
    lost_game.classList.add("hide");
    won_game.classList.add("hide");
    start_knap_1.addEventListener("click", startGame);
    start_screen.classList = "";
    score_screen.classList.add("hide");
}

function startGame() {
    console.log("Game started");
    //Setup eventlisteners
    //Remove "hide"
    liv = 3;
    point = 0;
    document.querySelector("#liv").textContent = liv;
    document.querySelector("#point").textContent = point;
    for (i in alleFisk){
        alleFisk[i].classList.remove("hide");
        alleFisk[i].addEventListener("mousedown", clickFiskhandler);
        alleFisk[i].addEventListener("animationiteration", fiskReset);
        alleFisk[i].classList.add("move_right", "fisk_pos_" + nytRand(5));
    }
    for (i in alleSkrald){
        alleSkrald[i].classList.remove("hide");
        alleSkrald[i].addEventListener("mousedown", clickSkraldhandler);
        alleSkrald[i].addEventListener("animationiteration", skraldReset);
        alleSkrald[i].classList.add("move_down", "skrald_pos_" + nytRand(10));
    }
    timeSprite.classList.add("tid");
    timeContainer.classList.remove("hide");
    life.classList.remove("hide");
    score.classList.remove("hide");
    start_screen.classList.add("hide");
    lost_game.classList.add("hide");
    won_game.classList.add("hide");
    score_screen.classList.add("hide");
    
}
function gameEnd(){   
    if (point >= 15){
        console.log("Winner - got more than 15 points ( " + point) ;
        stopGameWin();
    } else {
        stopGameLost();
    }
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
    buzz_sound.play();
}

//Skrald handler
function clickSkraldhandler() {
    point++;
    this.classList.add("frys");
    this.firstElementChild.classList.add("remove");
    this.addEventListener("animationend", skraldReset);
    splash_sound.play();
}

function fiskReset() {
    console.log("Fiskposition is " + nytRand(5));
    document.querySelector("#liv").innerHTML = liv;
    this.firstElementChild.classList = "";
    this.classList = "";
    this.offsetLeft;
    this.classList.add("move_right", "fisk_pos_" + nytRand(5));
}

function skraldReset() {
    console.log("Skraldposition is " + nytRand(10));
    document.querySelector("#point").innerHTML = point;
    this.firstElementChild.classList = "";
    this.classList = "";
    this.offsetLeft;
    this.classList.add("move_down", "skrald_pos_" + nytRand(10));
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
    won_game.classList.remove("hide");
    score_screen.classList.remove("hide");

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
    start_restart_won.addEventListener("click", startGame);
        //udskriv score
        final_score.textContent = point; 
    
}
function stopGameLost() {
    console.log("Game Over - Lose");
    //Hide stuff
    timeSprite.classList.remove("tid");
    lost_game.classList.remove("hide");
    timeContainer.removeEventListener("animationend", gameEnd);
    timeContainer.classList.add("hide");
    life.classList.add("hide");
    score.classList.add("hide");
    score_screen.classList.remove("hide");

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
    start_restart_lost.addEventListener("click", startGame);
        //udskriv score
        final_score.textContent = point; 
}



