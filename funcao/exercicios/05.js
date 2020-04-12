// Como eu fiz

function money(value){
    let num = value.toString()
    let arrayNumber =  num.split("")
    let result =''
    for (i = 0; i <= arrayNumber.length; i++){
        if(arrayNumber[i] != '.'){
            result += arrayNumber[i]
        } else if(arrayNumber[i] == '.'){
            result += ','
            result += arrayNumber[i  + 1]
            result += arrayNumber[i + 2]
            break
        }
    }
    return console.log(`R$ ${result}`)
}

money(0.1 + 0.2)

// Como o prof fez

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)