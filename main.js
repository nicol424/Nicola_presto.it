// CATTURA ICONA NAVBAR
let fingerIcon = document.querySelector('#fingerIcon');

// CATTURA NAVBAR
let mainNavbar = document.querySelector('#mainNavbar');

// CATTURA LOGHI NAVBAR
let brownLogo = document.querySelector('#brownLogo');
let beigeLogo = document.querySelector('#beigeLogo');

// CATTURA LINK NAVBAR
let navLinks = document.querySelectorAll('.nav-link');

// CATTURA DEGLI SPAN CON NUMERO INCREMENTO
let firstSpan = document.querySelector('#firstSpan');
let secondSpan = document.querySelector('#secondSpan');
let thirdSpan = document.querySelector('#thirdSpan');

// CATTURA DEL H2
let h2Obs = document.querySelector('#h2Obs');

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
// CHIAMATA ASINCRONA - setInterval

function createInterval(finalNumber, NumberSpan){
    // CONTATORE
    let counter = 0;
    
    let interval = setInterval(()=>{
        
        
        // Voglio che il counter si fermi a 100
        if (counter > finalNumber){

            counter++
            NumberSpan.innerHTML = counter;

        } else {
            clearInterval(interval);
        }
    }, 1);
}

// INTERSECTION OBSERVER
// Oggetto precostruito di JavaScript

// VARIABILE D'APPOGGIO
let intersectionConfirm = true;

let observer = new IntersectionObserver(

    (entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                createInterval(1000, firstSpan);
                createInterval(1500, secondSpan);
                createInterval(2000, thirdSpan);

                intersectionConfirm = false;
            }
        });
    }
)
observer.observe(h2Obs);

// SEZIONE MOUSE ENTER
let trucks = document.querySelectorAll('.fa-truck');

let columns = document.querySelectorAll('.colCustom');

columns.forEach((colonna, i)=>{
    // VARIABILE D'APPOGGIO
    let columnConfirm = false;

    colonna.addEventListener('mouseenter', ()=>{

        if (columnConfirm == false){
            trucks[i].classList.remove('text-accent');
            trucks[i].classList.add('text-blackCustom');
        } else {
            trucks[i].classList.remove('text-accent');
            trucks[i].classList.add('text-blackCustom');
            
        }
        
    }); 

    colonna.addEventListener('mouseleave', ()=>{
        if (columnConfirm == false) {
            trucks[i].classList.remove('text-blackCustom');
            trucks[i].classList.add('text-accent');
            columnConfirm = true;
        } else {
            trucks[i].classList.add('text-accent');
            trucks[i].classList.remove('text-blackCustom');
            columnConfirm = false;
        }
        

    });
});