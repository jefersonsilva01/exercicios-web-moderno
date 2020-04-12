// Refatorar o código abaixo

// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

// const p1 = new Pessoa('João')
// p1.falar()

// Como eu fiz

// function Pessoa(nome) {
//     return { 
//         nome,
//         falar(){
//             console.log(`Meu nome é ${nome}`)
//         }
//     }
// }

// const p1 = Pessoa('Jef')
// p1.falar()

// Como o prof fez

function Pessoa(nome) {
    this.nome = nome
    
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
    
}

const p1 = new Pessoa('Jef')
p1.falar()