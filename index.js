const categoriasSubmenu = document.getElementById('categorias-submenu')
const categoriasButton = document.getElementById('categorias')
let subMenuButtons = document.getElementsByClassName('categorias-submenu-buttons')

categoriasButton.addEventListener('mouseenter', () =>{
   categoriasSubmenu.style.display = 'flex' 
})
categoriasButton.addEventListener('mouseleave', () =>{
    categoriasSubmenu.style.display = 'none' 
 })

subMenuButtons.addEventListener('mouseenter', () =>{
    categoriasSubmenu.style.display = 'flex' 
 })

subMenuButtons.addEventListener('mouseleave', () =>{
    categoriasSubmenu.style.display = 'none' 
 })