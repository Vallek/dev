export function menuPopup() {
	const page = document.querySelector('.page');
	const header = document.querySelector('.header');
	const input = header.querySelector('.popup-menu__input');
	const menuLink = header.querySelectorAll('.popup-menu__link');
	const firstLink = header.querySelector('.header__item:first-child');
	
	function scrollHeader() {
		let pageTop = page.getBoundingClientRect().top;
		if (pageTop < -600) {
			header.classList.add('header__menu_anim');
			firstLink.classList.remove('visually-hidden');
		}
		else {
			header.classList.remove('header__menu_anim');
			firstLink.classList.add('visually-hidden');
		}	
	}
	
	window.addEventListener('scroll', scrollHeader);
	window.addEventListener('DOMContentLoaded', scrollHeader);
	
	// Close menu on link click to reveal content
	menuLink.forEach((el) => {el.addEventListener('click', () => {
		input.checked = false;
	});});
	
	// Close when click outside
	document.addEventListener('click', (el) => {
		let target = el.target;
		if (!header.contains(target)) {
			input.checked = false;
		}
	});
}

