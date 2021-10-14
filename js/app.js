const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}`;
            }
        });

        burger.classList.toggle('toggle');
        
    });
 
}

navSlide();

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 document.getElementById("moon").innerHTML=
   "Dark";