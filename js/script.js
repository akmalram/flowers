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
                header.style.backgroundImage = `url(../img/header-bg${++cnt}.jpg)`;
            } else if(cnt == cntOfimgs) {
                header.style.backgroundImage = `url(../img/header-bg${cnt = 1}.jpg)`;
            }
        }

        const prev = () => {
            if(cnt == 1) {
                header.style.backgroundImage = `url(../img/header-bg${cnt = cntOfimgs}.jpg)`;
            } else if(cnt <= cntOfimgs) {
                header.style.backgroundImage = `url(../img/header-bg${--cnt}.jpg)`;
            }
        }

        setInterval(() => {
            prev();
        }, 5000);

    }

    backgroundSlider();
    isScrolled();
    menuToggle();
});