const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  }
);

cards.forEach((card) => {
  observer.observe(card);
});


const lastCardObserver = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) return;
  loadNewCards();
  lastCardObserver.observe(document.querySelector(".card:last-child"));
});

lastCardObserver.observe(document.querySelector(".card:last-child"));

function loadNewCards() {
  for (let i = 0; i < 100; i++) {
    const card = document.createElement("div");    
    card.classList.add("card");
    observer.observe(card);
    cardContainer.append(card);
  }
} 