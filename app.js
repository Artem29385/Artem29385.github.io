const burger = document.querySelector("[burger-btn-js]");
const headerBar = document.querySelector("[header-animate-js]");
const headerMenu = document.querySelector('.header__menu');
const close = document.querySelector('[header-btn-close]');
const intro = document.querySelector('.intro');
const blockGallery = document.querySelector('.photos');
const blockAbout = document.querySelector('.lays__one');
const map = document.querySelector('.map');
const header = document.querySelector('[data-js-dir]');

function closeMenu() {
   burger.classList.toggle('active');
   headerBar.classList.toggle('active');
   headerMenu.classList.toggle('active');
   headerMenu.nextElementSibling.classList.toggle('active');
   headerMenu.nextElementSibling.nextElementSibling.classList.toggle('active');
   close.classList.toggle('active');
}

const heightHeader = header.offsetHeight / 1.1;
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
               document.querySelector('.intro').style.opacity = 1;
               document.querySelector('.intro').style.transform = 'translate3d(0, 0, 0)';
            }
            if (posTop > blockGallery.getBoundingClientRect().top) {
               document.querySelector('.photos').style.opacity = 1;
               document.querySelector('.photos').style.transform = 'translate3d(0, 0, 0)';
            }
            if (posTop / 2 > blockAbout.getBoundingClientRect().top) {
               halfBlock = document.querySelector('.lays');
               halfBlock.lastElementChild.style.transform = 'translate3d(0, 0, 0)';
               halfBlock.firstElementChild.style.transform = 'translate3d(0, 0, 0)';
               halfBlock.firstElementChild.style.opacity = 1;
               halfBlock.lastElementChild.style.opacity = 1;
            }
            if (posTop / 2 > map.getBoundingClientRect().bottom) {
               halfBlock = document.querySelector('.map');
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
document.querySelector('.intro').style.opacity = 1;
document.querySelector('body').style.backgroundColor = 'white';

