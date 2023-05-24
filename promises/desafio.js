const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

new Promise(resolve => {  
    fs.readFile(caminho, function(_, conteudo){
      resolve(conteudo.toString())
    })
})

.then(console.log)


// const exibirConteudo = (_, conteudo) => console.log(conteudo.toString())

// fs.readFile(caminho, exibirConteudo)

