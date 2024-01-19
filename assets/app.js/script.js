ScrollReveal({reset:true}); 
ScrollReveal().reveal('.boasvindas',{ duration: 3000 });
ScrollReveal().reveal('.linguagens', { rotate: {x: 0, y: 50, z:0}, duration:3000});
ScrollReveal().reveal('.projetos', { rotate: {x: 0, y:50, z:0}, duration:4000});
ScrollReveal().reveal('.curriculos-partes', { rotate: {x: 0, y: 50, z:0}, duration:3000});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src="assets/img/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src="assets/img/menu-close.svg";
    }
}

