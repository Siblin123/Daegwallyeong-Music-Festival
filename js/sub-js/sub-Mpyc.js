let cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.querySelector(".effect").classList.add("active");
    console.log("Active 추가");
  });
  
  card.addEventListener("mouseleave", () => {
    card.querySelector(".effect").classList.remove("active");
    console.log("Active 해제");
  });
});