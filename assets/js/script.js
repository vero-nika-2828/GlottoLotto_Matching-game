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

//Turn card function - Execute when card is clicked
function cardTurns(){ 
    //execute the below code if the card has not been already clicked thus does not have the active class 
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


//Two Cards Selected function - Execute when counter icnreases to 2
function twoCardsSelected(){
    //execute when the counter increases to two    
    if(counter === 2){
        //Increase turn count by one
        //Disable turn function until cards get compared
        document.getElementById("turns").innerHTML ++;
        $(".card").off("click", cardTurns); 
        setTimeout(compareCards,1000);   
    }
}

//Compare cards function  - execute when two cards are placed in an array
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
             
        //Push matched cards into matched cards array
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


// Shuffle Deck function - execute with each new game 
//Function built using Fisher Yates Shuffle algorithm found in this video https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=342s
function shuffleDeck(){
    //Cards change their position randomly
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
     //Create elements and set values for header, amount of points and buttons in win-result modal
    let turnCount = parseInt($("#turns").html());
    let congratulations = $("<p></p>").text("Well done!");
    let pointsMessage = $("<p></p>").text("You have earned ");
    let points = $("<span></span>").text(" ")
    let nameBox = $("<input></input>").text(" ")
    let addScore = $("<button></button>").text("Save to score board")
    let mainMenu = $("<a href='./index.html'></a>").text("Main Menu");

    
    if(matchedCards.length === 4 && turnCount === 4){
        //Stop the timer
        clearInterval(timeCountdown); 
        
        //Hide card area
        $(".card-area").hide();
        $(".game-scores").hide();
        
        //Display result modal together with win-result text, score and navigation buttons   
        retryThisLevel();
        $("#result").show();
        $("#result").append(congratulations, pointsMessage, nameBox, addScore, tryAgain, mainMenu);
        
        //Add styling and IDs to all the added elements 
        congratulations.addClass("win-text");
        tryAgain.addClass("btn");
        mainMenu.addClass("btn"); 
        nameBox.attr("id","name-value").attr("type","text").attr("placeholder","Add your name here").addClass("btn");
        addScore.attr("id", "submit-score").attr("type", "submit").addClass("btn");
        points.attr("id", "points-display");
         
        //Add points into the text   
        pointsMessage.append(points, " points");
        points.html(newPoints);  
        
        //Push ponts into localStorage
        localStorage.setItem("latestPoints", "100");
        
        //Save points when clicked
        $("#submit-score").on("click",saveScore); 
        
          
    }   else if (matchedCards.length === 4 && turnCount > 4 ){
        //Calculate points if more than 8 turns taken to find all the matches
        let newPoints = 100 - turnCount;
        
        //Stop the timer
        clearInterval(timeCountdown);   
        
        //Hide card area
        $(".card-area").hide();
        $(".game-scores").hide();
       
        //Display result modal together with win-result text, score and navigation buttons    
        retryThisLevel();      
        $("#result").show();
        $("#result").append(congratulations, pointsMessage, nameBox, addScore, tryAgain, mainMenu);
       
        //Add styling and IDs to all the added elements 
        congratulations.addClass("win-text");
        tryAgain.addClass("btn");
        mainMenu.addClass("btn"); 
        nameBox.attr("id","name-value").attr("type","text").attr("placeholder","Add your name here").addClass("btn");
        addScore.attr("id", "submit-score").attr("type", "submit").addClass("btn");
        points.attr("id", "points-display");
       
        //Add points into the text   
        pointsMessage.append(points, " points");
        points.html(newPoints);  
       
        //Save points when clicked      
        localStorage.setItem("latestPoints", newPoints);
        $("#submit-score").on("click",saveScore); 
    }   

}

//Save score in the localStorage
//Built following this video https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=9
function saveScore(e){   
        const mostRecentScore = localStorage.getItem("latestPoints")
        const playerName = $('#name-value').val();
        const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        console.log("it is not an empty string")

        //Give indication to user that the name was saved by updating the button text to saved
        $("#submit-score").html("Saved")
        
        // stop the form opening new page by default
        e.preventDefault();
        
        //Store the player name and score in an object
        const scoreItem = {
        name: playerName,
        score: mostRecentScore
        };  
    
        //push the scoreItem into highScore array
        highScores.push(scoreItem);
    
        //Sort score from the hightest to the smallest
        highScores.sort((a, b) => b.score - a.score);
        
        //Allow only 10 scores to be pushed into the array
        highScores.splice(10);
        
        //Update the localStorage
        localStorage.setItem("highScores", JSON.stringify(highScores));  
        
        //Clear the name from the field once added to local storage
        $('#name-value').val("");
    }   
     


$("#score-board").on("click", function() {
     //Create elements and set values for header, list and return button of 'Score Board'
    const boardHighScores = Array.from(JSON.parse(localStorage.getItem("highScores")));
    const scoreBoardHeader = $("<h2></h2>").text("How well did you do?");
    const scoreBoardList = $("<ol></ol>").text("");
    const boardCloseButton = $("<button></button>").text("Return");
    
    //Display 'Score Board' modal
    $(".btn-output").append(scoreBoardHeader, scoreBoardList, boardCloseButton  );
    $(".btn-primary, #intro-description").hide();
    $(".btn-output").show();
    
    //Crete list of names and scores 
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
    //Create elements and set values for header and navigation buttons'Time's up' modal 
    let youLose = $("<p></p>").text("Time's up!");
    let mainMenu = $("<a href='./index.html'></a>").text("Main Menu");
     
    //Hide card-area
    $(".card-area").hide();

    //Take the user to the same level
    retryThisLevel ();
 
     //Display 'Result' modal
    $("#result").show();
    $("#result").append(youLose, tryAgain, mainMenu);

    //Add styling to 
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

//Play music function - execute when music control is set to false
function playMusic() {
   gameMusic.play();
   music.html("<i class='fa-solid fa-volume-high'></i>");
   music.addClass("playing");
   musicControl = true;
}

//Pause music function - execute when music control is set to true
function pauseMusic () {
    gameMusic.pause();
    music.html("<i class='fa-solid fa-volume-xmark'></i>");
    musicControl = false; 
}


