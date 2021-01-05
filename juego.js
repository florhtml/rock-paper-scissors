let userScore = 0;
let pcScore = 0;

const userScore_span = document.getElementById('user-score');
const pcScore_span = document.getElementById('pc-score');
const scoreBoard_div = document.querySelector('.score');
const result_div = document.querySelector('.result p');
const rock_div = document.getElementById('r');
const paper_div= document.getElementById('p');
const scissors_div = document.getElementById('s');

function movePC() {
    const choises = ['r', 'p', 's'];
    const random = Math.floor(Math.random() * 3);
    const move = choises[random];
    return(move);
}

function convertLetter (option) {
    if (option == 'r') {
        return "👊🏼 ";
    } 
    else if (option == 'p') {
        return "🖐🏼"; 
    } 
    else {
        return "✌🏼"; 
    } 
}

function win (optionUser, optionPC){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertLetter(optionUser)+" Le gana a "+convertLetter(optionPC)+" ¡Has ganado!";
} 

function loose (optionUser, optionPC){
    pcScore++;
    pcScore_span.innerHTML = pcScore;
    result_div.innerHTML = convertLetter(optionUser)+" No le gana a "+convertLetter(optionPC)+" Has perdido :(";
} 

function tie (optionUser){
    result_div.innerHTML = "Ambos eligieron "+convertLetter(optionUser)+" Es un empate.";
} 

function game (option) {
    const pc = movePC();
    const moveUser = option;

    switch (moveUser+pc) {
        case 'rs':
        case 'pr':
        case 'sp': 
            win(moveUser, pc);
        break;
        case 'rp':
        case 'ps':
        case 'sr': 
            loose(moveUser, pc);
        break;
        case 'rr':
        case 'pp':
        case 'ss': 
            tie(moveUser);
        break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();



/* var papel = 1;
var piedra = 2;
var tijera =  3;

alert("¿Qué elemento deseas elegir?");
let jugador1 = prompt("1: papel, 2: piedra, 3: tijera");
let jugador2 = prompt("1: papel, 2: piedra, 3: tijera");

if (jugador1 == jugador2) {
    alert("Es un empate!");  
} else if (jugador1 == 1 && jugador2 == 2) {
    alert("Ha ganado el jugador 1");      
} else if (jugador1 == 2 && jugador2 == 1) {
    alert("Ha ganado el jugador 1");    
} else if (jugador1 == 1 && jugador2 == 3) {
    alert("Ha ganado el jugador 2");     
} else if (jugador1 == 3 && jugador2 == 1) {
    alert("Ha ganado el jugador 1");     
} else if (jugador1 == 2 && jugador2 == 3) {
    alert("Ha ganado el jugador 1");     
} else if (jugador1 == 3 && jugador2 == 2) {
    alert("Ha ganado el jugador 2");
} else {
    alert("Los números no son correctos");
} */
