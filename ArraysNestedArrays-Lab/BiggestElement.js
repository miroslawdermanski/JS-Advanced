function biggerEls(input){

    let biggestEl = Number.MIN_SAFE_INTEGER
    input.forEach(array => {
        array.forEach(num => {
            if(num > biggestEl){
                biggestEl = num
            }
        })
    })
    return biggestEl
}

console.log(biggerEls([[20, 50, 10],
            [8, 33, 145]]))

console.log(biggerEls([[3, 5, 7, 12],
            [-1, 4, 33, 2],
            [8, 3, 0, 4]]))