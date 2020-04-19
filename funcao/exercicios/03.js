/* 03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

function exponent(base, exponent){
    console.log(base ** exponent)
}

exponent(2, 3)

exponent = (base, exponent) => base ** exponent

console.log(exponent(2, 3))