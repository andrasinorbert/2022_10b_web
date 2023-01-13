console.log("Hello World!"); //konzolba kiirás

/* többsoros komment */

var x=2;
console.log("x: " + x);
var y="4";
console.log(y+x);

function kiir(valtozo){
    console.log(valtozo);
}

kiir(5);

function osszead(x,y){
    let osszeg=x+y;
    console.log(osszeg);
}

document.getElementById("eztkeresem").innerHTML="megtaláltam!";

function $(x){
    return document.getElementById(x);
}
$("eztkeresem").innerHTML="megtaláltam!"; //tartalom felülirása

$("eztkeresem").innerHTML+=" valami";


function $_kiir(x){
    let obj=document.getElementById(x);
    kiir(obj);
    return obj;
}