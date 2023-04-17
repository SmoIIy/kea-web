let point = 0;

function increase() {
    point++;
    document.getElementById("point").innerHTML = point;
}
function reset() {
    point = 0;
    document.getElementById("point").innerHTML = point;
}