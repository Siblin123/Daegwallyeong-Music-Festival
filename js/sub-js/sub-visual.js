let list_arrow = document.querySelector(".list-arrow");
let other_list = document.querySelector(".other-list");
list_arrow.addEventListener("click",()=>{
  other_list.classList.toggle("active");

  if(other_list.classList.contains("active"))
  {
    list_arrow.innerHTML="▲";
  }
  else{
    list_arrow.innerHTML="▼";
    
  }
})