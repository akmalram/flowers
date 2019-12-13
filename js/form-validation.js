window.addEventListener('DOMContentLoaded', () => {

    const disableForm = () => {
        const input = document.querySelector('.form .input-submit');
        input.setAttribute('disabled', 'true')
    }

    const enableForm = () => {
        const input = document.querySelector('.form .input-submit');
        input.removeAttribute('disabled')
    }

    const validateName = () => {
        const inputName = document.querySelector('.form .input-name');

        inputName.addEventListener('blur', (e) => {
            const el = e.target;
            const data = el.value;
            const nextel = el.nextElementSibling;

            const cleanClasses = () => {
                nextel.classList.remove('empty');
                nextel.classList.remove('numbers');
                nextel.classList.remove('length');
            }
            cleanClasses(nextel);

            if(data.length == 0) {
                disableForm();
                nextel.classList.add('empty');
            }else if (/\d/.test(data)) {
                nextel.classList.add('numbers');
                disableForm();
            }else if (data.length < 2) {
                nextel.classList.add('length');
                disableForm();
            } else {
                enableForm();
                cleanClasses();
            }
        });
    }

    const validatePhone = () => {
        const inputName = document.querySelector('.form .input-phone');

        inputName.addEventListener('blur', (e) => {
            const el = e.target;
            const data = el.value;
            const nextel = el.nextElementSibling;

            const cleanClasses = () => {
                nextel.classList.remove('empty');
                nextel.classList.remove('letters');
                nextel.classList.remove('length');
            }
            cleanClasses(nextel);

            if(data === '' || data.length === 0) {
                disableForm();
                nextel.classList.add('empty');
            }else if (!/(\+\d+)|(\d+)/.test(data)) {
                nextel.classList.add('letters');
                disableForm();
            }else if (data.length < 9) {
                nextel.classList.add('length');
                disableForm();
            } else {
                enableForm();
                cleanClasses();
            }
        });
    }

    const validateEmail = () => {
        const inputName = document.querySelector('.form .input-email');

        inputName.addEventListener('blur', (e) => {
            const el = e.target;
            const data = el.value;
            const nextel = el.nextElementSibling;

            const cleanClasses = () => {
                nextel.classList.remove('empty');
                nextel.classList.remove('validEmail');
                nextel.classList.remove('length');
            }
            cleanClasses(nextel);

            if(data.length == 0) {
                disableForm();
                nextel.classList.add('empty');

            }else if (!/.+@.+\..+/i.test(data)) {
                disableForm();
                nextel.classList.add('validEmail');

            }else if (data.length < 7) {
                disableForm();
                nextel.classList.add('length');

            } else {
                enableForm();
                cleanClasses();
            }
        });
    }

    const validateTextarea = () => {
        const inputName = document.querySelector('.form .input-textarea');

        inputName.addEventListener('blur', (e) => {
            const el = e.target;
            const data = el.value;
            const nextel = el.nextElementSibling;

            const cleanClasses = () => {
                nextel.classList.remove('empty');
            }
            cleanClasses(nextel);

            if(data.length == 0) {
                disableForm();
                nextel.classList.add('empty');

            } else {
                enableForm();
                cleanClasses();
            }
        });
    }

    validateName();
    validatePhone();
    validateEmail();
    validateTextarea();
});