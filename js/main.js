
const navMenu = document.querySelector('.nav'),
  navShow = document.querySelector('#nav-show'),
  navClose = document.querySelector('#nav-close')
/*=============== mostrar menu ===============*/

navShow.addEventListener('click', () => {
  navMenu.classList.contains("show-menu") ? navMenu.classList.remove("show-menu") : navMenu.classList.add("show-menu")
})
navClose.addEventListener('click', () => {
  navMenu.classList.contains("show-menu") ? navMenu.classList.remove("show-menu") : navMenu.classList.add("show-menu")
})

/*=============== ** ===============*/
