window.addEventListener('scroll', function reveal(){
    let reveal = document.querySelectorAll('.reveal');
    for(let i =0; i < reveal.length; i++){

        let windowheight = window.innerHeight;
        let revealtop = reveal[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveal[i].classList.add('adding');
        }
        else{
            reveal[i].classList.remove('adding');
        }
    }
})
