// 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function aumentoDeSalario(plano, salario){

    switch(plano){
        case 'A':
            return console.log(salario + ((10 * salario) /100))
        case 'B':
            return console.log(salario + ((15 * salario) /100))
        case 'C':
            return console.log(salario + ((20 * salario) /100))
        default:
            return console.log('Operação invalida')
    }

}

aumentoDeSalario('C', 1000)