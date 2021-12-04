console.log("Script Loaded!");

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function zetInFruitLa(fruit){
    console.log(fruit);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = 'oranje';
    fruitvak.appendChild(nieuwElement);
}

function zetInGroenteLa(groente){
    console.log(groente);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = groente;
    nieuwElement.className = 'groen';
    groentevak.appendChild(nieuwElement);
}