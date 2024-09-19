function scrolling() {
  const links = document.querySelectorAll('[href^="#"]'); // Все якорные ссылки

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetElement = document.querySelector(this.hash); // Элемент, к которому скроллим
      if (targetElement) {
        // Плавный скролл к элементу
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY, // Координаты элемента
          behavior: 'smooth' // Встроенный плавный скролл
        });

        // Обновляем hash в URL после завершения скроллинга
        setTimeout(() => {
          history.pushState(null, null, this.hash); // Изменение URL без перезагрузки
        }, 500); // Таймаут для того, чтобы дождаться окончания анимации
      }
    });
  });
}

export default scrolling;
