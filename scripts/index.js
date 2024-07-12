const sidebar = document.querySelector('.sidebar');
const openBtn = document.querySelector('.btn-menu--open');
const closeBtn = document.querySelector('.btn-menu--close');

sidebar.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

openBtn.addEventListener('click', (evt) => {
  evt.stopPropagation();
  sidebar.classList.add('sidebar--open');
});

const closeMenu = () => {
  sidebar.classList.remove('sidebar--open');
};

closeBtn.addEventListener('click', closeMenu);
window.addEventListener('click', closeMenu);
window.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    closeMenu();
  }
});

// == menu nested ==

const menuItemColl = document.querySelectorAll('.menu-item');

menuItemColl.forEach((menuItem) => {
  const menuItemText = menuItem.querySelector('.menu-item__text');
  const menuNested = menuItem.querySelector('.menu--nested');

  if (menuNested) {
    menuItemText.style.cursor = 'pointer';
    menuItemText.addEventListener('click', () => {
      menuNested.classList.toggle('menu--open');
    });
  }
});
