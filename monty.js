
const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');
const door_no1 = document.querySelector('#no_1');
const door_no2 = document.querySelector('#no_2');
const door_no3 = document.querySelector('#no_3');
const sw_btn = document.querySelector('#sw');
const sty_btn = document.querySelector("#fin");
const restart_btn = document.querySelector("#rst");
var winner = (Math.floor(Math.random()*10)%3)+1;
const welcome = document.querySelector('.welcome');
const i1 = document.querySelector('#inst1');
const i2 = document.querySelector('#inst2');
const i3 = document.querySelector('#inst3');

headingA.innerHTML = winner;


buttonA.addEventListener("click", function(){
    document.querySelector(".door_container").style.display = "flex";
    buttonA.style.display = "none";
    welcome.style.display = "none";
    i1.style.display= "flex";
}, {once:true});

door_no1.addEventListener("click", eliminate_d1);
door_no2.addEventListener("click", eliminate_d2);
door_no3.addEventListener("click", eliminate_d3);

sw_btn.addEventListener("click", switch_door, {once:true});
sty_btn.addEventListener("click", reveal);

restart_btn.addEventListener("click", restart);

function restart(){
    window.location.reload();
}

function reveal(winner){
    i2.style.display = "none";
    i3.style.display = "none";
    let res = document.getElementById("results");
    res.style.display = "flex";
    let doors = document.getElementById('doors');
    doors.style.display = 'none';
    sw_btn.style.display = "none";
    sty_btn.style.display = "none";

    if(Number(document.getElementById('heading_A').innerHTML) == Number(document.getElementById("choice").innerHTML)){
        res.innerHTML = "WINNER!!!";
    }
    else{
        res.innerHTML = "Bad Luck, You Lose!";
    }
    document.getElementById('rst').style.display = "flex";
}

function switch_door(){

    // Switch your choice
    let temp = document.getElementById("choice").innerHTML;
    
    document.getElementById("choice").innerHTML = document.getElementById("monty").innerHTML;
    document.getElementById("monty").innerHTML = temp;
    document.getElementById("fin").innerHTML = "Reveal!";
    document.getElementById("sw").style.display = "none";

    if(Number(document.getElementById("monty").innerHTML) == 1){
        document.getElementById("no_1").style.background = '#497aff';
        if(Number(document.getElementById("choice").innerHTML) == 2){
            document.getElementById("no_2").style.background = '#fffbce';}
        else{
            document.getElementById("no_3").style.background = '#fffbce';
        }
    }
    else if(Number(document.getElementById("monty").innerHTML) == 2){
        document.getElementById("no_2").style.background = '#497aff';
        if(Number(document.getElementById("choice").innerHTML) == 1){
            document.getElementById("no_1").style.background = '#fffbce';}
        else{
            document.getElementById("no_3").style.background = '#fffbce';
        }
    }
    else if(Number(document.getElementById("monty").innerHTML) == 3){
        document.getElementById("no_3").style.background = '#497aff';
        if(Number(document.getElementById("choice").innerHTML) == 2){
            document.getElementById("no_2").style.background = '#fffbce';}
        else{
            document.getElementById("no_1").style.background = '#fffbce';
        }
    }
    }


function eliminate_d1(){
    door_no1.style.background = '#fffbce';
    document.getElementById("choice").innerHTML = door_no1.innerHTML
    i1.style.display = "none";
    i2.style.display = "flex";
    i3.style.display = "flex";
    // flip a coin to select a door to eliminate then return that
    if (winner == 1){
        if(Math.floor(Math.random()*10)%2==0){
            door_no2.style.display="none";
            document.getElementById("monty").innerHTML = door_no3.innerHTML
        }
        else{
            door_no3.style.display="none";
            document.getElementById("monty").innerHTML = door_no2.innerHTML
        }
    }
    else if(winner == 2){
        door_no3.style.display="none";
        document.getElementById("monty").innerHTML = door_no2.innerHTML
    }
    else{
        door_no2.style.display="none";
        document.getElementById("monty").innerHTML = door_no3.innerHTML
    }
    sw_btn.style.display = "flex";
    sty_btn.style.display = "flex";

    door_no1.removeEventListener("click", eliminate_d1);
    door_no2.removeEventListener("click", eliminate_d2);
    door_no3.removeEventListener("click", eliminate_d3);
}

function eliminate_d2(){
    door_no2.style.background = '#fffbce';
    i1.style.display = "none";
    i2.style.display = "flex";
    i3.style.display = "flex";
    document.getElementById("choice").innerHTML = door_no2.innerHTML
    // flip a coin to select a door to eliminate then return that
    if (winner == 2){
        if(Math.floor(Math.random()*10)%2==0){
            door_no1.style.display="none";
            document.getElementById("monty").innerHTML = door_no3.innerHTML
        }
        else{
            door_no3.style.display="none";
            document.getElementById("monty").innerHTML = door_no1.innerHTML
        }
    }
    else if(winner == 1){
        door_no3.style.display="none";
        document.getElementById("monty").innerHTML = door_no1.innerHTML
    }
    else{
        door_no1.style.display="none";
        document.getElementById("monty").innerHTML = door_no3.innerHTML
    }

    sw_btn.style.display = "flex";
    sty_btn.style.display = "flex";


    door_no1.removeEventListener("click", eliminate_d1);
    door_no2.removeEventListener("click", eliminate_d2);
    door_no3.removeEventListener("click", eliminate_d3);
}

function eliminate_d3(){
    door_no3.style.background = '#fffbce';
    i1.style.display = "none";
    i2.style.display = "flex";
    i3.style.display = "flex";
    document.getElementById("choice").innerHTML = door_no3.innerHTML
    // flip a coin to select a door to eliminate then return that
    if (winner == 3){
        if(Math.floor(Math.random()*10)%2==0){
            door_no2.style.display="none";
            document.getElementById("monty").innerHTML = door_no1.innerHTML
        }
        else{
            door_no1.style.display="none";
            document.getElementById("monty").innerHTML = door_no2.innerHTML
        }
    }
    else if(winner == 2){
        door_no1.style.display="none";
        document.getElementById("monty").innerHTML = door_no2.innerHTML
    }
    else{
        door_no2.style.display="none";
        document.getElementById("monty").innerHTML = door_no1.innerHTML
    }

    sw_btn.style.display = "flex";
    sty_btn.style.display = "flex";


    door_no1.removeEventListener("click", eliminate_d1);
    door_no2.removeEventListener("click", eliminate_d2);
    door_no3.removeEventListener("click", eliminate_d3);
}


function elim_door(d1, d2){
    // flip a coin to select a door to eliminate then return that
    if (Math.floor(Math.random()*10)%2==0){
        d2.style.display="none";
    }
    else{
        d1.style.display="none";
    }
}
