const shopSubmenu = document.getElementById('shop-submenu')
const shopButton = document.getElementById('shop')
let subMenuButtons = document.getElementsByClassName('shop-submenu-buttons')


shopButton.addEventListener('mouseenter', () =>{
   shopSubmenu.style.display = 'flex'   
})
shopSubmenu.addEventListener('mouseleave', () =>{
   shopSubmenu.style.display = 'none'   
})
