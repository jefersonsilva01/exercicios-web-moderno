/* 07) ​ Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x2 - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */


function bhaskara(ax2, bx, c){
    let delta = Math.pow(bx, 2) - (4 * ax2 * c)
    
    let x1 = Math.sqrt(delta) + -bx / 2 * ax2
    let x2 = Math.sqrt(delta) - -bx / 2 * ax2

    let arr = []

    if( delta < 0) {
        return console.log('Delta Negativo')
    } else {
        arr.push(x1)
        arr.push(x2)
        return console.log(`x1: ${arr[0]}, x2: ${arr[1]}`)
    }
}

bhaskara(4, 2, -6)