let menu = document.getElementById('menu');
let dropDown = document.getElementById('drop-down');
let body = document.getElementsByTagName('body');
menu.addEventListener('click', function() {
    dropDown.classList.add('drop-down-visible');
});
dropDown.addEventListener('click', function() {
    dropDown.classList.remove('drop-down-visible');
})

let getPosition = document.getElementById('get-position').offsetTop;
let anchor = document.getElementById('arrow');
document.addEventListener("scroll", function() {
    if(window.pageYOffset >= getPosition) {
        anchor.classList.add('arrow-visible');
    }else {
        anchor.classList.remove('arrow-visible');
    }
});

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
    
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
    
            window.location.hash = hash;
        });
        } 
    });
});