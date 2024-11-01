const burgerMenu = document.getElementById('burgerBtn');
const menuNav = document.getElementById('menuNav');

burgerMenu.addEventListener('click', function () {
    menuNav.classList.toggle('show');
})