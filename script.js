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
    /* Creo un'array con i cognomi in lowercase e poi la ordino */
    var cognomiLower = [];
    var index = 0;
    while (index < cognomi.length) {
        let lowerCognome = cognomi[index].toLowerCase();
        cognomiLower.push(lowerCognome);

        index++;
    }
    cognomiLower.sort();
    console.log(cognome + cognomiLower)
    appendFunc(cognome, cognomiLower);
}

function appendFunc(cognome, cognomiLower) {
    var index = 1 + cognomiLower.indexOf(cognome.toLowerCase());
    index = index.toString();
    msg.innerHTML = "Il tuo cognome è nella posizione numero<br>" + index + "<br>della lista:";
    stampaLista(cognomiLower);
}

function stampaLista(cognomiLower) {
    /* Riconverto i cognomi in forma capitalized e stampo la lista */
    lista.innerHTML = "";
    for (let i = 0; i < cognomiLower.length; i++) {
        var cognome = cognomiLower[i].toString();
        /* converto il cognome a capitalized */
        cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1);
        const listItem = document.createElement("li");
        listItem.innerHTML = cognome;
        lista.appendChild(listItem);
    }
}