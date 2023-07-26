const nav = document.querySelector("nav");

window.addEventListener("scroll", toggleNavBar);

function toggleNavBar(){
    
    let scrollValue = window.scrollY;
    
    if(scrollValue > 120){
        nav.style.backgroundColor = "black";
    }else{
        nav.style.backgroundColor = "transparent";
    }
}


// Navigation Bar
const hamburger = document.querySelector("nav .btn");
const menu = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", displayMenu);

function displayMenu(){
    navLinks.classList.toggle("openMenu");

    if(navLinks.className.includes("openMenu")){
        document.querySelector(".fa-xmark").style.display = "block";
        menu.style.display = "none";
    }else{
        document.querySelector(".fa-xmark").style.display = "none";
        menu.style.display = "block";
    }
}