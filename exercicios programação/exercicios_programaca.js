// /* Crie uma função que retorna a string "Olá," concatenada com um argumento text (a ser passado para função) e com o ponto de exclamação "!" no final.

// Exemplos:
// cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
// cumprimentar("Maria") // retornará "Olá, Maria!" */

// const cumprimentar = nome => console.log(`Olá, ${nome}!`)

// cumprimentar('Jeferson')

// /* Escreva uma função que receba a idade de uma pessoa em ano e retorne a mesma idade em dias.

// Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e desconsidere também dias decorridos desde o último aniversário.

// Exemplos:

// converterIdadeEmAnosParaDias(25) // retornará 9125 
// converterIdadeEmAnosParaDias(70) // retornará 25550 */

// const converterIdadeEmAnosParaDias = idade => console.log(idade * 365)

// converterIdadeEmAnosParaDias(31)

// /* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcinário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.

// Exemplos: 
// calcularSalario(150, 40.5) // retornará "Salário a R$ 6075"*/

// const calcularSalario = (horasTrabalhadas, valorDaHoraTrabalhada) => 
// console.log(`Salário a R$ ${horasTrabalhadas * valorDaHoraTrabalhada}`)

// calcularSalario(150, 40.5)

// /* Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2º mês.

// Exemplos:
// nomeDoMes(1) // retornará "janeiro"
// nomeDoMes(4) // retornará "abril"*/

// const nomeDoMes = mes => {
//   const meses = [ 
//     "janeiro", 
//     "fevereiro", 
//     "março", 
//     "abril", 
//     "maio", 
//     "junho", 
//     "julho", 
//     "agosto", 
//     "setembro", 
//     "outubro", 
//     "novembro", 
//     "dezembo", 
//   ]
  
//   console.log(meses[mes - 1])
// }

// nomeDoMes(12)

// /* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

// Exemplos:

// maiorOuIgual(0, 0) // retonará true
// maiorOuIgual(0, "0") // retonará false
// maiorOuIgual(5, 1) // retonará false */

// const maiorOuIgual = (primeiroNumero, segundoNumero) => 
// console.log(primeiroNumero >= segundoNumero)

// maiorOuIgual(0, "0")

// /* Escreva uma função que receba um valor booleano ou numérico, Se o parâmetro for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

// Exemplos: 
// inverso(true) // retornará false
// inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
// inverso(-2000) // retornará 2000
// inverso("programação") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string" */

// const revertBoolean = bool => 
// console.log(!bool)

// const revetNumber = number => 
// number > 0 
// ? console.log(-Math.abs(number)) 
// : console.log(Math.abs(number))

// const inverso = param => 
// typeof param === "boolean" 
// ? revertBoolean(param) 
// : typeof param === "number" 
// ? revetNumber(param) 
// : console.log("booleano ou número esperados, mas o parâmetro é do tipo string")

// inverso(1)
// inverso(true)
// inverso(false)
// inverso(-1)
// inverso("1")

// /* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre o minimo e o maximo. Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se o numero é igual a minimo ou maximo. 

// Exemplos: 
// estaEntre(10, 50, 100) // retornará true 
// estaEntre(16, 100, 160) // retornará false 
// estaEntre(3, 3, 150) // retornará false
// estaEntre(3, 3, 150, true) // retornará true */

// consta = estaEntre = (numero, minimo, maximo, inclusivo = false) => 
// inclusivo 
// ? console.log(numero >= minimo && numero <= maximo) 
// : console.log(numero > minimo && numero < maximo) 

// estaEntre(60, 50, 100) // retornará true 
// estaEntre(16, 100, 160) // retornará false 
// estaEntre(3, 3, 150) // retornará false
// estaEntre(3, 3, 150, true) // retornará true
// estaEntre(1, 3, 150, true) // retornará false

// /* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de multiplicação. 

// Exemplos: 

// multiplicador(5, 5) // retornará 25 
// multiplicador(0, 7) // retornará 0 */


// const multiplicador = (number1, number2) => {
//   let result = 0
//   for(let i = 0; i < number1; i++){
//     result+= number2
//   }
//   console.log(result)
// }

// multiplicador(5, 5)
// multiplicador(0, 7)

// /* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de veze que haverá repetição. Um array será retornado. 

// Exemplos:

// repetir("código", 2) // retornará ["código", "código"] 
// repetir(7, 3) // retornará [7, 7,7 ] */

// const repetir = (param1, param2) => {
//   let newArray = []
//   for(let i = 0; i < param2; i++) {
//     newArray.push(param1)
//   }
//   console.log(newArray)
// }

// repetir("código", 2) // retornará ["código", "código"] 
// repetir(7, 3) // retornará [7, 7,7 ]

// /* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro 

// Exemplos:

// simboloMais(2) // retornará "++"
// simboloMais(4) // retornará "++++" */

// const simboloMais = param => {
//   let result = ''
//   for(let i = 0; i < param; i++){
//     result+= "+"
//   }
//   console.log(result)
// }

// simboloMais(5)


// /* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:

// Exemplos: 

// receberPrimeiroEUltimoElemento([7, 14, "olá"]) // retornará [7, "olá"] 
// receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16] */


// const receberPrimeiroEUltimoElemento = array => 
// console.log([array[0], array[array.length -1]])

// // {
// //   const newArray = []
// //   newArray.push(array.shift())
//   newArray.push(array.pop())
//   console.log(newArray)
// }

receberPrimeiroEUltimoElemento([7, 14, "olá"]) // retornará [7, "olá"] 
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

/* Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos apenas modificando-o, mas em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a mesma.

Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções. 

Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro. 

Exemplos: 

removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
  id: 20,
  nome: "caneta",
  descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}

A fim de testas se o objeto retornado não é o mesmo que foi passado como parâmetro para a função removerPropriedade, você poderá usar a função Object.is() por exemplo:
Object.is(removerPropriedade(objeto, "descricao"), objeto)
Retornará false se o objeto não for o mesmo. */


const removerPropriedade = (obj, prop) => { 
  delete obj[prop]
  console.log(obj)
}

removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
console.log(Object.is(removerPropriedade({a: 1, b: 2}, "a"), {a: 1, b: 2}))

removerPropriedade({
  id: 20,
  nome: "caneta",
  descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}


