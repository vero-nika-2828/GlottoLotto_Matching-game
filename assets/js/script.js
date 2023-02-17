let cards = document.getElementsByClassName("card");
const clickedCards = []

//On a click, a card turns around and is marked as turned

for (let card of cards){
    card.addEventListener("click", function(){
        card.classList.add("turn-card");
        let individualCard = this.setAttribute("type", "clickedCard");
        clickedCards.push(individualCard);
        
    })
};

//If no card was previously clicked and mark clicked otherwise compare clicked card to the currently clicked card 
//data type could be clicked 
//maybe need to add clickedCards.lenght

if (clickedCards.length === 2){
    
    if (clickedCards[0] === clickedCards[1]){
        matchFound();
    }
} else{
    noMatch()
};

matchFound(alert("YOu have got a match"))

//When we have two cards in an array - get (1)the alt from the child of a child of card  (card - card-front - img - alt)
//or maybe get this. get element alt 
//get (2) the text of the child of a child of card ( card -front -card - p)
// (1) === (2)