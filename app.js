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

let HTMLkm = document.getElementById('km');

let errore = false;

if ( isNaN(userKm) ){
    alert('Devi inserire i chilometri in numero, grazie!');

    errore = true;
    console.log(errore)

    HTMLkm.innerHTML += ` --> Errore - Devi inserire i chilometri in numero!`;
}

// Se ha inserito correttamente i chilometri
if(errore === false){
    console.log(errore)

    HTMLkm.innerHTML += ` ${userKm.toFixed(2)} Km`;

    // chiedo età, verifico che abbia scritto in numero e stampo su console e html
    let userAge = parseInt( prompt('Quanti anni hai?') );
    
    if ( isNaN(userAge) ){
        alert('Devi inserire la tua età in numero, grazie!');
        errore = true;

        let HTMLage = document.getElementById('age')

        HTMLage.innerHTML += ` --> Errore - Devi inserire l'età in numero!`;

    }

    if(errore === false) {

        let HTMLage = document.getElementById('age')
        
        if (userAge > 1) {
            console.log(`L'età del passeggero è di ${userAge} anni`);
        
            HTMLage.innerHTML += ` ${userAge} anni`;
    
        } else{
            console.log(`L'età del passeggero è di ${userAge} anno`);
        
            HTMLage.innerHTML += ` ${userAge} anno`;
        }
        
        
        // Calcolo prezzo biglietto pieno oppure scontato e stampo su html
        let fullTicketPrice = (userKm * 0.21);
        
        let discount = 0;
        
        let HTMLdiscount = document.getElementById('discount');
        
        let HTMLticketPrice = document.getElementById('ticket-price');
        
        
        if (userAge < 18){
            discount = ( (fullTicketPrice * 20) / 100 );
        
            let discountedTicket = fullTicketPrice - discount;
        
            HTMLdiscount.innerHTML += ` ${discount.toFixed(2)} &euro;`;
        
            HTMLticketPrice.innerHTML += ` ${discountedTicket.toFixed(2)} &euro;`;
            
        
        } else if (userAge > 65){
            discount = ( (fullTicketPrice * 40) / 100 );
        
            discountedTicket = fullTicketPrice - discount;
        
            HTMLdiscount.innerHTML += ` ${discount.toFixed(2)} &euro;`;
        
            HTMLticketPrice.innerHTML += ` ${discountedTicket.toFixed(2)} &euro;`;
        
        } else{
        
            HTMLdiscount.innerHTML += ` ${discount} &euro;`;
        
            HTMLticketPrice.innerHTML += ` ${fullTicketPrice.toFixed(2)} &euro;`;
        
        }
    }
    
}



