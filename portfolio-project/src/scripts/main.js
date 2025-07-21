document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.textContent = '☰';
      }
    });
  });

  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  const submitBtn = document.getElementById('submit-btn');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('[name="name"]').value.trim();
    const email = contactForm.querySelector('[name="email"]').value.trim();
    const message = contactForm.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = '#e63946';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Simulate form submission (replace with actual backend API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      formMessage.textContent = 'Message sent successfully! Thank you!';
      formMessage.style.color = '#2a7ae2';
      contactForm.reset();
    } catch (error) {
      formMessage.textContent = 'Error sending message. Please try again.';
      formMessage.style.color = '#e63946';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
});