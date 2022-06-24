const menuP = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');

// adicionar active nas classes de menu p e ul
function addActiveClass() {
    menuP.classList.toggle('active');
    menuList.classList.toggle('active');
}

// ativar ul só quando clicar no p
menuP.addEventListener('click', addActiveClass)