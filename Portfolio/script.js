// Dark / Light mode toggle
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.getElementById('tIcon').textContent  = isDark ? '🌙' : '☀️';
    document.getElementById('tLabel').textContent = isDark ? 'Dark' : 'Light';
  }
  
  // Burger menu toggle
  function toggleMenu() {
    const nav = document.getElementById('navLinks');
    const burger = document.getElementById('burger');
    nav.classList.toggle('open');
    burger.classList.toggle('open');
  }
  
  // Close menu when a link is clicked
  function closeMenu() {
    const nav = document.getElementById('navLinks');
    const burger = document.getElementById('burger');
    nav.classList.remove('open');
    burger.classList.remove('open');
  }
  
  // Scroll reveal animation
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('on');
    }),
    { threshold: 0.08 }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  
  // Contact form button
  function sendMessage() {
    alert("Thanks for reaching out! I'll reply within 24 hours. 😊");
  }
 // Modal
function openGymModal() {
  document.getElementById('gymModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeGymModal() {
  document.getElementById('gymModal').classList.remove('open');
  document.body.style.overflow = '';
}
function handleOverlayClick(e) {
  if (e.target === document.getElementById('gymModal')) closeGymModal();
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeGymModal(); closeLightbox(); }
});

// Lightbox
function openLightbox(src) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}
// Auto-slide for attendance banner
const attendSlider = document.getElementById('attendSlider');
let attendSlide = false;
setInterval(() => {
  attendSlide = !attendSlide;
  attendSlider.classList.toggle('slide', attendSlide);
}, 3000);
function openAttendModal() {
  document.getElementById('attendModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeAttendModal() {
  document.getElementById('attendModal').classList.remove('open');
  document.body.style.overflow = '';
}
function handleAttendOverlayClick(e) {
  if (e.target === document.getElementById('attendModal')) closeAttendModal();
}
function sendMessage() {
  const name    = document.getElementById('senderName').value.trim();
  const email   = document.getElementById('senderEmail').value.trim();
  const subject = document.getElementById('senderSubject').value.trim();
  const message = document.getElementById('senderMessage').value.trim();

  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields before sending.');
    return;
  }

  const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
  window.location.href = `mailto:danicaabellar9@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
}