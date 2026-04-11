let homescore=0
let guestscore=0

document.getElementById("home-score").textContent=homescore
document.getElementById("guest-score").textContent=guestscore

function add1home(){
    homescore+=1
    document.getElementById("home-score").textContent=homescore
}

function add2home(){
    homescore+=2
    document.getElementById("home-score").textContent=homescore
}

function add3home(){
    homescore+=3
    document.getElementById("home-score").textContent=homescore
}

function add1Guest(){
    guestscore+=1
    document.getElementById("guest-score").textContent=guestscore
}

function add2Guest(){
    guestscore+=2
    document.getElementById("guest-score").textContent=guestscore
}

function add3Guest(){
    guestscore+=3
    document.getElementById("guest-score").textContent=guestscore
}

function reset(){
    homescore=0
    guestscore=0
    document.getElementById("home-score").textContent=homescore
    document.getElementById("guest-score").textContent=guestscore
}