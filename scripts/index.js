const sidebar = document.querySelector('.sidebar');
const openBtn = document.querySelector('.btn-menu--open');
const closeBtn = document.querySelector('.btn-menu--close');

sidebar.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

openBtn.addEventListener('click', (evt) => {
  evt.stopPropagation();
  sidebar.style.left = 0;
});

const closeMenu = () => {
  sidebar.style.left = '-340px';
};

closeBtn.addEventListener('click', closeMenu);
window.addEventListener('click', closeMenu);
window.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    closeMenu();
  }
});
