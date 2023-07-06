const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');


const handleNav = () => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')

    navMobile.addEventListener('click', () => {
        navMobile.classList.remove('nav-mobile--active')
        })

        navMobile.addEventListener('click', () => {
            navBtn.classList.remove('is-active')
         })
    }





const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}


handleCurrentYear();
navBtn.addEventListener('click', handleNav)