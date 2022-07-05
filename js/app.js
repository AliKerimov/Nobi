const toggleBtn = document.querySelector(".menu-toggle");
const navs = document.querySelector(".toggle");
toggleBtn.addEventListener("click", openHeader);
function openHeader() {
  navs.classList.toggle("sm-menu");
}
const closen=document.querySelector(".close");
closen.addEventListener("click", closeNav);
function closeNav(){
  navs.classList.remove("sm-menu");
}