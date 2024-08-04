//=================Swipper JS

var swiper = new Swiper(".home", {
	spaceBetween: 30,
	centeredSlides: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// ============================== hapja menuse

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}

// click navbar menu to go to the section

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
}

// Get the element you want to make draggable
const draggableElement = document.getElementById('draggableElement');

//Add event listeners for mouse events
draggableElement.addEventListener('mousedown', function() {
	draggableElement.classList.add('grabbing');
});

draggableElement.addEventListener('mouseup', function() {
	draggableElement.classList.add('grabbing');
});