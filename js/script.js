// console.log('js ok');

//Recupero Submit e Annulla
const submitBtn = document.querySelector('input[type="submit"]');
// console.log('Variabile con il submit: ', submitBtn);

const resetBtn = document.querySelector('button[type="reset"]');
// console.log('Variabile con il reset: ', resetBtn);

// Variabile per il prezzo del biglietto
let price;

// Recupero le Info
// Info degli input
const userName = document.querySelector('input[name="userName"]');
const userKm = document.querySelector('input[name="userKm"]');
const userDiscount = document.querySelector('select[name="userDiscount"]');

// Info per l'output
const ticketUsername = document.getElementById('ticket-username');
const ticketSale = document.getElementById('ticket-sale');
const ticketTrain = document.getElementById('ticket-train');
const ticketCp = document.getElementById('ticket-cp');
const ticketPrice = document.getElementById('ticket-price');

// - Attendi che l'utente schiacci il pulsante "Genera"
submitBtn.addEventListener('click', function () {

    //Recupero valore Info
    const userNameValue = userName.value;
    // console.log('Variabile con lo username: ', userName);

    const userKmValue = parseFloat(userKm.value);
    // console.log('Variabile con i km necessari: ', userKm);

    const userDiscountValue = parseFloat(userDiscount.value);
    //console.log('Variabile con lo sconto: ', userDiscount);

    // SE è presente il nome
    if (userNameValue != '') {
        //- SE i km sono presenti e sono un numero
        if (userKmValue != '' && !isNaN(userKmValue) && userKmValue > 0) {
            //Controllo male intenzionati
            if (userDiscountValue == 0 || userDiscountValue == 0.2 || userDiscountValue == 0.4) {
                //- Calcola il prezzo del biglietto
                price = 0.21 * userKmValue;
                //- SE l'utente è minorenne (userAge < 18anni) applica uno sconto del 20%
                //- SE l'utente ha più di 65 anni (userAge > 65anni) applica uno sconto del 40%
                price -= price * userDiscountValue;
                //- Arrotonda prezzo a 2 decimal
                const textPrice = price.toFixed(2);
                // console.log('Prezzo del biglietto: ', textPrice);

                ticketUsername.innerHTML = userNameValue;

                if (userDiscountValue == 0) {
                    ticketSale.innerHTML = 'Biglietto Standard';
                } else {
                    ticketSale.innerHTML = 'Biglietto Ridotto';
                }

                ticketTrain.innerHTML = Math.floor(Math.random() * 10 + 1);

                ticketCp.innerHTML = Math.floor(Math.random() * 100000 + 1);

                ticketPrice.innerHTML = textPrice + '&euro;';

            }
            //- ALTRIMENTI dai errore
            else {
                alert("Qualcosa è andato storto... ricarica la pagina per riprovare.");
            }
        } else {
            alert("Inserisci correttamente il numero di kilometri che vuoi percorrere");
            // console.log(userKm);

        }

    } else {
        alert("Inserisci nome e cognome");
        // console.log(userName);
    }
})

resetBtn.addEventListener('click', function () {

    userName.value = '';
    // console.log('Variabile con lo username: ', userName);

    userKm.value = '';
    // console.log('Variabile con i km necessari: ', userKm);

    userDiscount.value = 0;
    // console.log('Variabile con lo sconto: ', userDiscount);
})