/* 08) ​ Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */


function record(points){

    let arr = points.split(' ')
    let arrNumbers = []
    let result = []
    
    for(i = 0; i< arr.length; i++){
        arrNumbers.push(parseInt(arr[i]))
    }
    
    let records = 0
    let bestScore = 0
    
    for(i = 1; i < arrNumbers.length; i++){
        if(arrNumbers[i] > bestScore){
            records += 1
            bestScore = arrNumbers[i]       
        }
    }
    result.push(records)

    let lessScore = arrNumbers[0]

    for(i = 1; i <= arrNumbers.length; i++){
        if(arrNumbers[i] < lessScore){
            lessScore = arrNumbers[i]
        }
    }

    let positionLessScore = arrNumbers.indexOf(lessScore) + 1
    result.push(positionLessScore)

    return console.log(result)
}

let points = '10 20 20 8 25 3 0 30 1'

record(points)