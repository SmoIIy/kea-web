const red = document.querySelector("#red_container");

window.addEventListener("load", start);
red.addEventListener("click", stop);

function start(){
    red.classList.add("flyv");

}

function stop() {
    //red.classList.add("frys");
    red.classList.add("drej");
}


