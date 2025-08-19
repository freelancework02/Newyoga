// Hamburger navigation for mobile
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');
toggle.addEventListener('click', function () {
    nav.classList.toggle('nav-open');
    toggle.classList.toggle('open');
    let expanded = toggle.getAttribute('aria-expanded') === "true";
    toggle.setAttribute('aria-expanded', !expanded);
});
// Close nav when link clicked (mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
    });
});
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
// Header background change on scroll
window.addEventListener('scroll', function () {
    const header = document.getElementById('topNav');
    if (window.scrollY > 60) {
        header.style.background = 'rgba(255,255,255,0.98)';
    } else {
        header.style.background = 'rgba(255,255,255,0.95)';
    }
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbyAZd3vWRBU4gY3RT2yWFbqWw6pAlEnyn7kClHW1ArUVZ_i3SUwPhVZypDIY1sdGVx22A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000); // Clear message after 3 seconds
            form.reset()
        }
        )
        .catch(error => console.error('Error!', error.message))
})


// Contact Form Acknowledgement
document.querySelector('.contact-form form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});


