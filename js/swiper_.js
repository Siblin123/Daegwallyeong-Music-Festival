//==================헤더 메뉴========================================
let headerNav = document.querySelectorAll('.menu > li');
console.log(headerNav);
headerNav.forEach((item) => {
  item.addEventListener('mouseover', () => {
    let subHeader = item.querySelector('ul');
    console.log(subHeader + "바우스 오버");
    subHeader.style.maxHeight = '290px'; // 서브해더 보이기
  });

  item.addEventListener('mouseout', () => {
    let subHeader = item.querySelector('ul');
    console.log(subHeader + "바우스 아웃");
    subHeader.style.maxHeight = '0'; // 서브해더 숨기기

  });
});

let headerInner = document.querySelector('.header-inner');
let headerInner_text_a = headerInner.querySelectorAll('a');
let headerInner_text_i = headerInner.querySelectorAll('i');
let headerInner_logo = headerInner.querySelector('.logo img');
console.log(headerInner_text_a);
console.log(headerInner_text_i);
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // 아래로 스크롤
    headerInner.style.maxHeight = '0';
  } else {
    // 위로 스크롤
    headerInner.style.maxHeight = '100px';

    if (currentScroll == 0) {
      headerInner.style.backgroundColor = 'transparent';
      headerInner_logo.style.filter = 'invert(0)'; // 로고 색상 변경
      for (let i = 0; i < headerInner_text_a.length; i++) {
        headerInner_text_a[i].style.color = 'white';
      }
      for (let i = 0; i < headerInner_text_i.length; i++) {
        headerInner_text_i[i].style.color = 'white';
      }


    }
    else {
      headerInner_logo.style.filter = 'invert(1)'; // 로고 
      headerInner.style.backgroundColor = "white";
      for (let i = 0; i < headerInner_text_a.length; i++) {
        headerInner_text_a[i].style.color = 'black';
      }
      for (let i = 0; i < headerInner_text_i.length; i++) {
        headerInner_text_i[i].style.color = 'black';
      }

    }
  }

  // 반드시 비교 후에 저장해야 함
  lastScrollTop = currentScroll;
});



//=======================메인 자동 스와이퍼====================================
const autoplayDelay = 5000; // ms 단위 (예: 5초)

const mainVisual_swiper = new Swiper(".mainVisual_swiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: autoplayDelay,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  allowTouchMove: false,
});


//=========================concert======================================
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const today = new Date();

const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

let day_list = document.querySelector('.day-list');

for (let i = -9; i <= 9; i++) {
  const loopDate = new Date(year, month, date + i);
  const loopYear = loopDate.getFullYear();
  const loopMonth = loopDate.getMonth() + 1;
  const loopDay = loopDate.getDate();
  const weekDay = days[loopDate.getDay()];

  let dayDiv = document.createElement("div");
  dayDiv.classList.add("day");

  let dayOfWeekSpan = document.createElement("span");
  dayOfWeekSpan.textContent = weekDay;

  let dateSpan = document.createElement("span");
  dateSpan.textContent = loopDay;

  if (loopDay == date) {
    dateSpan.classList.add("today"); // 오늘 날짜에 클래스 추가
  }


  dayDiv.appendChild(dayOfWeekSpan);
  dayDiv.appendChild(dateSpan);
  day_list.appendChild(dayDiv);
}





var poster_Swiper = new Swiper(".poster-Swiper", {
  loop: true,
  autoplay: {
    delay: 400000000,
    disableOnInteraction: false
  },
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    501: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});





//=========================progress bar element======================================
const progressBar = document.querySelector('.swiper-button-slider .progress-bar');

// 애니메이션 초기화 후 다시 시작
function startProgressBar() {
  progressBar.classList.remove('animate');
  void progressBar.offsetWidth; // 강제 reflow로 애니메이션 리셋
  progressBar.style.animationDuration = `${autoplayDelay}ms`;
  progressBar.classList.add('animate');
}

// 초기 시작
startProgressBar();

// 슬라이드 변경될 때 다시 시작
mainVisual_swiper.on('slideChangeTransitionStart', () => {
  startProgressBar();
});



///poster-Swiper에 마우스 올리면 커서 변경
/*
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
*/
