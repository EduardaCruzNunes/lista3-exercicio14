var valor = 1;
var contador = 1;
var numero = 0;

function calcularOfatorial(numero){
    while(contador <= numero){
        console.log(valor , '*', contador);
        valor = valor * contador;
        contador = contador + 1;
    }
    return console.log(valor);
}
numero = prompt('Digite um número:');

calcularOfatorial(numero);
