const toggleButton = document.querySelector('.list-toggle');
const menu = document.querySelector('ul');
const slides = document.querySelectorAll('.slide');
var currentSlide = 0;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function nextSlide() {
  slides[currentSlide].classList.remove('visible');
  currentSlide++;
  if (currentSlide == slides.length) {
    currentSlide = 0;
  }
  slides[currentSlide].classList.add('visible');
}

function previousSlide() {
  slides[currentSlide].classList.remove('visible');
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slides[currentSlide].classList.add('visible');
}

function toggleMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    toggleButton.innerHTML = '<a class="nav-toggle"><i class="fas fa-bars"></i></a>';
  } else {
    menu.classList.add('active');
    toggleButton.innerHTML = '<a class="nav-toggle"><i class="fas fa-window-close"></i></a>';
  }
}

function pauseSlide() {
  clearInterval(interval);
}

toggleButton.addEventListener('click', toggleMenu);
prevButton.addEventListener('click', previousSlide);
prevButton.addEventListener('click', pauseSlide);
nextButton.addEventListener('click', nextSlide);
nextButton.addEventListener('click', pauseSlide);
var interval = setInterval(nextSlide, 3000);
