Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero.
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Come strutturare la consegna
1. Inizializziamo la repo con git, aggiungiamo un file readme.md vuoto e facciamo il primo push su github
2. Creiamo lo scaffolding di base con la struttura che segue:
js/script.js
css/style.css
index.html
readme.md
Poi facciamo il commit e il secondo push
3. Nel file readme.md scomponiamo il problema in passaggi semplici descritti in italiano. Poi facciamo il commit e il terzo push.
4. Procediamo a svolgere l'esercizio in javascript,  facendo un adeguato numero di commit e push.
BONUS 1:
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche  (template literals, innerHTML, appendecc)
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi  usare varie tecniche (style , className, classList)
 Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:


<!-- ! scaletta -->

1 Creo un ciclo for che va da 1 a 100
2 Controllo se il numero è multiplo sia di 3 che di 5 (resto della divisione per 15 uguale a 0) e stampo "FizzBuzz"
3 Altrimenti controllo se è multiplo di 3 e stampo "Fizz"
4 Altrimenti controllo se è multiplo di 5 e stampo "Buzz"
5 Altrimenti stampo il numero
6 Bonus: recupero un contenitore in pagina e per ogni numero creo un elemento con il risultato
7 Bonus: aggiungo una classe diversa all'elemento a seconda che sia numero, fizz, buzz o fizzbuzz
