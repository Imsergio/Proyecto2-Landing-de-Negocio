
const navMenu = document.querySelector('.nav'),
  navShow = document.querySelector('#nav-show'),
  navClose = document.querySelector('#nav-close'),
  navLink = document.querySelectorAll('.nav__link');
/*=============== mostrar menu ===============*/
// cerrar o ocultar el menu al hacer click en los botones 
navShow.addEventListener('click', () => {
  navMenu.classList.contains("show-menu") ? navMenu.classList.remove("show-menu") : navMenu.classList.add("show-menu")
})
navClose.addEventListener('click', () => {
  navMenu.classList.contains("show-menu") ? navMenu.classList.remove("show-menu") : navMenu.classList.add("show-menu")
})

/*=============== remover menu al hacer click en un link ===============*/
// al hacer click en un link se oculta el menu
const linkAction = ()=>{
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== Animacion al header al bajar en la pagina ===============*/
// cuando el scroll es mayor a 50 se añade la clase.
const scrollHeader = () =>{
  const header = document.querySelector('.header');
  this.scrollY >= 50 ? header.classList.add('bg-header')
                      :header.classList.remove('bg-header');
}
window.addEventListener('scroll',scrollHeader);
