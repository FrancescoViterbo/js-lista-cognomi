/* Selettori */
const inputCognome = document.getElementById("cognome");
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

/* Array precompilata */
var cognomi = ["Bianchi", "Rossi", "Verdi", "Viterbo", "Costanzo", "Cosentino"];

/* Prendo l'imput e lo inserisco in array */
btn.addEventListener("click", inserisciCognome);

function inserisciCognome(event) {
    event.preventDefault();

    cognomi.push(inputCognome.value);
    inputCognome.value = "";
    ordinaArray();
}

/* Ordino array */
function ordinaArray() {
    cognomi.sort();
    appendFunc();
}

function appendFunc() {
    
    msg.appendChild()
}