function flipCard() {
  var cardInner = document.querySelector(".card-inner");
  var cardFront = document.querySelector(".card-front");
  var cardBack = document.querySelector(".card-back");
  cardInner.classList.toggle("flip");
  // cardBack.classList.toggle("show");
  // cardFront.classList.toggle("hide");
}

function unflipCard() {
  var cardInner = document.querySelector(".card-inner");
  var cardFront = document.querySelector(".card-front");
  var cardBack = document.querySelector(".card-back");
  cardInner.classList.toggle("flip");
  // cardFront.classList.toggle("hide");
  // cardBack.classList.toggle("show");
}
