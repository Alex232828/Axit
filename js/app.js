const burgerBtn = document.querySelector('.burger__btn');
const burgerItem = document.querySelector('.burger__item')
const registerShow = document.querySelector('.register__btn_active');
const navList = document.querySelector('.nav__list');
const header = document.getElementById('header');
const smoothHead = document.querySelector('.nav__link');

// HEADER FIXED

window.addEventListener('scroll', () => {
  let scrollPos = this.scrollY;

  if (scrollPos > 99) {
      header.classList.add('header__fixed');
  } else {
      header.classList.remove('header__fixed');
  }
})

// Header Btn and register btn active

burgerBtn.onclick = () => {
  burgerItem.classList.toggle('burger__active');
  navList.classList.toggle('nav__show');
  }

// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const headerHeight = document.querySelector('.header').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerHeight;
      navList.classList.remove('nav__show');

      burgerItem.classList.remove('burger__active');
      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
      });
  });
});















