// Navbar Fixed

window.onscroll = (e) => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const pageTop = document.getElementById('top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    pageTop.classList.remove('hidden');
  } else {
    header.classList.remove('navbar-fixed');
    pageTop.classList.add('hidden');
  }
}

// Hamburger & Navbar Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target !== hamburger && e.target !== navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

