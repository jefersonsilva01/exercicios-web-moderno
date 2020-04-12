function triangleType(side1, side2, side3){
    if( side1 === side2 && side1 === side3){
        console.log('Triagle: Equilátero')
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log('Triangle: Isósceles')
    } else {
        console.log('Triangle: Escaleno')
    }
}

triangleType(11, 1, 10)
triangleType(10, 10, 10)
triangleType(1, 10, 10)