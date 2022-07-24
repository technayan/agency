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
let navLink = document.querySelectorAll('.nav-link');



hamBtn.addEventListener('click', () => {
    hamBtnIcon.classList.toggle('open');
    menu.classList.toggle('show-mobile-menu');
    menu.style.transition = "all 0.5s ease";
});


navLink.forEach(link => {
    link.addEventListener('click', () => {
        hamBtnIcon.classList.remove('open');
        menu.classList.remove('show-mobile-menu');
        menu.style.transition = "all 0.5s ease";
    });
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


// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-text', {scrollTrigger: '.hero-text', y: 50,opacity: 0, duration: 1});
gsap.from('.welcome-section .section-title', {scrollTrigger: '.welcome-section .section-title', y: 50,opacity: 0, duration: 1});
gsap.from('.welcome-section .section-desc', {scrollTrigger: '.welcome-section .section-desc', y: 50,opacity: 0, duration: 1});
gsap.from('.welcome-section .quote', {scrollTrigger: '.welcome-section .quote', y: 50,opacity: 0, duration: 1});
gsap.from('.welcome-right', {scrollTrigger: '.welcome-right', y: 50,opacity: 0, duration: 1});
gsap.from('.welcome-section .primary-btn', {scrollTrigger: '.welcome-section .primary-btn', y: 50,opacity: 0, duration: 1});
gsap.from('.great-services-section .section-title', {scrollTrigger: '.great-services-section .section-title', y: 50,opacity: 0, duration: 1});
gsap.from('.great-services-desc', {scrollTrigger: '.great-services-desc', y: 50,opacity: 0, duration: 1});
gsap.from('.gs-1', {scrollTrigger: '.gs-1', y: 50,opacity: 0, duration: 1});
gsap.from('.gs-2', {scrollTrigger: '.gs-2', y: 50,opacity: 0, duration: 1});
gsap.from('.gs-3', {scrollTrigger: '.gs-3', y: 50,opacity: 0, duration: 1});
gsap.from('.gs-4', {scrollTrigger: '.gs-4', y: 50,opacity: 0, duration: 1});
gsap.from('.sp-1', {scrollTrigger: '.sp-1', y: 50,opacity: 0, duration: 1});
gsap.from('.sp-2', {scrollTrigger: '.sp-2', y: 50,opacity: 0, duration: 1});
gsap.from('.special-features-section .section-title', {scrollTrigger: '.special-features-section .section-title', y: 50,opacity: 0, duration: 1});
gsap.from('.special-features-section .section-desc', {scrollTrigger: '.special-features-section .section-desc', y: 50,opacity: 0, duration: 1});
gsap.from('.service-list', {scrollTrigger: '.service-list', y: 50,opacity: 0, duration: 1});
gsap.from('.business-team-section .custom-section-title', {scrollTrigger: '.business-team-section .custom-section-title', y: 50,opacity: 0, duration: 1});
gsap.from('.business-team-section .section-desc', {scrollTrigger: '.business-team-section .section-desc', y: 50,opacity: 0, duration: 1});
gsap.from('.member-1', {scrollTrigger: '.member-1', y: 50,opacity: 0, duration: 1});
gsap.from('.member-2', {scrollTrigger: '.member-2', y: 50,opacity: 0, duration: 1});
gsap.from('.member-3', {scrollTrigger: '.member-3', y: 50,opacity: 0, duration: 1});
gsap.from('.member-4', {scrollTrigger: '.member-4', y: 50,opacity: 0, duration: 1});
gsap.from('.served-section .section-title', {scrollTrigger: '.served-section .section-title', y: 50,opacity: 0, duration: 1});
gsap.from('.served-section .section-desc', {scrollTrigger: '.served-section .section-desc', y: 50,opacity: 0, duration: 1});
gsap.from('.p-img-1', {scrollTrigger: '.p-img-1', y: 50,opacity: 0, duration: 1});
gsap.from('.p-img-2', {scrollTrigger: '.p-img-2', y: 50,opacity: 0, duration: 1});
gsap.from('.p-img-3', {scrollTrigger: '.p-img-3', y: 50,opacity: 0, duration: 1});
gsap.from('.case-studies-section .custom-section-title', {scrollTrigger: '.case-studies-section .custom-section-title', y: 50,opacity: 0, duration: 1});
gsap.from('.case-studies-section .section-desc', {scrollTrigger: '.case-studies-section .section-desc', y: 50,opacity: 0, duration: 1});
gsap.from('.cs-1', {scrollTrigger: '.cs-1', y: 50,opacity: 0, duration: 1});
gsap.from('.cs-2', {scrollTrigger: '.cs-2', y: 50,opacity: 0, duration: 1});
gsap.from('.cs-3', {scrollTrigger: '.cs-3', y: 50,opacity: 0, duration: 1});
gsap.from('.testimonials-section .section-title', {scrollTrigger: '.testimonials-section .section-title', y: 50,opacity: 0, duration: 1});
gsap.from('.c-img-1', {scrollTrigger: '.c-img-1', y: 50,opacity: 0, duration: 1});
gsap.from('.c-img-2', {scrollTrigger: '.c-img-2', y: 50,opacity: 0, duration: 1});
gsap.from('.review-1', {scrollTrigger: '.review-1', y: 50,opacity: 0, duration: 1});
gsap.from('.review-2', {scrollTrigger: '.review-2', y: 50,opacity: 0, duration: 1});
gsap.from('.contact-section .section-title', {scrollTrigger: '.contact-section .section-title', y: 50,opacity: 0, duration: 1});
gsap.from('.contact-section .section-desc', {scrollTrigger: '.contact-section .section-desc', y: 50,opacity: 0, duration: 1});
gsap.from('.contact-section .contact-section-desc', {scrollTrigger: '.contact-section .contact-section-desc', y: 50,opacity: 0, duration: 1});
gsap.from('.contact-brand', {scrollTrigger: '.contact-brand', y: 50,opacity: 0, duration: 1});
gsap.from('.contact-section .info-1', {scrollTrigger: '.contact-section .info-1', y: 50,opacity: 0, duration: 1});
gsap.from('.contact-section .info-2', {scrollTrigger: '.contact-section .info-2', y: 50,opacity: 0, duration: 1});
gsap.from('.contact-section .info-3', {scrollTrigger: '.contact-section .info-3', y: 50,opacity: 0, duration: 1});
gsap.from('.contact-section .social-links', {scrollTrigger: '.contact-section .social-links', y: 50,opacity: 0, duration: 1});
gsap.from('.footer-text', {scrollTrigger: '.footer-text', opacity: 0, duration: 1});


