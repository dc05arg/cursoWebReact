var red = document.getElementById("rojo");
var green = document.getElementById("verde");
var blue = document.getElementById("azul");

red.addEventListener("click", function(){
    body.style.backgroundColor = "red";
});
green.addEventListener("click", function(){
    body.style.backgroundColor = "green";
});
blue.addEventListener("click", function(){
    body.style.backgroundColor = "blue";
});