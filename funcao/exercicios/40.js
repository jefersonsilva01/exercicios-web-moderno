/* 40) ​ Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

function showNotes(vector){

    for(index = 0; index < vector.length; index += 1){
        if(vector[index] > -1 && vector[index] < 5){
            console.log('D')
        } else if(vector[index] > 4.9 && vector[index]  < 7){
            console.log('C')
        } else if(vector[index] > 6.9 && vector[index] < 9){
            console.log('B')
        } else if(vector[index] > 8.9 && vector[index] < 11){
            console.log('A')
        }
    }

}

let notes = [0.0, 1.3, 5.6, 7.9, 8.6, 9.5]

showNotes(notes)