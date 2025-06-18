window.addEventListener("DOMContentLoaded", () => {
fetch("/header.html") // 서버 루트 기준
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-include").innerHTML = data;
    });
});