function simpleInterest(capitalInicial, taxaDeJuros, tempoDeAplicacao){

    let jurosSimples = capitalInicial * (taxaDeJuros / 100)

    let montante = capitalInicial + jurosSimples
    return console.log(montante.toFixed(2))

}

function compoundInterest(capitalInicial, taxaDeJuros, tempoDeAplicacao){

    let montante =  capitalInicial *  (1 + (taxaDeJuros / 100)) ** tempoDeAplicacao

    return console.log(montante.toFixed(2))
}


simpleInterest(700000, 30, 12)
compoundInterest(8000, 6, 4)