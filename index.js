const input = document.querySelector("#promocode");

function filterPromoCodes() {
  const filter = input.value.toUpperCase();
  const cards = document.querySelectorAll(".card");

  for (let i = 0; i < cards.length; i++) {
    card = cards[i];
    const promocode = card.querySelector(".card__promocode");
    cardText = promocode.textContent;

    if (cardText.toUpperCase().indexOf(filter) > -1) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  input.addEventListener('input', filterPromoCodes);
  filterPromoCodes();
});
