/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. 

L’esercizio richiede di fare un minimo di controlli sui dati inseriti dall’utente.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

// chiedo km da percorrere e verifico che abbia scritto in numero
const userKm = parseFloat( prompt ('Ciao! Quanti chilometri devi percorrere?') );
console.log(`Chilometri da percorre = ${userKm.toFixed(2)} km`);

if ( isNaN(userKm) ){
    alert('Devi inserire i chilometri in numero, grazie!');
}

// chiedo età e verifico che abbia scritto in numero
const userAge = parseInt( prompt('Quanti anni hai?') );

if ( isNaN(userAge) ){
    alert('Devi inserire la tua età in numero, grazie!');
}

if (userAge > 1) {
    console.log(`L'età del passeggero è di ${userAge} anni`);
} else{
    console.log(`L'età del passeggero è di ${userAge} anno`);
}

// Calcolo prezzo biglietto pieno oppure scontato
const fullTicketPrice = (userKm * 0.21);
// console.log(fullTicketPrice);

if (userAge < 18){
    let discountedTicket = ( (fullTicketPrice * 20) / 100 );
    console.log(`Prezzo biglietto scontato = ${discountedTicket.toFixed(2)} €`);

} else if (userAge > 65){
    let discountedTicket = ( (fullTicketPrice * 40) / 100 );
    console.log(`Prezzo biglietto scontato = ${discountedTicket.toFixed(2)} €`);

} else{
    console.log(`Prezzo biglietto = ${fullTicketPrice.toFixed(2)} €`);
}




