//===================type 색칠
let type_Span = document.querySelectorAll(".type ul li span");

type_Span.forEach((item) => {
  const color = item.dataset.color; // data-color 값을 가져옴
  item.style.backgroundColor = color;
});





//===============================달력 그리기

let curDate = new Date();         // 현재 날짜
let date = document.querySelector(".date_p");
let day_tbody = document.querySelector(".day-tbody");
console.log(day_tbody);
const year = new Date().getFullYear();
let month = parseInt(date.textContent.split(".")[1], 10) - 1; // 0부터 시작하는 월

let prev_Btn = document.querySelector(".prev");
let next_Btn = document.querySelector(".next");
let curMonth = curDate.getMonth() + 1;

console.log(prev_Btn, next_Btn)
prev_Btn.addEventListener("click", () => {
  if (curMonth > 1) {
    curMonth--;
    console.log(curMonth + "뒤로");
    date.textContent = year + "." + curMonth;
    reload_Calendar(curMonth)

  }

})

next_Btn.addEventListener("click", () => {
  if (curMonth < 12) {
    curMonth++;
    console.log(curMonth + "앞으로");
    date.textContent = year + "." + curMonth;
    reload_Calendar(curMonth)

  }

})


reload_Calendar(month + 1)

function reload_Calendar(month) {

  day_tbody.innerHTML = ""
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month - 1 + 1, 0);
  console.log(startDate, endDate);
  console.log(startDate.getDate() + "|" + endDate.getDate());

  let curDate = 0;
  let startFirstDate = 0;
  for (let i = 0; i < 5; i++) {

    let tr = document.createElement("tr");
    if (i == 0) {
      startFirstDate = startDate.getDay();
      console.log(startFirstDate + "시작요일 0 일요일");
      for (let k = 0; k < startFirstDate; k++) {
        let td = document.createElement("td");
        td.innerHTML = "";
        tr.appendChild(td);


      }
    }
    else {
      startFirstDate = 0;
    }

    for (let j = startFirstDate; j < 7; j++) {



      let td = document.createElement("td");
      curDate++;
      if (curDate <= endDate.getDate()) {
        td.innerHTML = curDate;
        //요일별 색상 변경
        if (j == 0) {
          td.style.color = "red";
        }
        else if(j==6)
        {
          td.style.color = "blue";
        }
      }
      else {

        td.innerHTML = "";
      }
      tr.appendChild(td);
    }
    day_tbody.appendChild(tr);
  }
}

