/* 13) ​ Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.A */

function validaDia(dia){
    let domingo = 1
    let sabado = 7

    switch (dia < 32){
        case true:
            for(i = 0; i <= dia;  i++){
                switch ((dia == domingo || dia == sabado)) {
                    case true:
                        return console.log('Final de samana')
                        break;
                    case false:
                        domingo += 7
                        sabado += 7
                }
            }
            return console.log('Dia util')
        default:
            return console.log('Dia invalido')
    }
}

validaDia(27)