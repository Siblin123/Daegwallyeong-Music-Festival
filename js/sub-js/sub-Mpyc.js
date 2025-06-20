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


let subMainImg = document.querySelector(".subMainImg");
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  console.log(`스크롤 위치: ${scrollY}px`);
  
  if (scrollY > 200) {
    console.log('250px 이상 내려왔습니다!');
    subMainImg.classList.add("active")
  }
});

