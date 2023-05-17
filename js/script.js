//richiesta km
let km = parseInt(prompt ('quanti km devi percorrere?'));
console.log (km);

//richiesta età
let age = parseInt(prompt('quanti hanni hai?'));
console.log (age);

//dichiarazione prezzo
let prezzo = 0.21;
console.log(prezzo);

//costo biglietto normale
let risultato = km * prezzo;
console.log (risultato);

//variazione costo biglietto se minore di 18 o maggiore di 65 anni
if (age <= 17) {
    risultato = (km * prezzo - 20 / 100)
    console.log (risultato)
} else if (age >= 65) {
    risultato = (km * prezzo - 40 / 100)
    console.log (risultato)
}

//risultato a due decimali
risultato = risultato.toFixed(2)
console.log (risultato)

//risultato a video
document.getElementById('prezzo_biglietto').innerHTML = `${risultato} €`


