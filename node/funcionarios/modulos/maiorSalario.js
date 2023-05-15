const maiorSalario = array => 
array.reduce((acc, curr) => acc['salario'] < curr['salario'] ? acc : curr)

module.exports = maiorSalario