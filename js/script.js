// console.log('js ok');

//Recupero Submit e Annulla
const submitBtn = document.querySelector('input[type="submit"]');
// console.log('Variabile con il submit: ', submitBtn);

const resetBtn = document.querySelector('button[type="reset"]');
// console.log('Variabile con il reset: ', resetBtn);

let price;


// - Attendi che l'utente schiacci il pulsante "Genera"
submitBtn.addEventListener('click', function () {

    //Recupero le Info
    let userName = document.querySelector('input[name="userName"]');
    userName = userName.value;
    // console.log('Variabile con lo username: ', userName);

    let userKm = document.querySelector('input[name="userKm"]');
    userKm = parseFloat(userKm.value);
    // console.log('Variabile con i km necessari: ', userKm);

    let userDiscount = document.querySelector('select[name="userDiscount"]');
    userDiscount = userDiscount.value;
    // console.log('Variabile con lo sconto: ', userDiscount);

    const ticketUsername = document.getElementById('ticket-username');

    const ticketSale = document.getElementById('ticket-sale');

    const ticketTrain = document.getElementById('ticket-train');


    const ticketCp = document.getElementById('ticket-cp');


    const ticketPrice = document.getElementById('ticket-price');



    // SE è presente il nome
    if (userName != '') {
        //- SE i km sono presenti e sono un numero
        if (userKm != '' && !isNaN(userKm) && userKm > 0) {
            //- Calcola il prezzo del biglietto
            price = 0.21 * userKm;
            //- SE l'utente è minorenne (userAge < 18anni) applica uno sconto del 20%
            //- SE l'utente ha più di 65 anni (userAge > 65anni) applica uno sconto del 40%
            price -= price * userDiscount;
            //- Arrotonda prezzo a 2 decimal
            const textPrice = price.toFixed(2);
            // console.log('Prezzo del biglietto: ', textPrice);

            ticketUsername.innerHTML = userName;

            if (userDiscount == 0) {
                ticketSale.innerHTML = 'Biglietto Standard';
            } else {
                ticketSale.innerHTML = 'Biglietto Ridotto';
            }

            ticketTrain.innerHTML = Math.floor(Math.random() * 10 + 1);

            ticketCp.innerHTML = Math.floor(Math.random() * 100000 + 1);

            ticketPrice.innerHTML = textPrice + '&euro;';

            //- ALTRIMENTI dai errore
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

    let userName = document.querySelector('input[name="userName"]');
    userName.value = '';
    // console.log('Variabile con lo username: ', userName);

    let userKm = document.querySelector('input[name="userKm"]');
    userKm.value = '';
    // console.log('Variabile con i km necessari: ', userKm);

    let userDiscount = document.querySelector('select[name="userDiscount"]');
    userDiscount.value = 0;
    // console.log('Variabile con lo sconto: ', userDiscount);
})