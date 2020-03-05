
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

    const modalToggler = (buttonClass, modalClass) => {
        let btn = document.querySelectorAll(buttonClass),
            modal = document.querySelector(modalClass),
            closetBtn = document.querySelector(`${modalClass} .close-btn`),
            modalBackground = document.querySelector(`${modalClass} .modal-background`);

       if(modal) {
        btn.forEach(one => {
            one.addEventListener('click', () => {
                modal.classList.add('active');
            });
        });

        [closetBtn, modalBackground].forEach(one => {
            one.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        });
       }
    }

    const closeMenu = () => {
        const modalbtn = document.querySelector('.navbar .togglebtn');
        const modalmenu = document.querySelector('.navbar .menu');
        modalbtn.classList.remove('active');
        modalmenu.classList.remove('active');
    }

    let scrollToAnchor = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                closeMenu();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }



    modalToggler('.modal-request-open', '.modal-request');

    scrollToAnchor();
    isScrolled();
    menuToggle();

    const openDoneModal = () => {
        $('.complete-modal').addClass('active');
        setTimeout(() => $('.complete-modal').removeClass('active'), 4000)
    };

    (() => {
        const form = document.querySelector('.modal-request .form');
        const form2 = document.querySelector('.contacts-form');

        [form, form2].forEach(one => {
            one.addEventListener('submit', (e) => {
                e.preventDefault();
                $.ajax({
                    method: "POST",
                    url: "../send.php",
                    data: $(one).serialize(),
                })
                .done(function() {
                    openDoneModal();
                    one.reset();
                });
            });
        })
    })();
});