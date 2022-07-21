// console.log('js ok');

//Recupero Submit
const submitBtn = document.querySelector('input[type="submit"]');
console.log('Variabile con il submit: ', submitBtn);

let price;


// - Attendi che l'utente schiacci il pulsante "Genera"
submitBtn.addEventListener('click', function () {

    //Recupero le Info
    let userName = document.querySelector('input[name="userName"]');
    userName = userName.value;
    console.log('Variabile con lo username: ', userName);

    let userKm = document.querySelector('input[name="userKm"]');
    userKm = parseFloat(userKm.value);
    console.log('Variabile con i km necessari: ', userKm);

    let userDiscount = document.querySelector('select[name="userDiscount"]');
    userDiscount = userDiscount.value;
    console.log('Variabile con lo sconto: ', userDiscount);

    // SE è presente il nome
    if (userName != '') {
        //- SE i km sono presenti e sono un numero
        if (userKm != '' && !isNaN(userKm)) {
            //- Calcola il prezzo del biglietto
            price = 0.21 * userKm;
            //- SE l'utente è minorenne (userAge < 18anni) applica uno sconto del 20%
            //- SE l'utente ha più di 65 anni (userAge > 65anni) applica uno sconto del 40%
            price -= price * userDiscount
            console.log('Prezzo del biglietto: ', price);

        } else {
            alert("ERRORE KM");
            console.log(userKm);

        }

    } else {
        alert("ERRORE NOME");
        console.log(userName);
    }
})

//                 - Arrotonda prezzo a 2 decimal
//     - ALTRIMENTI dai errore