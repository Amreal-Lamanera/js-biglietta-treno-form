# Calcolo del prezzo del biglietto del treno

- Attendi che l'utente schiacci il pulsante "Genera"
    - SE è presente il nome
        - SE i km sono presenti e sono un numero
            - Calcola il prezzo del biglietto
                - SE l'utente è minorenne (userAge < 18anni) applica uno sconto del 20%
                - SE l'utente ha più di 65 anni (userAge > 65anni) applica uno sconto del 40%
                - Arrotonda prezzo a 2 decimal
    - ALTRIMENTI dai errore