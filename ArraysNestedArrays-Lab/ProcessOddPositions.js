function processOddPositions(input){

    let modInput = input.filter((el, elIdx) => elIdx % 2 != 0).reverse()

    let output = modInput.map(el => el * 2).join(' ')
    return output
}

console.log(processOddPositions([10, 15, 20, 25]))

console.log(processOddPositions([3, 0, 10, 4, 7, 3]))