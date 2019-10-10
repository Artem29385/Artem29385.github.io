let burger = document.querySelector(".burger");
let main = document.querySelector(".header__wrapper");
let header__block__img = document.querySelector('.header__wrapper__img');
let close = document.querySelector('.header__wrapper__close');
let intro = document.querySelector('.intro');
let phase2 = document.querySelector('.photos');
let lays__one = document.querySelector('.lays__one');
let map = document.querySelector('.map');
let header = document.querySelector('.header');
let animate = document.querySelectorAll('.intro__wrapper__imgbox__icon__wrap__bg');
let text = document.querySelectorAll('.intro__icon__text');

function closeMenu() {
    burger.classList.toggle('active');
    main.classList.toggle('active');
    header__block__img.classList.toggle('active');
    header__block__img.nextElementSibling.classList.toggle('active');
    header__block__img.nextElementSibling.nextElementSibling.classList.toggle('active');
    close.classList.toggle('active');
}

let heightHeader = header.offsetHeight / 1.1;
let value = window.pageYOffset;
window.addEventListener('scroll', function () {
    if ((window.pageYOffset > value + 50) && (window.pageYOffset > heightHeader)) {
        header.setAttribute('event', 'down')
        main.setAttribute('event', 'down');
        value = window.pageYOffset;
        if (burger.className.includes('active')) {
            closeMenu();
        }
    } else if (window.pageYOffset < value) {
        header.setAttribute('event', 'up')
        main.setAttribute('event', 'up');
        value = window.pageYOffset;
    }
});

close.onclick = () => {
    closeMenu();
};


/*
setTimeout(function () {
    animate[0].style.transform = 'scale(1)';
    text[0].style.opacity = 1;
    return setTimeout(function () {
        animate[1].style.transform = 'scale(1)';
        text[1].style.opacity = 1;
        return setTimeout(function () {
            animate[2].style.transform = 'scale(1)';
            text[2].style.opacity = 1;
        }, 500);
    }, 500);
}, 500);
*/


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
    let drob;
    window.addEventListener('scroll', function () {
            if (!flag) {
                posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                posTop = posTop + window.innerHeight - intro.getBoundingClientRect().top * 2;
                if (posTop > intro.getBoundingClientRect().top) {
                    document.querySelector('.intro').style.opacity = 1;
                    document.querySelector('.intro').style.transform = 'translate3d(0, 0, 0)';
                }
                if (posTop > phase2.getBoundingClientRect().top) {
                    document.querySelector('.photos').style.opacity = 1;
                    document.querySelector('.photos').style.transform = 'translate3d(0, 0, 0)';
                }
                if (posTop / 2 > lays__one.getBoundingClientRect().top) {
                    drob = document.querySelector('.lays');
                    drob.lastElementChild.style.transform = 'translate3d(0, 0, 0)';
                    drob.firstElementChild.style.transform = 'translate3d(0, 0, 0)';
                    drob.firstElementChild.style.opacity = 1;
                    drob.lastElementChild.style.opacity = 1;
                }
                if (posTop / 2 > map.getBoundingClientRect().bottom) {
                    drob = document.querySelector('.map');
                    drob.lastElementChild.style.transform = 'translate3d(0, 0, 0)';
                    drob.firstElementChild.style.transform = 'translate3d(0, 0, 0)';
                    drob.firstElementChild.style.opacity = 1;
                    drob.lastElementChild.style.opacity = 1;
                    flag = true;
                }
            }
        }
    );
}
document.querySelector('.intro').style.opacity = 1;
document.querySelector('body').style.backgroundColor = 'transparent';