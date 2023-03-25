//Variables
let cards = document.getElementsByClassName("card");
let clickedCards = [];
let cardAmount = clickedCards.length;
let counter = 0;
let cardOne = $(".active")[0];
let cardContainer = [];
let matchedCards = [];
let cardDeck = Array.from(cards);
let tryAgain; 
let timeCountdown;


let audioAPI;

let gameMusic = new Audio("./assets/audio/background-music.mp3");
let correctAnswerSound = new Audio("./assets/audio/correct-answer.mp3");
let musicControl = false;

//Game web page initiation
document.addEventListener("DOMContentLoaded", function(){
    shuffleDeck();
    $(".btn-output").hide();
    $("#result").hide();
    //cardTurns();
})




//Display instructions for the game
$("#btn-instructions").on("click", function() {
    //Create elements and set values for header, description and button in 'How to play' modal
    let clearPreviousText = $(".btn-output").text("");
    let instructionsHeader = $("<h2></h2>").text("How to Play");
    let instructions = $("<p></p>").text("Flip the cards and match words to pictures. Here are the instructions on how to play:");
    let closeButton = $("<button></button>").text("Return");
 
    //Map method to create list of step by step instructions
    let list= $("<ol></ol>").text("");
    let steps = ["Press play", "Click on a card", "Card turns around and a picture or a word will be shown","Click on another card", "If the two cards match, you will receive the points ", "If the two cards don’t match, they will turn around and you can try again", "You can continue to flip over cards until you have matched all the pairs", "To win, you must match all the pairs before the time runs out", "Enjoy playing the game and improving your language skills"];

    listItems = $.map(steps, step => $("<li></li>").text(step));   
    list.append(listItems);
  
    //Display 'How to play' modal       
    $(".btn-output").show();
    $(".btn-output").append(clearPreviousText, instructionsHeader, instructions,list, closeButton);
    $(".btn-primary, #intro-description").hide();
   

    //Apply styling to the return button and the "How to play modal"
    closeButton.addClass("btn").addClass("return");
    $(".btn-output").addClass("d-grid").addClass("gap-2");

    
    //Enable return to the main menu with return button
    $(".return").on("click", function() {
        $(".btn-output").text("");
        $(".btn-output").hide();
        $(".btn-primary, #intro-description").show();
        $(".btn-output").removeClass("d-grid").removeClass("gap-2");           
    })
})


//Display A1 and B1 level options
$("#btn-play").on("click", function() {
    //Create elements and set values for option and return buttons in 'Play' modal 
    let levelA1 = $("<a href='./level-A1.html'></a>").text("A1-A2");
    let levelB1 = $("<a href='./level-B1.html'></a>").text("B1-B2");
    let levelCloseButton = $("<button'></button>").text("Return");
   
    //Display 'Play' modal
    $(".btn-output").append(levelA1, levelB1, levelCloseButton);
    $(".btn-output").show();
    $(".btn-primary, #intro-description").hide();

    //Apply styling to the return button and the 'Play' modal
    levelA1.addClass("btn").addClass("level-A1");
    levelB1.addClass("btn").addClass("level-B1");
    levelCloseButton.addClass("btn").addClass("return");
    $(".btn-output").addClass("d-grid").addClass("gap-2").addClass("overflow-control");

     //Enable return to the main menu with return button
    $(".return").on("click", function() {
        $(".btn-output").text("");
        $(".btn-output").hide();
        $(".btn-primary, #intro-description").show();
        $(".btn-output").removeClass("d-grid").removeClass("gap-2");
        
    })
   
  })


//On each click, turn selceted card and say the name of the animal for the corresponding card  
$(".card").on("click", cardTurns);


