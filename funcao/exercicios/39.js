/* 39) ​ Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function changeVectors(vector1, vector2){

    console.log('Entrada ', vector1, vector2)

    for(index = 0; index < vector1.length; index += 1){
        vector1.push(vector2[0])
        vector2.push(vector1[0])
        vector1.shift()
        vector2.shift()
    }

    console.log('Saida', vector1, vector2)

}

let vector1 = [1, 2, 3]
let vector2 = [4, 5, 6]

changeVectors(vector1, vector2)