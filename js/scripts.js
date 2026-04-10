// Scroll spy: highlight active nav link as user scrolls
window.addEventListener('DOMContentLoaded', () => {
    const sections  = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('#topNav .tn-links a, #mobileMenu a');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { rootMargin: '-15% 0px -70% 0px' });

    sections.forEach(s => observer.observe(s));
});
