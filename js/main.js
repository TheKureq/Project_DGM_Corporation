const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const navMobileItems = document.querySelectorAll('.nav__link-mobile');
const footerYear = document.querySelector('.footer__year')


const handleNav = () => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')
}

navBtn.addEventListener('click',handleNav);

navMobileItems.forEach(e => {
    e.addEventListener("touchend", () => {
        handleNav();
    })
})

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();