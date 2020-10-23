/* Selettori */
const inputCognome = document.getElementById("cognome");
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
const lista = document.getElementById("lista");

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
    dichiaraPosizione(cognome);
}

function dichiaraPosizione(cognome) {
    var index = 1 + cognomi.indexOf(cognome);
    index = index.toString();
    msg.innerHTML = "Il tuo cognome è nella posizione numero<br>" + index + "<br>della lista:";
    stampaLista();
}

function stampaLista() {
    for (let i = 0; i < cognomi.length; i++) {
        const cognome = cognomi[i].toString();
        console.log(cognome);
        const listItem = document.createElement("li");
        listItem.innerHTML = cognome;
        lista.appendChild(listItem);
    }
}