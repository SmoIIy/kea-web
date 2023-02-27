
/* Scroll in Animation */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}); 


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* Hamburger Menu */

window.onload = function (){
    const menuBtn = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav');
    window.addEventListener('click', function(){
        menuBtn.classList.toggle('is-active')
        mobileMenu.classList.toggle('is-active')
    });
}
