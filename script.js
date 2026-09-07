let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dotsContainer');
const previousButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

function buildDots() {
  dotsContainer.innerHTML = '';
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(index));
    dotsContainer.appendChild(dot);
  });
}

function showSlide(index) {
  if (slides.length === 0) return;

  slides.forEach(slide => slide.classList.remove('active'));
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));

  slideIndex = (index + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
  if (dots[slideIndex]) dots[slideIndex].classList.add('active');
}

function changeSlide(step) {
  showSlide(slideIndex + step);
}

function autoAdvance() {
  changeSlide(1);
  window.setTimeout(autoAdvance, 4000);
}

previousButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));

if (slides.length > 0) {
  buildDots();
  showSlide(0);
  window.setTimeout(autoAdvance, 4000);
}
