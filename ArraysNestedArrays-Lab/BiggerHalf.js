function biggerHalf(input){

    input = input.sort((a, b) => a - b)
    for(let i = 0; i < input.length-1; i++){

        input.shift()
    }
    return input
}

console.log(biggerHalf([4, 7, 2, 5]))

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))