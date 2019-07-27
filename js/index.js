const burger = document.querySelector('.burger');
const navDom = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav li');
// const mainContentDOM = document.querySelector('.content-container');


burger.addEventListener('click', () => {
    // navDom.classList.toggle('main-nav');
    navDom.classList.toggle('nav-active');
    // mainContentDOM.classList.toggle('blur');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 6 + 0.2}s`
        }

    })
    burger.classList.toggle('closeBurger');
});

