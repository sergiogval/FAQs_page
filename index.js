const toggles = document.querySelectorAll('faq-toggle');


toggles.forEach(Element => {
    Element.addEventListener('click', () => {
        Element.parentNode["ClassList"].toggle('active');
    });
});