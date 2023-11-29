// handle Tablet Menu
const menuBtn = document.querySelector('#hamburger-menu')
const menuDisplay = document.querySelector('.navbar-menu')
let header1 = document.querySelector('.header1')

menuBtn.addEventListener('click', (e) => {
    menuDisplay.classList.toggle('active')
    e.preventDefault()
})

document.addEventListener('click', (e) => {
    if(!menuBtn.contains(e.target) && !menuDisplay.contains(e.target)){
        menuDisplay.classList.remove('active')
        e.preventDefault()
    }
})

// Handle card carousel
const spans = document.getElementsByClassName('spans')
const menu = document.getElementsByClassName('menu-card')
const menu_page = Math.ceil(menu.length/4)
let l = 0
let movePer = 0
let maxMove = 0

// Match media
const window_view = window.matchMedia('(min-width: 769px)')
const tablet_view = window.matchMedia('(max-width: 768px)')
const mobile_view = window.matchMedia('(max-width: 450px)')

function testScreen(){
	if(mobile_view.matches){
		movePer = 105
		maxMove = 600
	}else if(tablet_view.matches){
		movePer = 50.36
		maxMove = 240
	}else {
		movePer = 25.34
		maxMove = 60
	}
	
	l = 0
	for(let i of menu){
		i.style.left = `-${l}%`
	}

}
testScreen()
document.body.onresize = testScreen

function next(){
	l = l + movePer
	for(let i of menu){
		if(l > maxMove){l = 0}
		i.style.left = `-${l}%`
	}
}

function prev(){
	l = l - movePer
	if(l <= 0){l = 0}
	for(let i of menu){
		if(menu_page > 1){
			i.style.left = `-${l}%`
		}
	}
	
}

spans[1].onclick = () => {next()}
spans[0].onclick = () => {prev()}

function startAutoSlide() {
	autoSlide = setInterval(()=> {
		next()
	}, 3000)
}

function stopAutoSlide() {
	clearInterval(autoSlide)
}


window.onload = startAutoSlide()

for(let i of menu){
	i.addEventListener('mouseover', stopAutoSlide)
	i.addEventListener('mouseout', startAutoSlide)
	spans[1].addEventListener('mouseover', stopAutoSlide)
	spans[1].addEventListener('mouseout', startAutoSlide)
	spans[0].addEventListener('mouseover', stopAutoSlide)
	spans[0].addEventListener('mouseout', startAutoSlide)
}

// Product Handler

// Product selengkapnya handler
const productMore = document.querySelector('.product-more') 
const morebtn = document.querySelector('#more-btn')
const productRow = document.querySelector('#product-row')
const backBtn = document.createElement('a')
backBtn.setAttribute('href', '#')
backBtn.innerHTML = 'Tutup'

backBtn.addEventListener('click', (e) => {
	e.preventDefault()
	productRow.style.overflow = 'hidden';
	productRow.style.height = '415px';
	backBtn.remove()
	productMore.appendChild(morebtn)
})

morebtn.addEventListener('click', (e) => {
	e.preventDefault()
	productRow.style.overflow = 'none';
	productRow.style.height = 'auto';
	morebtn.remove()
	productMore.appendChild(backBtn)
})