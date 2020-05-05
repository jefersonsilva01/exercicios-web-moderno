// 32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

let vetor = [1, 2, 3, 4]

let media = 0

for(indice = 0; indice < vetor.length; indice++){
    media += vetor[indice]
}

console.log(media / vetor.length)