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