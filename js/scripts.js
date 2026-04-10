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

    // Fade-in on scroll
    const fadeEls = document.querySelectorAll('.exp-card, .project-card, .skill-card, .edu-card');
    const fadeObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                fadeObs.unobserve(e.target);
            }
        });
    }, { rootMargin: '0px 0px -50px 0px' });
    fadeEls.forEach(el => { el.classList.add('fade-up'); fadeObs.observe(el); });
});
