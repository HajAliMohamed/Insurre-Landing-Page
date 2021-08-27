const humburger = document.querySelector('.header__hamburger')
const dropBar = document.querySelector('.drop-bar')

humburger.addEventListener('click', ()=>{
    if(humburger.classList.contains('open')){
        humburger.classList.remove(('open'))
        dropBar.classList.remove(('open'))
        
    }else{
        humburger.classList.add(('open'))
        dropBar.classList.add(('open'))
    }
})