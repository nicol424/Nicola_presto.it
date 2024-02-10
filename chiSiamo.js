// CATTURA ICONA NAVBAR
let fingerIcon = document.querySelector('#fingerIcon');

// CATTURA NAVBAR
let mainNavbar = document.querySelector('#mainNavbar');

// CATTURA LOGHI NAVBAR
let brownLogo = document.querySelector('#brownLogo');
let beigeLogo = document.querySelector('#beigeLogo');

// CATTURA LINK NAVBAR
let navLinks = document.querySelectorAll('.nav-link');
// CATTURA PAPA' DELLLE CARDS
let cardsWrapper = document.querySelector('#cardsWrapper');

// VARIABILE D'APPOGGIO PER L'ICONA NAVBAR

let confirm = false;

fingerIcon.addEventListener('click', ()=>{

    if (confirm == false) {

        fingerIcon.style.transform = 'rotate(180deg)';
        confirm = true;

    } else {

        fingerIcon.style.transform = 'rotate(0deg)';
        confirm = false;
    }
    
});

// VARIABILE D'APPOGGIO ALLO SCROLL

window.addEventListener('scroll' ,()=>{

    if (window.scrollY > 0){
        mainNavbar.style.backgroundColor = 'var(--accent)';
        beigeLogo.classList.remove('d-none');
        brownLogo.classList.add('d-none');
        fingerIcon.classList.remove('text-accent');

        // CAMBIAMO IL COLORE DEI LINK
            navLinks.forEach((link)=>{
                link.classList.add('text-primaryCustom');
            });

    } else {
        mainNavbar.style.backgroundColor = 'transparent';
        beigeLogo.classList.add('d-none');
        brownLogo.classList.remove('d-none');
        fingerIcon.classList.add('text-primaryCustom');

        // CAMBIAMO IL COLORE DEI LINK
            navLinks.forEach((link)=>{
                link.classList.remove('text-primaryCustom');
            });
    }
    
});
// chi siamo evento
let opener = document.querySelector('.opener');

let movedDivs = document.querySelectorAll('.moved');

opener.addEventListener('click', ()=> {

    movedDivs.forEach((moved, i)=>{

        let angle = (360 * i) / movedDivs.length;
        moved.style.transform = `rotate(${angle}deg) translate(200px)`;
    })
});