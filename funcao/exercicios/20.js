/* 20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function calculaNotas(valor){

    const notas = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05]

    let quantidadeNotas = 0
    let nota = 0
    let resultado = []
    let indice = 0

    while (nota < valor){
        if(valor >= nota + notas[indice]){
            nota += notas[indice]
            quantidadeNotas++
            resultado[indice] = `${quantidadeNotas} nota(s) de R$ ${notas[indice].toFixed(2)}`
        }  else {
            indice++
            quantidadeNotas = 0
        } 
    }

    for(indice = 0; indice < resultado.length; indice++){
        if(typeof resultado[indice] == 'string'){
            console.log(resultado[indice])
        }
    }

}

calculaNotas(18.75)