const categoriasSubmenu = document.getElementById('shop-submenu')
const categoriasButton = document.getElementById('shop')
let subMenuButtons = document.getElementsByClassName('shop-submenu-buttons')

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