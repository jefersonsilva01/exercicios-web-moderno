/* 38) ​ Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

function beginEnd(begin = 0, end = 100){

    let help

    if(end < begin){
        help = end
        end = begin
        begin = help
    }
    
    while(begin <= end){
        if(begin % 2 != 0){
            console.log(begin)
        }
        begin += 1
    }

    return 'FIm'

}

console.log(beginEnd(5, 1))