const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const backToTop = document.getElementById('backToTop');
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

// Hamburger Menu Functionality
hamburger.addEventListener('click', () => {
  sidebar.style.right = sidebar.style.right === '0px' ? '-300px' : '0px';
});

// Back-to-Top Button Visibility
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Smooth Scroll for Back-to-Top
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.btn, .nav-links a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Filter Functionality
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    productCards.forEach((card) => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
