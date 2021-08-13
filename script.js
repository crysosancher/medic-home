burger=document.querySelector('.burger')
nav=document.querySelector('.nav')
rnav=document.querySelector('.rnav')

burger.addEventListener('click',()=>{
	nav.classList.toggle('h-nav-resp');
	rnav.classList.toggle('v-nav-resp');

})