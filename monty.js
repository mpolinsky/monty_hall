// Setup: elements and winner selection
const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');
const door_no1 = document.querySelector('#no_1');
const door_no2 = document.querySelector('#no_2');
const door_no3 = document.querySelector('#no_3');
const sw_btn = document.querySelector('#sw');
const sty_btn = document.querySelector("#fin");
const restart_btn = document.querySelector("#rst");
const welcome = document.querySelector('.welcome');
const i1 = document.querySelector('#inst1');
const i2 = document.querySelector('#inst2');
const i3 = document.querySelector('#inst3');
var winner = (Math.floor(Math.random()*10)%3)+1;


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

function reveal(){
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
    let temp = Number(document.getElementById("choice").innerHTML);
    document.getElementById("choice").innerHTML = Number(document.getElementById("monty").innerHTML);
    document.getElementById("monty").innerHTML = temp;

    // Once switch is selected, eliminate switch button 
    // and change "stay" to "reveal"
    sw_btn.style.display = "none";
    sty_btn.innerHTML = "Reveal!";

    if(Number(document.getElementById("monty").innerHTML) == 1){
        door_no1.style.background = '#497aff';
        if(Number(document.getElementById("choice").innerHTML) == 2){
            door_no2.style.background = '#fffbce';}
        else{
            door_no3.style.background = '#fffbce';
        }
    }
    else if(Number(document.getElementById("monty").innerHTML) == 2){
        door_no2.style.background = '#497aff';
        if(Number(document.getElementById("choice").innerHTML)== 1){
            door_no1.style.background = '#fffbce';}
        else{
            door_no3.style.background = '#fffbce';
        }
    }
    else if(Number(document.getElementById("monty").innerHTML) == 3){
        door_no3.style.background = '#497aff';
        if(Number(document.getElementById("choice").innerHTML)== 2){
            door_no2.style.background = '#fffbce';}
        else{
            door_no1.style.background = '#fffbce';
        }
    }
}

function eliminate(door, d2, d3){
    door.style.background = '#fffbce';
    // Store choice in HTML
    document.getElementById("choice").innerHTML = door.innerHTML
    i1.style.display = "none";
    i2.style.display = "flex";
    i3.style.display = "flex";
    // if user choice is the winner choose either of Monty's door to eliminate
    if (winner == Number(door.innerHTML)){
        if(Math.floor(Math.random()*10)%2==0){
            d2.style.display="none";
            document.getElementById("monty").innerHTML = d3.innerHTML
        }
        else{  
            d3.style.display="none";
            document.getElementById("monty").innerHTML = d2.innerHTML
        }
    }
    // if the second option is the winner, eliminate the third
    else if(winner == Number(d2.innerHTML)){
        d3.style.display="none";
        document.getElementById("monty").innerHTML = d2.innerHTML
    }
    // if the third option is the winner, eliminate the second
    else{
        d2.style.display="none";
        document.getElementById("monty").innerHTML = d3.innerHTML
    }
    sw_btn.style.display = "flex";
    sty_btn.style.display = "flex";

    door_no1.removeEventListener("click", eliminate_d1);
    door_no2.removeEventListener("click", eliminate_d2);
    door_no3.removeEventListener("click", eliminate_d3);
};

// Set choice in HTML, eliminate one of Monty's doors 
//   and set Monty's remaining door in HTML
function eliminate_d1(){ eliminate(door_no1, door_no2, door_no3);}

function eliminate_d2(){ eliminate(door_no2, door_no1, door_no3);}

function eliminate_d3(){ eliminate(door_no3, door_no2, door_no1);}


function elim_door(d1, d2){
    // flip a coin to select a door to eliminate then return that
    if (Math.floor(Math.random()*10)%2==0){
        d2.style.display="none";
    }
    else{
        d1.style.display="none";
    }
}
