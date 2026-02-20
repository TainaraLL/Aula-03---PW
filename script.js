// INCREMENTAR - DECREMENTAR - LIMPAR

const display = document.getElementById("numero"); //ponto e virgulo é mais estético, só para saber onde começa e termina uma linha de código.

const btincrementar = document.getElementById("incrementar");
const btlimpar = document.getElementById("limpar");
const btdecrementar = document.getElementById("decrementar");

let contador = 0;

btincrementar.addEventListener("click", () => {
    //contador = contador + 1; 
    contador++; //incrementar 
    display.innerText = contador;
    console.log(contador)
}); //uma função para adicionar um evento de escuta, o click

btlimpar.addEventListener("click", () => {
    contador = 0; 
    display.innerText = contador;
    console.log(contador)
})

btdecrementar.addEventListener("click", () => {
    contador--; //decrementar 
    display.innerText = contador;
    console.log(contador)
})

// contador = 0;  com apena 1 = ele atribui um valor.
// contador == 0; aqui ele compara.
// contador === 0; também compara.


// FAZER A SOMA DE DOIS NÚMEROS

const display2 = document.getElementById("numero2"); 

const inpNum1 = document.getElementById("num1");
const inpNum2 = document.getElementById("num2");
const btsomar = document.getElementById("somar");

//debugger ---- conferir se "pegou" o número.

let num = 0;

somar.addEventListener("click", () => {
    const result = Number(inpNum1.value) + Number(inpNum2.value);
    display2.innerText = result;
    //debugger //---- conferir se "pegou" o número
})
