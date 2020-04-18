function bhaskara(ax2, bx, c){
    let delta = Math.pow(bx, 2) - (4 * ax2 * c)
    
    let x1 = Math.sqrt(delta) + -bx / 2 * ax2
    let x2 = Math.sqrt(delta) - -bx / 2 * ax2

    let arr = []

    if( delta < 0) {
        return console.log('Delta Negativo')
    } else {
        arr.push(x1)
        arr.push(x2)
        return console.log(`x1: ${arr[0]}, x2: ${arr[1]}`)
    }
}

bhaskara(4, 2, -6)