function record(points){

    let arr = points.split(' ')
    let arrNumbers = []
    let result = []
    
    for(i = 0; i< arr.length; i++){
        arrNumbers.push(parseInt(arr[i]))
    }
    
    let records = 0
    let bestScore = 0
    
    for( i = 1; i < arrNumbers.length; i++){
        if(arrNumbers[i] > bestScore){
            records += 1
            bestScore = arrNumbers[i]       
        }
    }
    result.push(records)

    let lessScore = arrNumbers[0]

    for( i = 1; i <= arrNumbers.length; i++){
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