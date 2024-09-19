import Swiper from 'swiper'

function swiper() {
	new Swiper('.swiper', {
		slidesPerView: 1, // Количество видимых слайдов
		loop: true,
		spaceBetween: 50,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true, // Делаем точки кликабельными
		},
		breakpoints: {
			900: {
				slidesPerView: 2,
			}
		},
	})
}
export default swiper
