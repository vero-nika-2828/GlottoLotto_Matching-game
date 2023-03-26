//Variables
let cards = document.getElementsByClassName("card");
let counter = 0;
let cardContainer = [];
let matchedCards = [];
let cardDeck = Array.from(cards);
let tryAgain; 
let initialTime = 2;
let timeInSeconds = initialTime * 60;
let timeCountdown;
let audioAPI;
let gameMusic = new Audio("./assets/audio/background-music.mp3");
const music = $("#game-music")
let musicControl = false;

//Game web page initiation
document.addEventListener("DOMContentLoaded", function(){
    shuffleDeck();
    $(".btn-output").hide();
    $("#result").hide();
   
})



//Display instructions for the game
$("#btn-instructions").on("click", function() {
    //Create elements and set values for header, description and button in 'How to play' modal
    const clearPreviousText = $(".btn-output").text("");
    const instructionsHeader = $("<h2></h2>").text("How to Play");
    const instructions = $("<p></p>").text("Flip the cards and match words to pictures. Here are the instructions on how to play:");
    const closeButton = $("<button></button>").text("Return");
 
    //Map method to create list of step by step instructions
    const list= $("<ol></ol>").text("");
    const steps = ["Press play", "Click on a card", "Card turns around and a picture or a word will be shown","Click on another card", "If the two cards match, you will receive the points ", "If the two cards don’t match, they will turn around and you can try again", "You can continue to flip over cards until you have matched all the pairs", "To win, you must match all the pairs before the time runs out", "Enjoy playing the game and improving your language skills"];

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
    const levelA1 = $("<a href='./level-A1.html'></a>").text("A1-A2");
    const levelB1 = $("<a href='./level-B1.html'></a>").text("B1-B2");
    const levelCloseButton = $("<button'></button>").text("Return");
   
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
        const animalName = $(this)[0].dataset.animal; 
        const apiLink = "https://api.dictionaryapi.dev/api/v2/entries/en/"
     
        //Increase counter by one, turn the card and push the name of the animal into an array
        counter++;

        //Turn card clicked on by the user 
        $(this).addClass("active");
        $(this).addClass("turn-card");

        //Push card type name into an array for comparison
        cardContainer.push(animalName);
        twoCardsSelected();   

        //Say the name of the animal on the card by calling API dictionaries
        fetch(`${apiLink}${animalName}`)        
            .then(response => response.json())
            .then(data => {
  
            audioAPI = new Audio (data[0].phonetics[0].audio);
            audioAPI.play();
        })
       
    //Disable the option to click the card when it has been already clicked    
    }else{
        $(".active").off("click");   
    }
}



function twoCardsSelected(){
    //Excecute when the counter increases to two    
    if(counter === 2){
        //Increase turn count by one
        //Disable turn function until cards get compared
        document.getElementById("turns").innerHTML ++;
        $(".card").off("click", cardTurns); 
        setTimeout(compareCards,1000);   
    }
}

function compareCards() {
    let card1 = cardContainer[0];
    let card2 = cardContainer[1];
    let correctAnswerSound = new Audio("./assets/audio/correct-answer.mp3");

    //Clear counter and the cardContainer for new pair 
    counter = 0;
    cardContainer =[];

    if(card1 === card2){
        //Add an effect so the cards fade out when match is found
        $(".active").addClass("matched");
        $(".matched").children().fadeOut();
             
        
        const currentMatch = $(".matched");
        matchedCards.push(currentMatch);

        //Enable turning of the cards again with cardTurns function 
        $(".card").on("click", cardTurns);

        //Play sound when a match is found
        correctAnswerSound.play();
        
        youWin();
        
    } else {
        //Turn cards back when no match is found 
        $(".active").removeClass("active turn-card");
        $(".card").on("click", cardTurns);
    }};

//With each new game the deck of cards changes the position randomly
//Function built using Fisher Yates Shuffle algorithm found in this video https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=342s
function shuffleDeck(){
    for(card = 0; card  < cardDeck.length; card ++) {
        let cardToSwap = Math.floor(Math.random()  * (card  + 1));
        cardDeck[cardToSwap].style.order = card ;
        cardDeck[card].style.order = cardToSwap;
    }

    //Start game countdown
    const countdownElement = document.getElementById("countdown");
    if (countdownElement !== null){
       timeCountdown = setInterval(timeDecrease, 1000);
    }
    
}


