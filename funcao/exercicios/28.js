// 28) ​ Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let paresEImpares = [1, 2, 3, 4, 5]

let pares = 0
let impares = 0

for(indice = 0; indice < paresEImpares.length; indice++){
    if(paresEImpares[indice] % 2 == 0){
        pares++
    } else {
        impares++
    }
}

console.log(`${pares} pares e ${impares} são impares`)