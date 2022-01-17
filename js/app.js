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


