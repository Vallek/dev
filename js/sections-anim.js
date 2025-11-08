'use strict';

const itemPop = document.querySelector('.sites__item_pop');
const itemLeft = document.querySelector('.sites__item_left');
const itemRight = document.querySelector('.sites__item_right');
const elArr = [itemLeft, itemRight];

const elementVisible = 250;

elArr.forEach((el) => {
	function scrollAnim() {
		let elementTop = itemPop.getBoundingClientRect().top;
		if (elementTop < windowHeight - elementVisible) {
			el.classList.add('slide-out');
			setTimeout(() => {
				el.classList.remove('slide-slow');
			}, 100);
		}
	}
	window.addEventListener('scroll', scrollAnim);
	scrollAnim();
});
