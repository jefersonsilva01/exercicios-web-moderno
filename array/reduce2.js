const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?

const result = alunos.map(e => e.bolsista).reduce((acc, cur) => acc && cur);
console.log(result)

// Desafio 2: Algum aluno é bolsista?

const result2 = alunos.map(e => e.bolsista).reduce((acc, cur) => acc || cur);
console.log(result2)
