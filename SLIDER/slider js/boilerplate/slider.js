/* variables and html elements */
const slides = document.querySelectorAll('.slider__item');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');




/* autoplay */
const auto = true
const intervalTime = 5000
let slideInterval;

/* functions */

const nextSlide = () => {
    let active = document.querySelector('.active');

    active.classList.remove('active');

    if (active.nextElementSibling) active = active.nextElementSibling;
    else active = slides[0];

    active.classList.add('active');
}

if (auto) {
    clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide, intervalTime);
}

const prevSlide = () => {
    let active = document.querySelector('.active');
    active.classList.remove('active');

    if (active.previousElementSibling) active = active.previousElementSibling;
    else active = slides[slides.length - 1];
    

    active.classList.add('active');
}

/* Eventlisteners */

prevBtn.addEventListener('click', () => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(prevSlide, intervalTime);
    }
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})