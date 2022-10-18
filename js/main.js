const cards = document.querySelectorAll(".card");
const button = document.querySelector("#btn");
let cardFlipped = false;
let disableFlip = false;
let card1, card2;
//shuffle
(function cardShuffle() {
  cards.forEach((card) => {
    card.style.order = Math.floor(Math.random() * cards.length);
  });
})();

const flipCard = (e) => {
  if (disableFlip || e.target === card1) return;
  e.target.classList.add("flipped");
  if (!cardFlipped) {
    card1 = e.target;
    cardFlipped = true;
    return;
  }
  card2 = e.target;
  checkCards(card1, card2);
};
// cards.forEach((card) => card.addEventListener("click", flipCard));

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

//check card
function checkCards(firstCard, secondCard) {
  if (firstCard.dataset.id === secondCard.dataset.id) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
  } else {
    disableFlip = true;
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetBoard();
    }, 1000);
  }
}
function resetBoard() {
  [cardFlipped, disableFlip] = [false, false];
  [card1, card2] = [null, null];
  if (Array.from(cards).every((child) => child.classList.contains("flipped"))) {
    document.querySelector(".btn-div").style.visibility = "visible";
  }
}

button.addEventListener("click", () => {
  cards.forEach((card) => card.classList.remove("flipped"));
  document.querySelector(".btn-div").style.visibility = "hidden";
});
