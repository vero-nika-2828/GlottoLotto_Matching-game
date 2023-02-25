let cards = document.getElementsByClassName("card");
let clickedCards = [];
let cardAmount = clickedCards.length;
let card3 = document.getElementById("card-3");
card3.addEventListener("click", cardTurns);
let counter = 0;

//On each click, class attribute is added which promts the clicked card to turn
//Clicked card is added to an array

$(".card").on("click", cardTurns);

function cardTurns(){
    counter++;
    $(this).addClass("turn-card");
    let individualCard = this.setAttribute("type", "clickedCard");
    clickedCards.push(counter);  
    console.log(JSON.stringify(clickedCards)); 
}

//When two cards get added to an array other cards cannot be flipped and Turns will increase
if (parseInt(cardAmount) === parseInt(2)) {
    alert("works");
    cards.removeEventListener("click", cardTurns);
}

//Game countdown

let initialTime = 10 //parseInt(document.getElementById("timer").lastChild.innerHTML);
let timeInSeconds = initialTime * 60;

setInterval(timeDecrease, 1000);

function timeDecrease() {
    let mins = Math.floor(timeInSeconds / 60);
    let secs = timeInSeconds % 60 ;
    
    timeInSeconds--;
    document.getElementById("countdown").innerHTML = `{mins}: {secs}`;
}

let gameSong = new Audio();
gameSong.src = "./assets"  

gameSong.addEventListener("click", playMusic);

function playMusic(){

}
