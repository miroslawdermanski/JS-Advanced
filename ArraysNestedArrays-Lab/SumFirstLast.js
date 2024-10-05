function sumFirstLast(input){

    if((input[0] != undefined) && (input[input.length-1] != undefined)){
        let result = Number(input[0]) + Number(input[input.length-1])
        return result
    }

}

console.log(sumFirstLast(['20', '30', '40']))

console.log(sumFirstLast(['5', '10']))