function hamburger() {
	const hamburger = document.querySelector('.hamburger')
	const openHamburger = document.querySelector('.hamburger__icon_open')
	const closeHamburger = document.querySelector('.hamburger__icon_close')
	const body = document.querySelector('body')

	openHamburger.addEventListener('click', e => {
		hamburger.classList.add('hamburger__open');
		body.style.cssText = `overflow: hidden;`
	})

	closeHamburger.addEventListener('click', e => {
		hamburger.classList.remove('hamburger__open');
		body.style.cssText = `overflow: none;`
	})
}
export default hamburger
