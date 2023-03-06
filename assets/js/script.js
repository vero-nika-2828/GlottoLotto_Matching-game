let cards = document.getElementsByClassName("card");
let clickedCards = [];
let cardAmount = clickedCards.length;
let counter = 0;
let cardOne = $(".active")[0];
let cardArray = [];
let matchedCards = [];

let gameMusic = new Audio("./assets/audio/Magic Escape Room.mp3")

//On each click, class attribute is added which prompts the clicked card to turn
//Clicked card is added to an array

$(".card").on("click", cardTurns);

function cardTurns(){  
    if(!$(this).hasClass("active")){
        counter++;
        $(this).addClass("active");
        $(this).addClass("turn-card");
        //let cardText = $(this)[0].textContent;
        let individualCard = $(this)[0].dataset.fruit;
        cardArray.push(individualCard);
        twoCardsSelected();   
        let cardText = $(this)[0].textContent;
        console.log(cardText);
      
           
    
    }else{
        console.log("it is alraedy active");
        $(".active").off("click");
      
}}

   
 
//On each click, class attribute is added which prompts the clicked card to turn
//Clicked card is added to an array


function twoCardsSelected(){
    if(counter === 2){
        document.getElementById("turns").innerHTML ++;
        console.log("Two cards selected");
        $(".card").off("click", cardTurns); //instead of taking this off could I maybe delay the funtion of clicking again and put it after compare function
        setTimeout(compareCards,1000);
       
    }
}

function compareCards() {
    let card1 = cardArray[0];
    let card2 = cardArray[1];
    counter = 0;
    cardArray =[];

    if(card1 === card2){
        console.log("you have a match");   
        $(".active").addClass("matched");
        $(".matched").children().fadeOut();
             
    
        let currentMatch = $(".matched");
        matchedCards.push(currentMatch);
        $(".card").on("click", cardTurns);




    } else {
        console.log("Try again");
        $(".active").removeClass("active turn-card");
        $(".card").on("click", cardTurns);
    }};

//Game countdown

let initialTime = 2;
let timeInSeconds = initialTime * 60;

let countdown = setInterval(timeDecrease, 1000);

function timeDecrease() {
    let mins = Math.floor(timeInSeconds / 60);
    let secs = timeInSeconds % 60 ;
    
    timeInSeconds--;
   

    if(secs < 10){
        document.getElementById("countdown").innerHTML = mins + ":" + "0" + secs;
    } else {
        document.getElementById("countdown").innerHTML = mins + ":" +secs;
    }


    if(mins & secs < 0){
        console.log("Time out")
        clearInterval(countdown ); 
        document.getElementById("countdown").innerHTML = "Time Out";
    }
}


let music = $("#game-music")

music.on("click", playMusic)


function playMusic() {
   gameMusic.play();
   music.html("<i class='fa-solid fa-volume-high'></i>");
}

