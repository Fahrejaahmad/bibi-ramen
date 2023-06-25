const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const bgNav = document.querySelector('nav')

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
    bgNav.classList.toggle('bgnav')
});


window.addEventListener('scroll', function() {
    let header = document.getElementById('header');

    if (window.pageYOffset > 0) {
        header.style.backgroundColor = '#567189';
        header.style.transition = 'all 1ms'
    } else {
        header.style.backgroundColor = ''; 
    }
});

function demo() {
    alert("Mohon maaf Fitur ini masih dalam tahap Pengembangan")
}