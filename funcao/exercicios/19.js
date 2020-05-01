/* 19) ​ O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function cardapio(codigoPedido, quantidade = 1){
     
    switch(codigoPedido){
        case 100:
            return console.log(`Valor a ser pago: R$ ${(quantidade * 3.00).toFixed(2)}`)
        case 200:
            return console.log(`Valor a ser pago: R$ ${(quantidade * 4.00).toFixed(2)}`)
        case 300:
            return console.log(`Valor a ser pago: R$ ${(quantidade * 5.50).toFixed(2)}`)
        case 400:
            return console.log(`Valor a ser pago: R$ ${(quantidade * 7.50).toFixed(2)}`)
        case 500:
            return console.log(`Valor a ser pago: R$ ${(quantidade * 3.50).toFixed(2)}`)
        case 600:
            return console.log(`Valor a ser pago: R$ ${(quantidade * 2.80).toFixed(2)}`)
        default:
            return console.log('Produto inexistente')
    }
    
}

cardapio(300, 2)