
const navMenu = document.querySelector('.nav'),
  navShow = document.querySelector('#nav-show'),
  navClose = document.querySelector('#nav-close'),
  navLink = document.querySelectorAll('.nav__link');
/*=============== mostrar menu ===============*/

navShow.addEventListener('click', () => {
  navMenu.classList.contains("show-menu") ? navMenu.classList.remove("show-menu") : navMenu.classList.add("show-menu")
})
navClose.addEventListener('click', () => {
  navMenu.classList.contains("show-menu") ? navMenu.classList.remove("show-menu") : navMenu.classList.add("show-menu")
})

/*=============== remover menu al hacer click en un link ===============*/

const linkAction = ()=>{
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
