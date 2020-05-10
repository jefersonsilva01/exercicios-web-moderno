/* 36) ​ Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

const vetor = [1, 2, 3, 4, 5, 6]

function interacaoVetor(vetor, number){

    let multVetor = []
    
    for(indice = 0; indice < vetor.length; indice += 1){
        multVetor.push(vetor[indice] * number)
    }

    return multVetor

}

function interacaoVetor2(vetor, number){

    let multVetor = []
    
    if(vetor.length > 5){
        for(indice = 0; indice < vetor.length; indice += 1){
            multVetor.push(vetor[indice] * number)
        }
        return multVetor
    }

}


console.log(interacaoVetor(vetor, 2))
console.log(interacaoVetor2(vetor, 3))