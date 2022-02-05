/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. 

L’esercizio richiede di fare un minimo di controlli sui dati inseriti dall’utente.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

const userKm = parseInt( prompt ('Ciao! Quanti chilometri devi percorrere?') );
console.log(userKm);

if ( isNaN(userKm) ){
    alert('Devi inserire i chilometri in numero, grazie!');
}

const userAge = parseInt( prompt('Quanti anni hai?') );
console.log(userAge);

if ( isNaN(userAge) ){
    alert('Devi inserire la tua età in numero, grazie!');
}



