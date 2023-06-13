class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => valorConsolidado += l.valor )
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
console.log(salario)
const contaDeLuz = new Lancamento('Luz', -220)
console.log(contaDeLuz)

const contas = new CicloFinanceiro(6, 2010)
console.log(contas)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())