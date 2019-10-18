const burger = document.querySelector("[mobile-menu-btn-js]");
const headerBar = document.querySelector("[header-animate-js]");
const headerMenu = document.querySelector('.header__menu__link');
const close = document.querySelector('[header-btn-close]');
const intro = document.querySelector('[left-animate-js]');
const blockGallery = document.querySelector('[right-animate-js]');
const blockAbout = document.querySelector('[animate-halfblock-lays-js]');
const blockMap = document.querySelector('[animate-halfblock-map-js]');
const header = document.querySelector('[data-js-dir]');

const closeMenu = () => {
  burger.classList.toggle('active');
  headerBar.classList.toggle('active');
  headerMenu.classList.toggle('active');
  headerMenu.nextElementSibling.classList.toggle('active');
  headerMenu.nextElementSibling.nextElementSibling.classList.toggle('active');
  close.classList.toggle('active');
}
let heightHeader = header.offsetHeight / 1.1;
window.addEventListener('resize', () => {
	heightHeader = header.offsetHeight / 1.1;
});
let value = window.pageYOffset;
window.addEventListener('scroll', function () {
  if ((window.pageYOffset > value + 50) && (window.pageYOffset > heightHeader)) {
    header.setAttribute('data-js-dir', 'down')
    headerBar.setAttribute('data-js-dir', 'down');
    value = window.pageYOffset;
    if (burger.className.includes('active')) {
      closeMenu();
    }
  } else if (window.pageYOffset < value) {
    header.setAttribute('data-js-dir', 'up')
    headerBar.setAttribute('data-js-dir', 'up');
    value = window.pageYOffset;
  }
});

close.onclick = () => {
  closeMenu();
};

burger.onclick = () => {
  closeMenu();
}
let posTop;
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

setTimeout(function () {
  window.scrollTo(0, 1);
}, 1);
let flag = false;
if (document.body.offsetWidth > 640) {
  let halfBlock;
  window.addEventListener('scroll', function () {
       if (!flag) {
         posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
         posTop = posTop + window.innerHeight - intro.getBoundingClientRect().top * 2;
         if (posTop > intro.getBoundingClientRect().top) {
           intro.style.opacity = 1;
           intro.style.transform = 'translate3d(0, 0, 0)';
         }
         if (posTop > blockGallery.getBoundingClientRect().top) {
           blockGallery.style.opacity = 1;
           blockGallery.style.transform = 'translate3d(0, 0, 0)';
         }
         if (posTop / 2 > blockAbout.getBoundingClientRect().top) {
           halfBlock = document.querySelector('.lays');
           halfBlock.lastElementChild.style.transform = 'translate3d(0, 0, 0)';
           halfBlock.firstElementChild.style.transform = 'translate3d(0, 0, 0)';
           halfBlock.firstElementChild.style.opacity = 1;
           halfBlock.lastElementChild.style.opacity = 1;
         }
         if (posTop / 2 > blockMap.getBoundingClientRect().bottom) {
           halfBlock = blockMap;
           halfBlock.lastElementChild.style.transform = 'translate3d(0, 0, 0)';
           halfBlock.firstElementChild.style.transform = 'translate3d(0, 0, 0)';
           halfBlock.firstElementChild.style.opacity = 1;
           halfBlock.lastElementChild.style.opacity = 1;
           flag = true;
         }
       }
     }
  );
}
intro.style.opacity = 1;
document.querySelector('body').style.backgroundColor = 'white';