//Game countdown
function timeDecrease() {
    let mins = Math.floor(timeInSeconds / 60);
    let secs = timeInSeconds % 60 ;
    
    //Decrease the initial time each second
    timeInSeconds--;
   
    //Update timer values each time the time decraeses by one second
    //Add 0 before value of seconds to make it tow digit value 
    //Call gameOver function when not all cards matched before time gets to 0   
    if(secs < 10){
        document.getElementById("countdown").innerHTML = mins + ":" + "0" + secs;
    } else {
        document.getElementById("countdown").innerHTML = mins + ":" +secs;
    }

    if(mins & secs < 0){
        clearInterval(timeCountdown); 
        document.getElementById("countdown").innerHTML = "Time Out";
    }

    if(mins & secs < 0 && matchedCards.length !== 8){
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
    let addScore = $("<button></button>").text("Add the score")
    let mainMenu = $("<a href='./index.html'></a>").text("Main Menu");
    
    
    if(matchedCards.length === 4 && turnCount === 4){
        clearInterval(timeCountdown); 
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
        
          
    }   else if (matchedCards.length === 4 && turnCount > 4 ){
        clearInterval(timeCountdown); 
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
        addScore.attr("id", "submit-score").attr("type", "submit");
        points.attr("id", "points-display");

        points.html(newPoints);
        localStorage.setItem("Points2", newPoints);
        console.log(newPoints);
        $("#submit-score").on("click",saveScore); 
    }   

}


function saveScore(e){
    const mostRecentScore = localStorage.getItem("Points2")
    const playerName = $('#name-value').val();
    
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    e.preventDefault();
      const scoreItem = {
      name: playerName,
      score: mostRecentScore
    };

    highScores.push(scoreItem);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);
     
    console.log(playerName);
    console.log(mostRecentScore);
    console.log(highScores);
    console.log(scoreItem);
     
    localStorage.setItem("highScores", JSON.stringify(highScores));
     
    
}  


$("#score-board").on("click", function() {
    const boardHighScores = Array.from(JSON.parse(localStorage.getItem("highScores")));
    const scoreBoardHeader = $("<h2></h2>").text("How well did you do?");
    const scoreBoardList = $("<ol></ol>").text("");
    const boardCloseButton = $("<button></button>").text("Return");
    

    $(".btn-output").append(scoreBoardHeader, scoreBoardList, boardCloseButton  );
    $(".btn-primary, #intro-description").hide();
    $(".btn-output").show();

    scoreBoardItem = $.map(boardHighScores, score => $("<li></li>").text(`${score.name} - ${score.score}`));
    scoreBoardList.append(scoreBoardItem);
    
    //Apply styling to the return button, the "Score Board modal" and Score board list 
    boardCloseButton.addClass("btn").addClass("return");
    $(".btn-output").addClass("d-grid").addClass("gap-2");
    scoreBoardList.attr("id", "score-list"); 
  
    
    //Enable return to the main menu with return button
    $(".return").on("click", function() {
        $(".btn-output").text("");
        $(".btn-output").hide();
        $(".btn-primary, #intro-description").show();
        $(".btn-output").removeClass("d-grid").removeClass("gap-2");           
    })
})

function gameOver(){
    //Show the modal informing the user that the time has run out
    $(".card-area").hide();
    let youLose = $("<p></p>").text("Time's up!");
    let mainMenu = $("<a href='./index.html'></a>").text("Main Menu");
     
    //Take the user to the same level
    retryThisLevel ();
 
    $("#result").show();
    $("#result").append(youLose, tryAgain, mainMenu);
    youLose.addClass("result-text");
    tryAgain.addClass("btn");
    mainMenu.addClass("btn");
}

function retryThisLevel (){
    //Take the user to the same level when 'Play again' button is clicked
    if($("title").html()  === "GLottoLotto Game: A1-A2 Level" ) {
        tryAgain = $("<a href='./level-A1.html'></a>").text("Try again!");
    }else{
        tryAgain = $("<a href='./level-B1.html'></a>").text("Try again!");
    }
};


//Turn music on/off when the speaker icon is clicked
music.on("click", function(){
    musicControl ?  pauseMusic() :  playMusic();
})


function playMusic() {
   gameMusic.play();
   music.html("<i class='fa-solid fa-volume-high'></i>");
   music.addClass("playing");
   musicControl = true;
}


function pauseMusic () {
    gameMusic.pause();
    music.html("<i class='fa-solid fa-volume-xmark'></i>");
    musicControl = false; 
}


