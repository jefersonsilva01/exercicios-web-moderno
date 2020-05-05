// 31) ​ Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

let vetor = [-1, -2, -3, 5, -6]

contador = 0

for(indice = 0; indice < vetor.length; indice++ ){
    if(vetor[indice] < 0){
        contador++
    }
}

console.log(contador)