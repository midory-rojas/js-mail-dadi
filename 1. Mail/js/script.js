//Mail
//Crea un array con delle email di chi può acedere.
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.
//Non è necessario provvedere alla validazione delle email.
//NON USARE INCLUDES

//Creare con delle email di chi puo accedere
//Creare una variabile con prompt per chiedere la mail a ogni utente
//Controlo che sia nella lista di chi puo accedere usando for

//Prova
console.log("ciao");

// 1. Creazione delle mail di chi puo accedere
const emails = ["sandra10@gmail.com", "erica@gmail.com", "roberta10@gmail.com", "diego2@gmail.com"];


// 2. Creazione di una variabile con prompt, cosi l'utente può inserire sua mail
const utente = prompt("Inserisci la tua email");



// Creo una variabile d'appoggio e la metto come false
// Per ogni elemento dell'array faccio un confronto
//    Se l'elemtno e quello che cerco
//    variabile = true ----- accesso consentito
//    altrimenti ----- accesso negato

let trovato = false;

for (let i = 0; i < emails.length; i++) {
    const curEmails = emails[i];

    if (curEmails === utente) {
        trovato = true;
        console.log("Accesso consentito");
        i = emails.length;  
    } else {
        console.log("Accesso negato");
    }
}





