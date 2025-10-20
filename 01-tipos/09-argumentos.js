function sumar(a, b) {
    console.log(arguments);
    return a + b;
}

let resultado = sumar(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof sumar);