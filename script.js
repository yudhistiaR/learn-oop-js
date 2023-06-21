const list = document.querySelector('.list');
const menu = document.querySelector('.menu-btn');

menu.addEventListener('click', () => {
    list.classList.toggle('show-menu');
});
