/* 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

function alturas(altura1, taxaDeCrescimento1, altura2, taxaDeCrescimento2){

    let anosCrianca1 = 0
    let anosCrianca2 = 0

    if(altura1 > altura2){
        console.log(`A criança1 é maior que criança2`)
        if(taxaDeCrescimento2 > taxaDeCrescimento1){
            while(altura2 < altura1){
                altura1 += taxaDeCrescimento1
                altura2 += taxaDeCrescimento2
                anosCrianca2++
            }
            console.log(`A criança2 ira passar a criança1 em ${anosCrianca2} ano(s)`)
        }
    }
    else if(altura2 > altura1){
        console.log(`A criança2 é maior que criança1`)
        if(taxaDeCrescimento1 > taxaDeCrescimento2){
            while(altura1 < altura2){
                altura1 += taxaDeCrescimento1
                altura2 += taxaDeCrescimento2
                anosCrianca1++
            }
            console.log(`A criança1 ira passar a criança2 em ${anosCrianca1} ano(s)`)
        }
    } else {
        return console.log(`As crianças tem o mesmo tamanho`)
    }

}

alturas(1.10, 0.10, 1.30, 0.05)