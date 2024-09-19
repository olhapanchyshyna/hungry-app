function tabs() {
	const tabButtons = document.querySelectorAll('.tabs__button')
	const tabPanes = document.querySelectorAll('.tabs__pane')

	tabButtons.forEach(button => {
		button.addEventListener('click', () => {
			const tabId = button.getAttribute('data-tab')

			// Удаляем классы "active" у всех кнопок и контентов
			tabButtons.forEach(btn => btn.classList.remove('tabs__button_active'))
			tabPanes.forEach(pane => pane.classList.remove('tabs__pane_active'))

			// Добавляем классы "active" на выбранный таб и контент
			button.classList.add('tabs__button_active')
			document.getElementById(`tab-${tabId}`).classList.add('tabs__pane_active')
		})
	})
}

export default tabs
