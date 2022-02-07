/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L’esercizio richiede di fare un minimo di controlli sui dati inseriti dall’utente.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/


// chiedo km da percorrere, verifico che abbia scritto in numero e stampo su console e html
let userKm = parseFloat( prompt ('Ciao! Quanti chilometri devi percorrere?') );
console.log(`Chilometri da percorre = ${userKm.toFixed(2)} km`);

if ( isNaN(userKm) ){
    alert('Devi inserire i chilometri in numero, grazie!');
}

const HTMLkm = document.getElementById('km');

HTMLkm.innerHTML += ` ${userKm.toFixed(2)} Km`;


// chiedo età, verifico che abbia scritto in numero e stampo su console e html
const userAge = parseInt( prompt('Quanti anni hai?') );

if ( isNaN(userAge) ){
    alert('Devi inserire la tua età in numero, grazie!');
}

const HTMLage = document.getElementById('age')

if (userAge > 1) {
    console.log(`L'età del passeggero è di ${userAge} anni`);

    HTMLage.innerHTML += ` ${userAge} anni`;
} else{
    console.log(`L'età del passeggero è di ${userAge} anno`);

    HTMLage.innerHTML += ` ${userAge} anno`;
}


// Calcolo prezzo biglietto pieno oppure scontato e stampo su console e html
const fullTicketPrice = (userKm * 0.21);

let HTMLticketPrice = document.getElementById('ticket-price');

if (userAge < 18){
    let discountedTicket = ( (fullTicketPrice * 20) / 100 );
    console.log(`Prezzo biglietto scontato = ${discountedTicket.toFixed(2)} €`);

    HTMLticketPrice.innerHTML += ` ${discountedTicket.toFixed(2)} €`;

} else if (userAge > 65){
    discountedTicket = ( (fullTicketPrice * 40) / 100 );
    console.log(`Prezzo biglietto scontato = ${discountedTicket.toFixed(2)} €`);

    HTMLticketPrice.innerHTML += ` ${discountedTicket.toFixed(2)} €`;

} else{
    console.log(`Prezzo biglietto = ${fullTicketPrice.toFixed(2)} €`);

    HTMLticketPrice.innerHTML += ` ${fullTicketPrice.toFixed(2)} €`
}






