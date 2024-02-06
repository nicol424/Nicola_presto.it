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
// FETCH

fetch('./annunci.json').then((response)=> response.json()).then((data)=>{

    let categoryWrapper = document.querySelector('#categoryWrapper');
// MAPPO PER AVERE UN ARRAY CLONE PER LE CATEGORIE
    function setCategoriesFilter(){

        let categories = data.map((annuncio)=> annuncio.category);

    // VOGLIO LE CATEGORIE CHE NON SI RIPETONO
    let uniqueCategories = [];

    categories.forEach((category)=>{
        
        if (!uniqueCategories.includes(category)) {
            uniqueCategories.push(category);
        }
    })
    // console.log(uniqueCategories);
    // PARTENDO DA UNIQUE MI CREO I RADIO BUTTON IN DINAMICA
    uniqueCategories.forEach((category)=>{

        let div = document.createElement('div');

        div.classList.add('form-check');

        div.innerHTML=`
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
            <label class="form-check-label"  for="${category}">
            ${category}
        </label>
        `;
        categoryWrapper.appendChild(div);

    })
}
    
    setCategoriesFilter();    
    
    // FUNZIONE MOSTRA CARDS
    function showCards(array){
        cardsWrapper.innerHTML = ``;

        array.forEach((annuncio, i)=>{

            let div = document.createElement('div');

            div.classList.add("col-12" ,"col-lg-3" ,"d-flex", "justify-content-center");

            div.innerHTML = `

                <div class="col-12", "col-lg-3", "d-flex", "justify-content-center">

                <div class="announcement-card">
                
                <div className="card-head">
                    <img src="https://picsum.photos/${200 + i}" alt="imgCustom" class="imgCard">
                </div>
                
                    <p class="h3">${annuncio.name}</p>
                    <p class="h3">${annuncio.category}</p>
                    <p class="h3">${annuncio.price} €</p>
                </div>
                </div>
            `;
            cardsWrapper.appendChild(div);
        })
    }
    showCards(data);

    // EVENTO CATEGORIA
    function filterByCategory(categoria){
        if (categoria != 'All') {
            
            let filtered = data.filter((annuncio)=>annuncio.category == categoria);

            showCards(filtered);

        } else {
            showCards(data);
        }
        
    }

;

// CATTURA RADIO BUTTON
let checkInputs = document.querySelectorAll('.form-check-input');

checkInputs.forEach((checkInput)=>{

    checkInput.addEventListener('click', ()=>{

        filterByCategory(checkInput.id);
    });

});
// cattura input range
let priceInput = document.querySelector('#priceInput');

let incrementNumber = document.querySelector('#incrementNumber');

function setPriceInput(){
    
    let prices = data.map((annuncio)=> Number(annuncio.price));

    // console.log(prices);
    // RECUPERO IL PREZZO MAGGIORE
    let maxPrice = Math.ceil(Math.max(...prices));
    // console.log(maxPrice);

    priceInput.max = maxPrice;

    priceInput.value = maxPrice;

    incrementNumber.innerHTML = maxPrice;
}

setPriceInput();

function filterByPrice(prezzo){
    
    // VOGLIO UN ARRAY CON SOLO I PRODOTTI CON PREZZI INFERIORI

    let filtered = data.filter((annuncio)=> Number(annuncio.price <= prezzo));

    showCards(filtered);
}

priceInput.addEventListener('input', ()=>{

    filterByPrice(Number(priceInput.value));

    incrementNumber.innerHTML = priceInput.value;

});

filterByPrice(500);


})

// FINE FETCH


