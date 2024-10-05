function extractIncrSubset(array){

    let result = []

    let initialVal = array[0]
    array.forEach(el => {
        if(el >= initialVal){
            result.push(el)
            initialVal = el
        }
    })
    return result
}

console.log(extractIncrSubset([1, 
                    3, 
                    8, 
                    4, 
                    10, 
                    12, 
                    3, 
                    2, 
                    24]))

console.log(extractIncrSubset([1, 
                    2, 
                    3,
                    4]))

console.log(extractIncrSubset([20, 
                    3, 
                    2, 
                    15,
                    6, 
                    1]))   