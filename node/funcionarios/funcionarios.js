const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const filtro = require('./modulos/filtro')
const maiorSalario = require('./modulos/maiorSalario')

axios.get(url).then(response => {
  const funcionarios = response.data

  const result = maiorSalario(filtro(funcionarios))
  // .filter(e => e['pais'] === 'China' && e['genero'] === 'F' ? e : '')
  // .reduce((acc, curr) => acc['salario'] < curr['salario'] ? acc : curr)

  console.log(result)
})