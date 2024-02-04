const shopSubmenu = document.getElementById('shop-submenu')
const shopButton = document.getElementById('shop')
let subMenuButtons = document.getElementsByClassName('shop-submenu-buttons')
const shopMenuVectorLeft = document.getElementById('vectorLeft')
const shopMenuVectorRight = document.getElementById('vectorRight')

shopButton.addEventListener('mouseenter', () => {
   shopSubmenu.style.display = 'flex'
   shopMenuVectorLeft.style.transform = 'rotate(45deg)'
   shopMenuVectorRight.style.transform = 'rotate(-45deg)'
})
shopSubmenu.addEventListener('mouseleave', () => {
   shopSubmenu.style.display = 'none'
   shopMenuVectorLeft.style.transform = 'rotate(-45deg)'
   shopMenuVectorRight.style.transform = 'rotate(45deg)'

})

document.getElementById('more-btn').addEventListener('click', () => {
   document.getElementById('more-container').style.display = 'flex'
})

