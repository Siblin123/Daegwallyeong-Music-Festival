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


//모바일 헤더



let mobile_menu_li = document.querySelectorAll('.mobile-menu > li');

mobile_menu_li.forEach(function (mobile_m) {
  mobile_m.addEventListener('click', function (e) {
    e.preventDefault(); // 링크 이동 방지 (선택사항)


    let menu = mobile_m.querySelector(".mobile-menu .mobile-sub-menu-box");
    console.log(menu);
    if (menu) {
      if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
        menu.style.maxHeight = "300px";
      } else {
        menu.style.maxHeight = "0px";
      }
    }

  });
});

let mobileMenu = document.querySelector('.mobile-menu');
//모바일 헤더 닫기
let close_btn = document.querySelector(".close-btn");
let mobileMenu_NAV = document.querySelector('.mobile-menu-Nav');

function preventScroll(e) {
  e.preventDefault();
  window.addEventListener('wheel', preventScroll, { passive: false });
}

close_btn.addEventListener("click", function () {
  if (mobileMenu_NAV.style.display === "none") {
    mobileMenu_NAV.style.display = "block";  // 보이게
    console.log("스크롤 막기");
  } else {
    mobileMenu_NAV.style.display = "none";   // 숨기기
    console.log("스크롤 풀기");
    window.removeEventListener('wheel', preventScroll, { passive: false });

  }
});

mobileMenu.addEventListener("click", function () {
  if (mobileMenu_NAV.style.display === "none") {
    mobileMenu_NAV.style.display = "block";  // 보이게
    console.log("스크롤 막기");
    window.addEventListener('wheel', preventScroll, { passive: false });

  } else {
    mobileMenu_NAV.style.display = "none";   // 숨기기
    console.log("스크롤 풀기");
  }
});





let headerInner = document.querySelector('.header-inner');
let menu_text_a = document.querySelectorAll('.menu > li > a');
console.log(menu_text_a.length + "@");
let headerInner_text_i = headerInner.querySelectorAll('.flex-box i');
let headerInner_logo = headerInner.querySelector('.logo img');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // 아래로 스크롤
    headerInner.style.maxHeight = '0';
    headerInner.style.overflow = "hidden";
    search_icon_inner.classList.remove("active");
  } else {
    // 위로 스크롤
    headerInner.style.maxHeight = '100px';
    headerInner.style.overflow = "";

    if (currentScroll == 0) {
      headerInner.style.backgroundColor = 'transparent';
      headerInner_logo.style.filter = 'invert(0)'; // 로고 색상 변경
      for (let i = 0; i < menu_text_a.length; i++) {
        menu_text_a[i].style.color = 'white';
      }
      for (let i = 0; i < headerInner_text_i.length; i++) {
        headerInner_text_i[i].style.color = 'white';
      }
    }
    else {
      headerInner_logo.style.filter = 'invert(1)'; // 로고 
      headerInner.style.backgroundColor = "white";
      for (let i = 0; i < menu_text_a.length; i++) {
        menu_text_a[i].style.color = 'black';
      }
      for (let i = 0; i < headerInner_text_i.length; i++) {
        headerInner_text_i[i].style.color = 'black';
      }

    }
  }

  // 반드시 비교 후에 저장해야 함
  lastScrollTop = currentScroll;
});

//=================================해더 끝

let search_icon = document.querySelector(".search-icon");
let search_icon_inner = document.getElementById("search").querySelector(".inner");

search_icon.addEventListener("click",()=>{
  
  search_icon_inner.classList.toggle("active");

  if (!search_icon_inner.classList.contains("active")) {
    headerInner.style.backgroundColor = 'transparent';
    headerInner_logo.style.filter = 'invert(0)'; // 로고 색상 변경
    for (let i = 0; i < menu_text_a.length; i++) {
      menu_text_a[i].style.color = 'white';
    }
    for (let i = 0; i < headerInner_text_i.length; i++) {
      headerInner_text_i[i].style.color = 'white';
    }
  }
  else {
    headerInner_logo.style.filter = 'invert(1)'; // 로고 
    headerInner.style.backgroundColor = "white";
    for (let i = 0; i < menu_text_a.length; i++) {
      menu_text_a[i].style.color = 'black';
    }
    for (let i = 0; i < headerInner_text_i.length; i++) {
      headerInner_text_i[i].style.color = 'black';
    }

  }
})



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