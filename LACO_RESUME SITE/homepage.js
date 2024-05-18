let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {

let header = document.querySelector('.header');
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =  sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('fa-sun');
    document.body.classList.toggle('dark-mode');
};



ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { orign: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { orign: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { orign: 'left' });
ScrollReveal().reveal('.home-content h3, home-content p,.about-content', { orign: 'right' });
