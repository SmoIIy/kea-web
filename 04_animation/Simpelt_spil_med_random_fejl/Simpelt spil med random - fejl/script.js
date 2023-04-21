let myRand;

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  startGame();
}

function startGame() {
  console.log("startGame");

  //Laver et nyt random tal
  myRand = Math.floor(Math.random() * 4) + 1;
  //Giv en position til container
  document.querySelector("#red_container1").classList.add("pos" + myRand);

  //Start flyv-animationer på alle elementer
  document.querySelector("#red_container1").classList.add("flyv");

  //Lyt efter flyv-animationer er færdig
  document.querySelector("#red_container1").addEventListener("animationiteration", genstartRed);

  //Lyt efter klik på alle elementer
  document.querySelector("#red_container1").addEventListener("mousedown", clickRed);
}

function clickRed() {
  console.log("clickRed");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  document.querySelector("#red_container1").removeEventListener("mousedown", clickRed);

  //frys (pause), flyv-animationen
  document.querySelector("#red_container1").classList.add("frys");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  document.querySelector("#red_sprite1").classList.add("forsvind");

  //Lyt efter flyv-animationer er færdig
  document.querySelector("#red_container1").addEventListener("animationend", genstartRed);
}

function genstartRed() {
  console.log("genstartRed");
  //ryd op, fjern alt er på container og sprite
  document.querySelector("#red_container1").classList = "";
  document.querySelector("#red_sprite1").classList = "";

  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#red_container1").offsetLeft;

  //Laver et nyt random tal
  myRand = Math.floor(Math.random() * 4) + 1;

  //Giv en ny random position til container
  document.querySelector("#red_container1").classList.add("pos" + myRand);

  //Start flyv-animationer på element
  document.querySelector("#red_container1").classList.add("flyv");

  //Lyt efter klik på element
  document.querySelector("#red_container1").addEventListener("mousedown", clickRed);
}
