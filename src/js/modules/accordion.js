function accordion() {
	const accordionHeaders = document.querySelectorAll('.accordion__header')

	accordionHeaders.forEach(header => {
		header.addEventListener('click', () => {
			const targetId = header.getAttribute('data-target')
			const content = document.getElementById(targetId)

			// Если контент уже открыт, закрываем его
			if (content.classList.contains('accordion__content_active')) {
				content.classList.remove('accordion__content_active')
			} else {
				// Закрываем все открытые контенты
				document.querySelectorAll('.accordion__content').forEach(item => {
					item.classList.remove('accordion__content_active')
				})

				// Открываем текущий контент
				content.classList.add('accordion__content_active')
			}
		})
	})
}

export default accordion;
