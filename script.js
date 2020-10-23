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

    var cognome = inputCognome.value;
    cognomi.push(cognome);
    inputCognome.value = "";
    ordinaArray(cognome);
}

/* Ordino array */
function ordinaArray(cognome) {
    cognomi.sort();
    appendFunc(cognome);
}

function appendFunc(cognome) {
    var index = 1 + cognomi.indexOf(cognome);
    index = index.toString();
    msg.innerHTML = "Il tuo cognome è nella posizione numero<br>" + index + "<br>della lista.";
}