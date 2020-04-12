function criarProduto(nome, preco){
    return {
        desconto: 0.93,
        nome,
        preco
    }
}

console.log(criarProduto('Caneca', 10.00))