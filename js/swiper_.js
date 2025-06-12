var swiper = new Swiper(".poster-Swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  grabCursor: true, // 👈 커서가 "grab"으로 변하고 드래그 감이 좋아짐
});
