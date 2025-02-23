document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger-menu');

    hamburger.addEventListener('click', function() {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});