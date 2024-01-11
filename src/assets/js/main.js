document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function() {
        document.body.classList.remove('loading')
    }, 500)
})

const navbar = document.querySelector('.navbar')
const navbarToggle = document.querySelector('.navbar-toggle')
navbarToggle.addEventListener('click', function() {
    if(!navbar.classList.contains('show')) {
        document.body.classList.add('prevent-scroll')
    } else {
        document.body.classList.remove('prevent-scroll')
    }
    navbar.classList.toggle('show')
    navbarToggle.classList.toggle('hide')
})

navbar.addEventListener('click', function() {
    if(navbar.classList.contains('show')) {
        navbar.classList.remove('show')
        navbarToggle.classList.remove('hide')
        document.body.classList.remove('prevent-scroll')
    }
})

ScrollReveal().reveal('.reveal', {
    // delay: 1000,
    duration: 1000,
    reset: true,
    opacity: 0
});