/* 34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function comparaStrings(string1, string2){
    
    let stringArray1 = string1.toLowerCase().split('')
    let stringArray2 = string2.toLowerCase().split('')

    stringArray1.sort()
    stringArray2.sort()
    
    if(stringArray1.length > stringArray2.length){
        for(i = 0; i <= stringArray1.length; i++){
            for(a = 0; a <= stringArray2.length; a++){
                if(stringArray1[i] == stringArray2[a]){
                    stringArray1.shift()
                }
            }
        }
        if(stringArray1.length > 0){
            return console.log('false')
        } 
        else {
            return console.log('true')
        }
    } 

    else if(stringArray2.length > stringArray1.length){
        for(i = 0; i <= stringArray2.length; i++){
            for(a = 0; a <= stringArray1.length; a++){
                if(stringArray2[i] == stringArray1[a]){
                    stringArray2.shift()
                }
            }
        }
        if(stringArray2.length > 0){
            return console.log('false')
        }
        else {
            return console.log('true')
        }
    } 

    else if(stringArray1.length == stringArray2.length) {    
        for(i = 0; i < stringArray1.length; i++){
            for(a = 0; a < stringArray2.length; a++){
                if(stringArray1[i] == stringArray2[a]){
                    stringArray1.shift()
                }
            }
        }
        if(stringArray1.length > 0){
            return console.log('false')
        } 
        else {
            return console.log('true')
        }
    }

}

comparaStrings('testea', 'testea')