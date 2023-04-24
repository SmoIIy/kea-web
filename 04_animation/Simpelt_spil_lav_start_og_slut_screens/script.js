let points;
let liv;
let myRand;
let speed;

const red1 = document.querySelector("#red_container1");
const red2 = document.querySelector("#red_container2");
const blue1 = document.querySelector("#blue_container1");
const blue2 = document.querySelector("#blue_container2");
const startKnap = document.querySelector("#start_knap");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  //Skjul andre skærme
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  //Vis start skærm

  //Klik på start_knap
  startKnap.addEventListener("click", startGame);
}

function startGame() {
  console.log("startGame");
  //Skjul andre skærme
  document.querySelector("#start").classList.add("hide");
  //Nulstil point og udskriv
  points = 0;
  document.querySelector("#score_board").innerHTML = points;

  //reset liv til 3
  liv = 3;
  document.querySelector("#liv").innerHTML = liv;

  //reset speed
  speed = 1;

  //Start timer
  document.querySelector("#time_sprite").classList.add("time");
  document.querySelector("#time_container").addEventListener("animationend", stopSpillet);

  //Giv en random position, random delay til container og speed, start op_ned-animationer
  red1.classList.add("pos" + newRandNum(6), "delay" + newRandNum(4), "speed" + speed, "op_ned");
  //Lyt efter op_ned-animationer er kørt en gang
  red1.addEventListener("animationiteration", genstartRed);
  //Lyt efter klik
  red1.addEventListener("mousedown", clickRed);

  //Giv en random position, random delay til container og speed, start op_ned-animationer
  red2.classList.add("pos" + newRandNum(6), "delay" + newRandNum(4), "speed" + speed, "op_ned");
  //Lyt efter op_ned-animationer er kørt en gang
  red2.addEventListener("animationiteration", genstartRed);
  //Lyt efter klik
  red2.addEventListener("mousedown", clickRed);

  //Giv en random position, random delay til container og speed, start op_ned-animationer
  blue1.classList.add("pos" + newRandNum(6), "delay" + newRandNum(4), "speed" + speed, "op_ned");
  //Lyt efter op_ned-animationer er er kørt en gang
  blue1.addEventListener("animationiteration", genstartBlue);
  //Lyt efter klik
  blue1.addEventListener("mousedown", clickBlue);

  //Giv en random position, random delay til container og speed, start op_ned-animationer
  blue2.classList.add("pos" + newRandNum(6), "delay" + newRandNum(4), "speed" + speed, "op_ned");
  //Lyt efter op_ned-animationer er er kørt en gang
  blue2.addEventListener("animationiteration", genstartBlue);
  //Lyt efter klik
  blue2.addEventListener("mousedown", clickBlue);
}

function clickRed() {
  console.log("clickRed");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickRed);

  //frys (pause), op_ned-animationen
  this.classList.add("frys");

  //Tæl en op på points og udskriv
  points++;
  document.querySelector("#score_board").innerHTML = points;

  if (points >= 6) {
    speed = 3;
  } else if (points >= 3) {
    speed = 2;
  }
  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  this.firstElementChild.classList.add("forsvind");

  //Lyt efter forsvind-animationer er færdig
  this.addEventListener("animationend", genstartRed);
}

function genstartRed() {
  console.log("genstartRed");
  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte op_ned animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //Giv en random position til container, speed og op_ned-animationer på element
  this.classList.add("pos" + newRandNum(6), "speed" + speed, "op_ned");

  //Lyt efter klik på element
  this.addEventListener("mousedown", clickRed);
}

function clickBlue() {
  console.log("clickBlue");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickBlue);

  //frys (pause), op_ned-animationen
  this.classList.add("frys");

  //Tilføj grå til det liv man er nået til, der efter tæl en ned på liv
  liv--;
  document.querySelector("#liv").innerHTML = liv;

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  this.firstElementChild.classList.add("forsvind");

  //Lyt efter forsvind-animationer er færdig
  this.addEventListener("animationend", genstartBlue);

  if (liv <= 0) {
    stopSpillet();
  }
}

function genstartBlue() {
  console.log("genstartBlue");
  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte op_ned animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //Giv en random position til container, speed og op_ned-animationer på element
  this.classList.add("pos" + newRandNum(6), "speed" + speed, "op_ned");

  //Lyt efter klik på element
  this.addEventListener("mousedown", clickBlue);
}

function stopSpillet() {
  console.log("stopSpillet");

  //Stop timer
  document.querySelector("#time_sprite").classList.remove("time");
  document.querySelector("#time_container").removeEventListener("animationend", stopSpillet);

  //fjern alt er på alle elementers container og sprite
  red1.classList = "";
  red1.firstElementChild.classList = "";
  //fjern alle event listener på alle containere
  red1.removeEventListener("animationiteration", genstartRed);
  red1.removeEventListener("animationend", genstartRed);
  red1.removeEventListener("mousedown", clickRed);

  red2.classList = "";
  red2.firstElementChild.classList = "";
  red2.removeEventListener("animationiteration", genstartRed);
  red2.removeEventListener("animationend", genstartRed);
  red2.removeEventListener("mousedown", clickRed);

  blue1.classList = "";
  blue1.firstElementChild.classList = "";
  blue1.removeEventListener("animationiteration", genstartBlue);
  blue1.removeEventListener("animationend", genstartBlue);
  blue1.removeEventListener("mousedown", clickBlue);

  blue2.classList = "";
  blue2.firstElementChild.classList = "";
  blue2.removeEventListener("animationiteration", genstartBlue);
  blue2.removeEventListener("animationend", genstartBlue);
  blue2.removeEventListener("mousedown", clickBlue);

  if (liv <= 0) {
    gameover();
  } else if (points >= 5) {
    levelComplete();
  } else {
    gameover();
  }
}

function gameover() {
  console.log("GAMEOVER loser L");

  //Vis gameover skærm
  document.querySelector("#game_over").classList.remove("hide");
  //Klik på genstart1
}

function levelComplete() {
  console.log("Hurra du vandt");

  //Vis levelComplete skærm
  document.querySelector("#level_complete").classList.remove("hide");
  //Klik på genstart2
}

function newRandNum(max) {
  return Math.floor(Math.random() * max) + 1;
}
