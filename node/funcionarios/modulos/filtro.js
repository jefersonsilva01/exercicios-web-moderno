const filtro = array => 
array.filter(e => e['pais'] === 'China' && e['genero'] === 'F' ? e : '')

module.exports = filtro