function flipCard() {
  var cardInner = document.querySelector(".card-inner");
  var cardFront = document.querySelector(".card-front");
  var cardBack = document.querySelector(".card-back");
  cardInner.classList.toggle("flip");
}