"use strict";

/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import { MousePRLX } from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import { register } from 'swiper/element/bundle';
import { BaseHelpers } from './helpers/base-helpers'
import activeMenuHeader from './modules/active-menu-header'
import scrolling from './modules/scrolling'
import hamburger from './modules/hamburger'
import tabs from './modules/tabs'
import accordion from './modules/accordion'
import swiper from './modules/swiper'

window.addEventListener('DOMContentLoaded', () => {
	register();
	activeMenuHeader();
	scrolling();
	hamburger();
	tabs();
	accordion();
	swiper();

	
})

BaseHelpers.checkWebpSupport()
BaseHelpers.calcScrollbarWidth()
BaseHelpers.addTouchClass()
BaseHelpers.addLoadedClass()
BaseHelpers.headerFixed()

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();
