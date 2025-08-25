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



const reviews = [
  { name: "Priyanka Gawande", image: "https://randomuser.me/api/portraits/women/44.jpg", date: "2 months ago", text: "As I completed my 500 hours YTTC program it was a wonderful experience with the school and the ambience what I felt personally." },
  { name: "Rahul Khanna", image: "https://randomuser.me/api/portraits/men/23.jpg", date: "1 month ago", text: "Transformative yoga classes in a peaceful atmosphere. Deepak is a fantastic teacher." },
  { name: "Laura Davis", image: "https://randomuser.me/api/portraits/women/92.jpg", date: "3 weeks ago", text: "The meditation and mindfulness sessions gave me tools I’ll carry for life." },
  { name: "Sophia Martin", image: "https://randomuser.me/api/portraits/women/39.jpg", date: "1 week ago", text: "Joining Aadi Yoga Center has been one of the best decisions of my life. The classes are well-structured and supportive." },
  { name: "Marcus Chen", image: "https://randomuser.me/api/portraits/men/56.jpg", date: "4 weeks ago", text: "Highly recommended! The instructors are knowledgeable and caring." },
  { name: "Priya Sharma", image: "https://randomuser.me/api/portraits/women/28.jpg", date: "1 month ago", text: "A truly transformative experience. I learned so much about yoga and wellness." },
  { name: "Michael Lee", image: "https://randomuser.me/api/portraits/men/30.jpg", date: "2 months ago", text: "Excellent facilities and warm community. Perfect for all skill levels." },
  { name: "Emma Wilson", image: "https://randomuser.me/api/portraits/women/15.jpg", date: "3 months ago", text: "The yoga therapy sessions helped me heal and regain strength." },
  // Add more up to 20 reviews as needed...
];

let current = 0;

const starSVG = `<svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6 text-[#d4af37] mr-1"><polygon points="9.9,1.1 7.1,6.6 1.2,7.4 5.6,11.5 4.5,17.3 9.9,14.3 15.2,17.3 14.1,11.5 18.4,7.4 12.7,6.6"/></svg>`;

function showReview(index) {
  const r = reviews[index];
  document.getElementById('carousel-slides').innerHTML = `
    <div class="flex items-center mb-4">
      <img src="${r.image}" alt="Reviewer" class="h-14 w-14 rounded-full border-4 border-[#f4a261] mr-4 object-cover shadow-md" />
      <div>
        <h4 class="text-xl font-semibold text-[#2c5530]">${r.name}</h4>
        <p class="text-xs text-[#7f8c8d]">${r.date}</p>
      </div>
    </div>
    <div class="flex mb-4">${starSVG.repeat(5)}</div>
    <p class="text-[#2c3e50] text-lg italic leading-relaxed max-w-xl mx-auto">
      "${r.text}"
    </p>
  `;
}

function prevReview() {
  current = (current - 1 + reviews.length) % reviews.length;
  showReview(current);
}

function nextReview() {
  current = (current + 1) % reviews.length;
  showReview(current);
}

// Initial display
showReview(current);

// Auto slide every 5 seconds with pause on hover
let autoSlide = setInterval(nextReview, 5000);
const carouselContainer = document.getElementById('review-carousel');
carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
carouselContainer.addEventListener('mouseleave', () => autoSlide = setInterval(nextReview, 5000));