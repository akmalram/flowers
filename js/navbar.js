window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if(scrollY > 50) navbar.classList.add('scrolled');
        else if (scrollY < 50) navbar.classList.remove('scrolled');
    });

    if(scrollY > 50) navbar.classList.add('scrolled');
    else if (scrollY < 50) navbar.classList.remove('scrolled');
});