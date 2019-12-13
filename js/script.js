(function ($) {
    $.fn.bgscroll = function (options) {

        var x = $.extend({
            bgpositionx: 50,
            direction: "bottom",
            debug: !1,
            min: 0,
            max: 100
        }, options);

        var a = $(document).height() - $(window).height(),
            b = a - (this.offset().top + this.height());

        this.offset().top < a && (b = 0);

        var c = (this.offset().top + this.height());

        if ($(window).scrollTop() > b && $(window).scrollTop() < c) {
            var d = ($(window).scrollTop() - b) / (c - b) * 100;

            "top" == x.direction && (d = 100 - d),
                d > x.max && (d = x.max),
                d < x.min && (d = x.min);

            if (x.debug) {
                console.log('Element background position: ' + d + ' %');
            }
        }

        return this.css({
            backgroundPositionY: 'calc(' + d + '% - 30%)'
        });
    };
}(jQuery));

window.addEventListener('DOMContentLoaded', () => {
    const menuToggle = () => {
        const modalbtn = document.querySelector('.navbar .togglebtn');
        const modalmenu = document.querySelector('.navbar .menu');

        modalbtn.addEventListener('click', () => {
            modalbtn.classList.toggle('active');
            modalmenu.classList.toggle('active');
        });
    }

    const isScrolled = () => {
        const element = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0) {
                element.classList.add('scrolled');
            } else if (window.pageYOffset < 200) {
                element.classList.remove('scrolled');
            }
        });

        if (window.pageYOffset > 0) {
            element.classList.add('scrolled');
        } else if (window.pageYOffset < 200) {
            element.classList.remove('scrolled');
        }
    }

    const backgroundSlider = () => {

        const cntOfimgs = 5;
        let cnt = 1;
        const header = document.querySelector('header');

        const prevBtn = document.querySelector('header .bgs-btn.prev');
        const nextBtn = document.querySelector('header .bgs-btn.next');

        const next = () => {
            if(cnt < cntOfimgs) {
                header.style.backgroundImage = `url(./img/header-bg${++cnt}.jpg)`;
            } else if(cnt == cntOfimgs) {
                header.style.backgroundImage = `url(./img/header-bg${cnt = 1}.jpg)`;
            }
        }

        const prev = () => {
            if(cnt == 1) {
                header.style.backgroundImage = `url(./img/header-bg${cnt = cntOfimgs}.jpg)`;
            } else if(cnt <= cntOfimgs) {
                header.style.backgroundImage = `url(./img/header-bg${--cnt}.jpg)`;
            }
        }

        setInterval(() => {
            next();
        }, 5000);

    }

    backgroundSlider();
    isScrolled();
    menuToggle();

    (() => {
        const footer = document.querySelector('footer');
        const coorY = footer.getBoundingClientRect().top + document.body.scrollTop;

        if (window.scrollY + 500 > coorY) {
            footer.classList.add('footer-visible');
        } else if (window.scrollY + 500 < coorY) {
            footer.classList.remove('footer-visible');
        }

        window.addEventListener('scroll', () => {
            if (window.scrollY + 500 > coorY) {
                footer.classList.add('footer-visible');
            } else if (window.scrollY + 500 < coorY) {
                footer.classList.remove('footer-visible');
            }
        });
    })();
});

$(document).ready(() => {
    $(window).scroll(function () {
        $('.bg-parallax').bgscroll({
            direction: 'bottom', // направление bottom или top
            bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
            debug: false, // Режим отладки
            min: 0, // минимальное положение (в %) на которое может смещаться фон
            max: 100 // максимальное положение (в %) на которое может смещаться фон
        });
    });
});