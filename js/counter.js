// donation tæller
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
counter.innerText = '0';

const updateCounter = () => {
const target = +counter.getAttribute('data-target');

const c = +counter.innerText;

const increment = target / 1000;

if(c < target) {
    counter.innerText = c + increment;
    setTimeout(updateCounter, 1);

} else {
    counter.innerText = target;
}

};

updateCounter();

});



// click on event menu til kryds

$(".menu-icon-menu").click(function(){
    $(this).toggleClass("minus")  ; 
   })