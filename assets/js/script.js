let cards = document.getElementsByClassName("card");


for (let card of cards){
    card.addEventListener("click", function(){
        card.classList.add("turn-card");

    })
};