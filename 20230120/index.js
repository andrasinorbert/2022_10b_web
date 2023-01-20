function alert_input(){
    let str=$("input").value;
    myalert(str);
}

function alert_input(id){
    let str=$(id).value;
    myalert(str+"!");
}

function alert_input(id, b=true){
    let str=$(id).value;
    if(b){
        myalert(str+"!");
    }else{
        myalert();
    }
}

function addClassToP(id,p_class){
    $(id).classList.add(p_class);
}
function removeClassFromP(id,p_class){
    $(id).classList.remove(p_class);
}

function addhtml(id){
    let tartalom="<p class='kekszoveg'>Ez az uj szöveg</p>";
    $(id).innerHTML=tartalom;
}