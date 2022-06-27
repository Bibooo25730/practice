const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('#header  .header .nav-bar ul');
const header = document.querySelector('.header.container')
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active');
    console.log(ul)
    ul.classList.toggle('active');
})
// let id = setInterval(()=>{
    document.addEventListener('scroll',()=>{
        let scroll_postion = window.scrollY;
        if(scroll_postion > 250 ){
            header.style.backgroundColor = '#29323c';
        }else {
            header.style.backgroundColor = 'transparent';
            // clearInterval(id);
        }
    })
// },3000)
