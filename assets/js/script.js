let cards = document.getElementsByClassName("card");
let clickedCards = [];
let cardAmount = clickedCards.length;
let counter = 0;
let cardOne = $(".active")[0];
let cardArray = [];
let matchedCards = [];
let cardDeck = Array.from(cards);



let gameMusic = new Audio("./assets/audio/Magic Escape Room.mp3");
let flipSound = new Audio("./assets/audio/mixkit-cartoon-toy-whistle-616.wav")


document.addEventListener("DOMContentLoaded", function(){
    shuffleDeck();
    $(".btn-output").hide();
    $("#you-lose").hide();
})



$(function(){

    $.ajax({
        type: "GET",
        url:"https://api.dictionaryapi.dev/api/v2/entries/en/hello",
        success: function(data) {
            console.log("success", data);

   }   });
})



//On each click, class attribute is added which prompts the clicked card to turn
//Clicked card is added to an array



$("#btn-instructions").on("click", function() {
    let instructionsHeader = $("<h1></h1>").text("How to Play");
    let instructions = $("<p></p>").text("Lorem ipsum dolor sit amet. Nam omnis consequatur vel harum dolor et sunt dolorem ex internos fugiat ea ipsam sequi. Quo odit explicabo aut magni commodi ut enim totam et temporibus nihil vel cupiditate reprehenderit. Et dolor minima et numquam atque in repellendus harum.");
    let closeButton = $("<button></button>").text("Return");
    let clearPreviousText = $(".btn-output").text("");
    closeButton.addClass("btn").addClass("return");
    
    $(".btn-output").show();
    $(".btn-output").append(clearPreviousText, instructionsHeader, instructions, closeButton);
    $(".btn-primary").hide();
    $(".btn-output").addClass("d-grid").addClass("gap-2");

    $(".return").on("click", function() {
        $(".btn-output").text("");
        $(".btn-output").hide();
        $(".btn-primary").show();
             
    })

})


$("#btn-play").on("click", function() {
    let levelA1 = $("<a href='./level-A1.html'></a>").text("A1");
    let levelB1 = $("<a></a>").text("B2");
    let levelCloseButton = $("<button'></button>").text("Return");
  
    $(".btn-output").append(levelA1, levelB1, levelCloseButton);
    $(".btn-output").show();
    $(".btn-primary").hide();

    levelA1.addClass("btn").addClass("level-A1");
    levelB1.addClass("btn");
    levelCloseButton.addClass("btn").addClass("return");
    $(".btn-output").addClass("d-grid").addClass("gap-2");

    $(".return").on("click", function() {
        $(".btn-output").text("");
        $(".btn-output").hide();
        $(".btn-primary").show();
        
    })
   
  })




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
        flipSound.play();
      
           
    
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

    $("#flicky-flick").on("click", shuffleDeck);


function shuffleDeck(){
    for(card = 0; card  < cardDeck.length; card ++) {
        let cardToSwap = Math.floor(Math.random()  * (card  + 1));
        cardDeck[cardToSwap].style.order = card ;
        cardDeck[card].style.order = cardToSwap;
    }
}



//Game countdown

let initialTime = 0.1;
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

    if(mins & secs < 0 && matchedCards.length !== 6){
        console.log("You lose");
        $(".card-area").hide();
        let youLose = $("<p></p>").text("Time's up!");
        let tryAgain = $("<a href='./index.html'></a>").text("Try again!");

        $("#you-lose").show();
        $("#you-lose").append(youLose, tryAgain);
        youLose.addClass("loser-text");
        tryAgain.addClass("btn");
    
    }
}




let music = $("#game-music")

music.on("click", playMusic)


function playMusic() {
   gameMusic.play();
   music.html("<i class='fa-solid fa-volume-high'></i>");
}

function pauseMusic(){}

music.on("click", pauseMusic)

function pauseMusic() {
    gameMusic.prop("paused");
    console.log("switchOFF");
    music.html("<i class='fa-solid fa-volume-xmark'></i>");
    
 }