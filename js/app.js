// Navbar 

let navbar = document.querySelector('.navbar');

const scroll = window.scrollY;

document.addEventListener('scroll', () => {
    if(scrollY > 50) {
        navbar.style.background = '#161616';
        navbar.style.borderBottom = '2px solid #ffffff43';
        navbar.style.transition = '0.3s ease';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.border = 'none';
        navbar.style.transition = '0.3s ease';
    }
})

// Hamburger Menu 

let hamBtn = document.querySelector('.navbar-toggler');
let openHamBtn = document.querySelector('.open-ham-btn');
let menu = document.getElementById('navbarNav');
let hamBtnIcon = document.querySelector('.navbar-toggler-icon');



hamBtn.addEventListener('click', () => {
    hamBtnIcon.classList.toggle('open');
    menu.classList.toggle('show-mobile-menu');
    menu.style.transition = "all 0.5s ease";
});


// Search Box JS

let searchIcon = document.querySelector('.search-icon');
let searchBox = document.querySelector('.search-box');

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('opacity');
})


// ToTop Button

let toTop = document.getElementById('toTop');

document.addEventListener('scroll', () => {
    if (scrollY > 650) {
        toTop.style.bottom = '20px';
    } else {
        toTop.style.bottom = '-50px';
    }
})

toTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})


