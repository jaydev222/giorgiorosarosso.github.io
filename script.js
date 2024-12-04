document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        const target = e.target.getAttribute('href');
        if (target.startsWith('#') || target === 'index.html') {
            e.preventDefault();
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
