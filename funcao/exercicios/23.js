/* 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function calculaMedia(codigo, nota1, nota2, nota3){

    let pesoNota1 = 0
    let pesoNota2 = 0
    let pesoNota3 = 0


    if(codigo < 0){
        return console.log('Código invalido')
    }
    else {
        switch(nota1 > nota2 && nota1 > nota3){
            case true:
                pesoNota1 = 4
                pesoNota2 = 3
                pesoNota3 = 3
        }

        switch(nota2 > nota1 && nota2 > nota3){
            case true:
                pesoNota1 = 3
                pesoNota2 = 4
                pesoNota3 = 3
        }

        switch(nota3 > nota1 && nota3 > nota2){
            case true:
                pesoNota1 = 3
                pesoNota2 = 3
                pesoNota3 = 4
        }
    }
    
    let media = (nota1 * pesoNota1 + nota2  * pesoNota2 + nota3 * pesoNota3) / (pesoNota1 + pesoNota2 + pesoNota3)
  
    if(media >= 5){
        return console.log(`codigo: ${codigo}, notas: ${nota1}, ${nota2}, ${nota3} media: ${(media).toFixed(2)} Aprovado`)
    } else {
        return console.log(`codigo: ${codigo}, notas: ${nota1}, ${nota2}, ${nota3} media: ${(media).toFixed(2)}  Reprovado`)
    }

}

calculaMedia(1234, 2,10,4)