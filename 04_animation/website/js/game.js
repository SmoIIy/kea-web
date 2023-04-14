let gameState = false;

const fisk = document.querySelector("#fisk_container");
const skrald = document.querySelector("#skrald_container");

function testSpil(){
    gameState = true;
    console.log("Game active");
    fisk.classList.add("move_right");
    skrald.classList.add("move_down");
    fisk.addEventListener("click", remove(fisk));
}

function slukSpil() {
    gameState = false;
    console.log("Game not active");
    fisk.classList.remove("move_right");
    skrald.classList.remove("move_down");
}

function remove(_asset) {
    let element = document.querySelector(_asset);
    element.classList.add("remove");
    console.log("remove test");
}

/* WIP 

if (gameState) {
    //game active logic
    fisk.classList.add("move_right");
    fisk.addEventListener("click", remove(fisk));
    skrald.addEventListener("click", remove(skrald));
    skrald.classList.add("move_right");

} else if (!gameState) {
    //game not active logic
    fisk.classList.remove("move_right");
}

*/
