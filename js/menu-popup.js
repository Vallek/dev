const header = document.querySelector('.page');
const headerMenu = document.querySelector('.header');
const menuButton = document.querySelector('.popup-menu__button');
const menuLink = document.querySelectorAll('.popup-menu__link');
const firstLink = document.querySelector('.header__item:first-child');

function scrollHeader() {
	let pageTop = header.getBoundingClientRect().top;
	if (pageTop < -600) {
		headerMenu.classList.add('header__menu_anim');
		firstLink.classList.remove('visually-hidden');
	}
	else {
		headerMenu.classList.remove('header__menu_anim');
		firstLink.classList.add('visually-hidden');
	}	
}

function closeMenu() {
	menuButton.click();
}

window.addEventListener('scroll', scrollHeader);
window.addEventListener('DOMContentLoaded', scrollHeader);
menuLink.forEach((el) => {el.addEventListener('click', closeMenu);});