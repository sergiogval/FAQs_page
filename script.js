const toggles = document.querySelectorAll('faq-toggle');


toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode["ClassList"].toggle('active');
    });
});