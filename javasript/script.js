var acc=document.getElementsByClassName('accordion');
var i;
var len = acc.length;
for(i=0;i<len;i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle('active');
        var panel=this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
}

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');
home =  document.querySelector('.home');

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('vclassresp');
    home.classList.toggle('vclassresp');
    navbar.classList.toggle('h-nav');
})