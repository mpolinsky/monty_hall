



function start(){

    const buttonA = document.querySelector('#button_A');
    const headingA = document.querySelector('#heading_A');
    const door_no1 = document.querySelector('#no_1');
    const door_no2 = document.querySelector('#no_2');
    const door_no3 = document.querySelector('#no_3');
    const sw_btn = document.querySelector('#sw');
    const sty_btn = document.querySelector("#fin");
    const restart_btn = document.querySelector("#rst")
    var winner = (Math.floor(Math.random()*10)%3)+1;



    headingA.innerHTML = winner;
    buttonA.addEventListener("click", start, {once:true});

    door_no1.addEventListener("click", eliminate_d1);
    door_no2.addEventListener("click", eliminate_d2);
    door_no3.addEventListener("click", eliminate_d3);

    sw_btn.addEventListener("click", switch_door, {once:true});
    sty_btn.addEventListener("click", reveal);

    restart_btn.addEventListener("click", restart);

    document.querySelector(".door_container").style.display = "flex";
    buttonA.style.display = "none";
}

function restart(){
    window.location.reload();
}

function reveal(winner){
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
        res.innerHTML = "LOSER!";
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
}

function eliminate_d1(){
    document.getElementById("choice").innerHTML = door_no1.innerHTML
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
