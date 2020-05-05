// 30) ​ Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

let vetor = [1, 2, 10, 4, 40, 5, 6]

maior = vetor[0]

for(indice = 0; indice < vetor.length; indice++){
    if(vetor[indice] > maior){
        maior = vetor[indice]
    }
}

console.log(maior)