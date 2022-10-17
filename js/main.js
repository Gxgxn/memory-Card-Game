let cards = document.querySelectorAll(".card");

(function cardShuffle() {
  cards.forEach((card) => {
    card.style.order = Math.floor(Math.random() * cards.length);
  });
})();
