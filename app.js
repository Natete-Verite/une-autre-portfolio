const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});
nav_list.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 300) {
		header.style.backgroundColor = '#000 ';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});