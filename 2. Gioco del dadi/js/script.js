// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//Genrerare un numero ramdom per il giocatore
const numeroGiocatore = Math.floor(Math.random() * 6) +1;
//Stamparlo nel console
console.log ("Numero del Giocatore", numeroGiocatore);

//Genrera un numero ramdom per il giocatore
const numeroComputer = Math.floor(Math.random() * 6) +1;
//Stamparlo nel console
console.log ("Numero del Computer", numeroComputer);

// Stabilire il vincitore, in base a chi fa il punteggio più alto
// Se il numero del giocatore è piu alto ----> Il giocatore vince
if (numeroGiocatore > numeroComputer) {
    console.log("Il Giocatore vince");
// Se il numero del giocatore è menore dal cumputer ----> Il computer vince
} else if (numeroGiocatore < numeroComputer) {
    console.log("Il Computer vince");
// Altrimenti, se i due numeri sono uguali ---> Pareggio
} else {
    console.log("Pareggio");
}
