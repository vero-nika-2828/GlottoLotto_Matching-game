let cards = document.getElementsByClassName("card");
let cardBack = document.getElementsByClassName("card-back")

for (let card of cards){
    card.addEventListener("click", function(){
        card.classList.add("changecard");
        if(this.getAttribute("class") === "card-front"){
            cardBack.classList.add(visibility);
        }    
    })
};