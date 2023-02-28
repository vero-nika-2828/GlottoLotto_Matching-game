let cards = document.getElementsByClassName("card");
let clickedCards = [];
let cardAmount = clickedCards.length;
let counter = 0;
let cardOne = (JSON.stringify$(".active")[0]);
let imageArray = []
//On each click, class attribute is added which prompts the clicked card to turn
//Clicked card is added to an array

$(".card").on("click", cardTurns);

function cardTurns(){
    counter++;
    $(this).addClass("active");
    $(this).addClass("turn-card");
    let individualCard= document.getElementsByClassName("active")
    clickedCards.push(counter);  
    console.log(JSON.stringify(clickedCards)); 
    twoCardsSelected();
      
}



function twoCardsSelected(){
    if(counter === 2){
        let turnsIntitial = document.getElementById("turns").innerHTML += 1;
        turnsIntitial++;
        console.log("Two cards selected");
        $(".card").off("click", cardTurns);
        compareCards()         
    }
}

function compareCards(card1, card2) {
    console.log(cardOne)
     
}

function compare(){
    if(cards.getElementsByClassName === "active"){
        //pull the ID text and compare 
        let card1= this.cardId.text
        let card2=
        card1 =card2
    }
}

//When two cards get added to an array other cards cannot be flipped and Turns will increase
//if (parseInt(cardAmount) === parseInt(2)) {
//    alert("works");
//    cards.removeEventListener("click", cardTurns);
//}

//Game countdown

let initialTime = 2;
let timeInSeconds = initialTime * 60;

let countdown = setInterval(timeDecrease, 1000);

function timeDecrease() {
    let mins = Math.floor(timeInSeconds / 60);
    let secs = timeInSeconds % 60 ;
    
    timeInSeconds--;
    document.getElementById("countdown").innerHTML = mins + ":" +secs;

    if(mins & secs < 0){
        console.log("Time out")
        clearInterval(countdown ); 
        document.getElementById("countdown").innerHTML = "Time Out";
    }
}

let gameSong = new Audio();
gameSong.src = "./assets"  

gameSong.addEventListener("click", playMusic);

function playMusic(){

}
