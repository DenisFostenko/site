const menu = document.querySelector('.header_list')
const menuBtn = document.querySelector('.menu_icon')


const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', ()=>{
		menu.classList.toggle('activetwo')
		menuBtn.classList.toggle('activetwo')
		body.classList.toggle('lock')
	})
}