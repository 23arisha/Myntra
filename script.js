burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
navList= document.querySelector('.nav-list')
right= document.querySelector('.right')

burger.addEventListener('click', ()=>{
    right.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})

