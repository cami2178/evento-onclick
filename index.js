document.getElementById("btn").addEventListener("click", AgregarDef);

function AgregarDef() {
    document.getElementById("btn").style.display = "none"

}

document.getElementById("inicio").addEventListener("click",inicioSesion)

function inicioSesion() {
    document.querySelector("#inicio").innerText = "cerrar sesion";

}

var number = 45
function darLike(likes){
    number++;
    document.getElementById(likes).innerHTML=number;
}

var number2 = 22
function darLike2(likes){
    number2++;
    document.getElementById(likes).innerHTML=number2
}