const toggle =document.getElementById('nav-toggler')
const navbar=document.getElementById('menu')

toggle.onclick=function(){
    toggle.classList.toggle('active_toggle')
    navbar.classList.toggle('active_toggle')
    if(menu.style.display==="block"){
        menu.style.display='none'
    }else{
        menu.style.display='block'
    }
}