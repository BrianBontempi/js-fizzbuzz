console.log("JS OK")

// ! recupero il contenitore in pagina

const gridElement = document.getElementById("grid");

for(let i = 1; i <= 100; i++){

    // ! di default stampo il numero
    let result = i;
    let className = "number";

    if(i % 15 === 0){
        result = "FizzBuzz";
        className = "fizzbuzz";
    } else if(i % 3 === 0){
        result = "Fizz";
        className = "fizz";
    } else if(i % 5 === 0){
        result = "Buzz";
        className = "buzz";
    }

    console.log(result)

    // ! creo l'elemento e lo inserisco nel contenitore

    const cell = document.createElement("div");
    cell.classList.add("cell", className);
    cell.innerText = result;

    gridElement.appendChild(cell);
}
