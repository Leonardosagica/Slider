/* variables */
const slides = document.querySelectorAll('.slider__item');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
// auto for slide display images
const auto = true;
const intervalTime = 5000;
let slideInterval;

/* script para avançar a imagem */

const nextSlide = () => {
	/* buscar a classe */
	let active = document.querySelector('.active');
	/* retirada da classe active */
	active.classList.remove('active');

	if (active.nextElementSibling) {
		active = active.nextElementSibling;
	} else {
		active = slides[0];
	}
	active.classList.add('active');
};

/* script para mostrar a imagem anterior */
const prevSlide = () => {
	/* buscar a classe */
	let active = document.querySelector('.active');
	/* retirada da classe active */
	active.classList.remove('active');

	if (active.previousElementSibling) {
		active = active.previousElementSibling;
	} else {
		active = slides[slides.length - 1];
	}
	active.classList.add('active');
};

/* event listeners */
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
});

/* criar para correr em modo automático */
if (auto) {
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide, intervalTime);
}
