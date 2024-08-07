
const header = document.querySelector("header");
window.addEventListener ("scroll", function() { header.classList.toggle ("sticky", window.scrolly > 120); });

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navlist = document.querySelector(".navlist");
    const navLinks = document.querySelectorAll(".navlist a");
  
    menuIcon.addEventListener("click", function() {
      navlist.classList.toggle("open");
    });
  
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        navlist.classList.remove("open");
      });
    });
  });
  