function cardTurns(){ 
    //Excecute the below code if the card has not been already clicked thus does not have the active class 
    if(!$(this).hasClass("active")){
        //Increase counter by one, turn the card and push the name of the animal into an array
        counter++;
        $(this).addClass("active");
        $(this).addClass("turn-card");
        let individualCard = $(this)[0].dataset.animal;
        cardContainer.push(individualCard);
        twoCardsSelected();   


        let cardText = $(this)[0].textContent;
        console.log(cardText);
        

        //Say the name of the animal on the card by calling API dictionaries
        let animalName = $(this)[0].dataset.animal;        
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${animalName}`)
            .then(response => response.json())
            .then(data => {
  
            audioAPI = new Audio (data[0].phonetics[0].audio);
             audioAPI.play();
        })
        .catch(error => console.log(error));
    
    //Disable the option to click the card when it has been already clicked    
    }else{
        console.log("it is alraedy active");
        $(".active").off("click");
      
}}



function twoCardsSelected(){
    if(counter === 2){
        document.getElementById("turns").innerHTML ++;
        console.log("Two cards selected");
        $(".card").off("click", cardTurns); 
        setTimeout(compareCards,1000);   
    }
}

function compareCards() {
    let card1 = cardContainer[0];
    let card2 = cardContainer[1];
    counter = 0;
    cardContainer =[];

    if(card1 === card2){
        console.log("you have a match");   
        $(".active").addClass("matched");
        $(".matched").children().fadeOut();
             
    
        let currentMatch = $(".matched");
        matchedCards.push(currentMatch);
        $(".card").on("click", cardTurns);
        correctAnswerSound.play();
        youWin();
        
    } else {
        console.log("Try again");
        $(".active").removeClass("active turn-card");
        $(".card").on("click", cardTurns);
    }};

//With each new game the deck of cards changes the position randomly
function shuffleDeck(){
    for(card = 0; card  < cardDeck.length; card ++) {
        let cardToSwap = Math.floor(Math.random()  * (card  + 1));
        cardDeck[cardToSwap].style.order = card ;
        cardDeck[card].style.order = cardToSwap;
    }
    const countdownElement = document.getElementById("countdown");
    if (countdownElement !== null){
       timeCountdown = setInterval(timeDecrease, 1000);
    }
    
}


//Game countdown

let initialTime = 2;
let timeInSeconds = initialTime * 60;


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
        clearInterval(timeCountdown); 
        document.getElementById("countdown").innerHTML = "Time Out";

    }

    if(mins & secs < 0 && matchedCards.length !== 8){
        console.log("You lose");
        gameOver();

    }
}

function youWin(){
    let turnCount = parseInt($("#turns").html());
    let congratulations = $("<p></p>").text("Well done!");
    let pointsMessage = $("<p></p>").text("You have earned ");
    let points = $("<span></span>").text(" ")
    let nameLabel = $("<label></label>").text("Enter you name here");
    let nameBox = $("<input></input>").text(" ")
    let addScore = $("<input></input>").text("Add the score")
    let mainMenu = $("<a href='./index.html'></a>").text("Main Menu");
    clearInterval(timeCountdown); 
    
    if(matchedCards.length === 4 && turnCount === 4){
        $(".card-area").hide();
        retryThisLevel();
        
        $("#result").show();
        $("#result").append(congratulations, pointsMessage, nameBox, addScore, tryAgain, mainMenu);
       
        pointsMessage.append(points);
        pointsMessage.append(" points");
        congratulations.addClass("win-text");
        tryAgain.addClass("btn");
        mainMenu.addClass("btn"); 
        addScore.attr("type", "submit");
        nameBox.prepend(nameLabel);
        points.addClass("pointsDisplay");
        addScore.addClass("submit");
       
        points.html("100");
        localStorage.setItem("Points", "100");
        console.log("100 points");
        
        addScore.addEventListener.on("click", function(){
            localStorage.setItem("Will add name later", "push works");
        })
       
    }   else if (matchedCards.length === 4 && turnCount > 4 ){
        let newPoints = 100 - turnCount;
        $(".card-area").hide();
        retryThisLevel();
        
        $("#result").show();
        $("#result").append(congratulations, pointsMessage, nameBox, addScore, tryAgain, mainMenu);
       
        pointsMessage.append(points);
        pointsMessage.append(" points");
        congratulations.addClass("win-text");
        tryAgain.addClass("btn");
        mainMenu.addClass("btn"); 
        nameBox.attr("id","name-value")
        addScore.attr("id", "submit-score").attr("type", "submit").attr("value","Add the score");
        points.attr("id", "points-display");

        points.html(newPoints);
        localStorage.setItem("Points2", newPoints);
        console.log(newPoints);
    
    }   

    $("#submit-score").on("click",function(){
        let playerName = $('#name-value');
        let currentScore = $("#points-display");
        //localStorage.setItem(name, newPoints);
        console.log("submit button clicked");   
        console.log(playerName);      

        
        const scores = JSON.parse(localStorage.getItem("scores")) || [] ;
        console.log(scores);

        saveHighScore = e => {
            console.log("clicked the save button")
            e.preventDevault();

        const score = {
            score: currentScore.html(),
            scoreboardName: playerName.val()
        };

        scores.push(score);
        console.log(scores);
        localStorage.setItem("scores", JSON.stringify(score));
        };
    })    

}




function gameOver(){
    $(".card-area").hide();
    let youLose = $("<p></p>").text("Time's up!");
    let mainMenu = $("<a href='./index.html'></a>").text("Main Menu");

    retryThisLevel ();
 
    $("#result").show();
    $("#result").append(youLose, tryAgain, mainMenu);
    youLose.addClass("result-text");
    tryAgain.addClass("btn");
    mainMenu.addClass("btn");
}

function retryThisLevel (){
    if($("title").html()  === "GLottoLotto Game: A1-A2 Level" ) {
        console.log("A1");
        tryAgain = $("<a href='./level-A1.html'></a>").text("Try again!");
    }else{
        console.log("B1")
        tryAgain = $("<a href='./level-B1.html'></a>").text("Try again!");
    }
};



let music = $("#game-music")


music.on("click", function(){
    musicControl ?  pauseMusic() :  playMusic();
})


function playMusic() {
  
   gameMusic.play();
   console.log("playMusic works")
   music.html("<i class='fa-solid fa-volume-high'></i>");
   music.addClass("playing");
   musicControl = true;
}


function pauseMusic () {
    gameMusic.pause();
    console.log("pauseMusic works");
    music.html("<i class='fa-solid fa-volume-xmark'></i>");
    musicControl = false;
   
}


