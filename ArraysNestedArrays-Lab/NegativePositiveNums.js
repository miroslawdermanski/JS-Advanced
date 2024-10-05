function negativePositiveNums(input){

    let result = []
    input.forEach(number => {

        if(number < 0){
            result.unshift(number)
        } else {
            result.push(number)
        }
    })

    result.forEach(x => console.log(x))
}

negativePositiveNums([7, -2, 8, 9])

negativePositiveNums([3, -2, 0, -1])