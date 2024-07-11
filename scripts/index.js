const sidebar = document.querySelector('.sidebar');
const openBtn = document.querySelector('.btn-menu--open');
const closeBtn = document.querySelector('.btn-menu--close');

openBtn.addEventListener('click', () => {
  sidebar.style.left = 0;
});

closeBtn.addEventListener('click', () => {
  sidebar.style.left = '-340px';
});
