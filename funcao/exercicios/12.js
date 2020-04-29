// 12)​ Faça um algoritmo que calcule o fatorial de um número.

function fatorial(number){
    let fatorial = number
    
    if(fatorial == 0){
        return console.log(1)
    }
    for(i = number - 1; i >=1; i--){
        fatorial *= i 
    }
    return console.log(fatorial)
}

fatorial(3)