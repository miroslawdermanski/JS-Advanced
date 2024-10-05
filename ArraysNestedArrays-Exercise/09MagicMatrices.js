function magicMatrices(input){

    let isMagical = true

    let frstRowSum = 0
    input[0].forEach(x => frstRowSum += x)

    for(let curRow = 0; curRow < input.length; curRow++){

        let curRowSum = 0
        input[curRow].forEach(x => curRowSum += x)
        if(curRowSum != frstRowSum){
            isMagical = false
            break
        }

        let curColSum = 0
        for(let curCol = 0; curCol < input.length; curCol++){

            curColSum += input[curRow][curCol]
        }
        if(curColSum != frstRowSum){
            isMagical = false
            break
        }
    }
    console.log(isMagical);
    
}

magicMatrices([[4, 5, 6],
                [6, 5, 4],
                [5, 5, 5]])

magicMatrices([[11, 32, 45],
                [21, 0, 1],
                [21, 1, 1]])

magicMatrices([[1, 0, 0],
                [0, 0, 1],
                [0, 1, 0]])                