const produtos = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'iPad Pro', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  {nome: 'Notebook', preco: 18.99, fragil: false},
]

const caros = item => item.preco >= 500
const frageis = item => item.fragil

console.log(produtos.filter(caros).filter(frageis))