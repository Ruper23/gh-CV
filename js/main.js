const geek = document.querySelector('#geekbrains');
const geekPopUp = document.querySelector('.course-geek');
const wayupJs = document.querySelector('#wayup-js');
const wuJsPopUp = document.querySelector('.course-wu-js');
const wayupFigma = document.querySelector('#wayup-figma');
const wuFigmaPopUp = document.querySelector('.course-wu-figma');
const rsschool = document.querySelector('#rsschool');
const rsschoolPopUp = document.querySelector('.course-rsschool')

geek.addEventListener('click', () => {
	geekPopUp.classList.toggle('active');
	wuJsPopUp.classList.remove('active');
	wuFigmaPopUp.classList.remove('active');
	rsschoolPopUp.classList.remove('active');

})
wayupJs.addEventListener('click', () => {
	wuJsPopUp.classList.toggle('active');
	geekPopUp.classList.remove('active');
	wuFigmaPopUp.classList.remove('active');
	rsschoolPopUp.classList.remove('active');

})
wayupFigma.addEventListener('click', () => {
	wuFigmaPopUp.classList.toggle('active');
	wuJsPopUp.classList.remove('active');
	geekPopUp.classList.remove('active');
	rsschoolPopUp.classList.remove('active');


})
rsschool.addEventListener('click', () => {
	rsschoolPopUp.classList.toggle('active');
	wuJsPopUp.classList.remove('active');
	geekPopUp.classList.remove('active');
	wuFigmaPopUp.classList.remove('active');

})
// burger menu
const burgerNavigation = document.querySelector('.burger-navigation')

let burgIcon = document.querySelector('.burger-menu-icon');
let burgMenu = document.querySelector('.burger-navigation');
if (burgIcon) {
	burgIcon.addEventListener("click", function (e) {
		burgMenu.classList.toggle('active');
		burgIcon.classList.toggle('active');

	})
}
burgerNavigation.addEventListener('click', e => {
	if (e.target) {
		burgMenu.classList.toggle('active');
		burgIcon.classList.toggle('active');
	}
	console.log(e.target)
})
