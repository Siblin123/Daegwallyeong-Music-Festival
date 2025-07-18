



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

function handleResize() {
  const width = document.documentElement.clientWidth;

  if (width >= 500) {
    console.log("현재 너비는 500px 이상입니다.");
    create_DayList(9);
    // 원하는 동작 실행
  } else {
    console.log("현재 너비는 500px 미만입니다.");
    create_DayList(3)
    // 다른 동작 실행
  }
}

// 처음 로드 시 한번 실행
handleResize();

// 창 크기 변경 시마다 실행
window.addEventListener("resize", handleResize);

function create_DayList(num) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();

  let day_list = document.querySelector('.day-list');
  day_list.innerHTML = "";
  for (let i = -num; i <= num; i++) {
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

}





var poster_Swiper = new Swiper(".poster-Swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
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

//==========================notice-warps==============
let noticeData = [
  {
    h6_data: "[2025 평창대관령음악제] 셔틀버스(유료) 운영 안내",
    span_data: "2025.06.12",
    tag_data: "NOTICE"
  },
  {
    h6_data: "[2025 평창대관령음악제] 기자간담회 6월 11일에 열려",
    span_data: "2025.06.12",
    tag_data: "NEWS"

  },
  {
    h6_data: "[2025 평창대관령음악제] 부대행사 일정 및 티켓오픈 안내",
    span_data: "2025.06.05",
    tag_data: "NOTICE"

  },
  {
    h6_data: "[2025 대관령아카데미] 시즌 교육프로그램 운영",
    span_data: "2025.06.05",
    tag_data: "NOTICE"
  },
  {
    h6_data: "[공고] 2025 평창대관령음악제 자원활동가 모집",
    span_data: "2025.05.29",
    tag_data: "NEWS"
  }


];

let notice_box = document.querySelector(".notice-box")
let notice_warps_li = document.querySelectorAll(".notice-box li")
console.log(notice_warps_li.length + "개입니다");
for (let i = 0; i < 5; i++) {

  let li_ = document.createElement("li");
  let tag_ = document.createElement("span");
  let h2_ = document.createElement("h6");
  let span_ = document.createElement("span");
  li_.setAttribute("data-aos", "fade-left");
  li_.setAttribute("data-aos-duration", `${(i + 1) * 500}`);
  tag_.classList.add("tag");
  tag_.innerHTML = noticeData[i].tag_data;
  h2_.innerHTML = noticeData[i].h6_data;
  span_.innerHTML = noticeData[i].span_data;

  if (noticeData[i].tag_data == "NOTICE") {
    tag_.classList.add("NOTICE")
  }
  else if (noticeData[i].tag_data == "NEWS") {
    tag_.classList.add("NEWS")
  }


  li_.appendChild(tag_);
  li_.appendChild(h2_);
  li_.appendChild(span_);
  notice_box.appendChild(li_);
}