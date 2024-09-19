function activeMenuHeader() {
	const menuItems = document.querySelectorAll('.header .menu__link')

	menuItems.forEach(menuItem => {
		menuItem.addEventListener('click', e => {
			menuItems.forEach(item => {
				item.classList.remove('menu__link_active')
			})
			e.target.classList.add('menu__link_active')
		})
	})
}
export default activeMenuHeader
