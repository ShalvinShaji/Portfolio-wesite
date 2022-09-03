/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__role', {delay: 300})
sr.reveal('.home__about__me', {delay:500})
sr.reveal('.home__social-icons', {delay:700, interval: 200})

// sr.reveal('.icon-l', {origin:'left', delay: 400})
// sr.reveal('.icon-r', {origin:'right', delay: 500})

/*SCROLL ABOUT*/

sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.set', {interval: 200})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})
sr.reveal('.footer__link', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.footer__line', {distance: '20px', delay: 80, interval: 100})
sr.reveal('.footer__social', {distance: '20px', delay: 50, interval: 100})
