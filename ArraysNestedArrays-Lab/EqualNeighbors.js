function equalNeighbors(input){

    let pairsCount = 0

    for(let curArray = 0; curArray < input.length; curArray++){

        for(let curEl = 0; curEl < input[curArray].length; curEl++){

            let item = input[curArray][curEl]

            //Check right neighbor
            if(curEl < input[curArray].length - 1){
                if(item == input[curArray][curEl + 1]){
                    pairsCount++
                }
            }

            //Check bottom neighbor
            if(curArray < input.length - 1){
                if(item == input[curArray + 1][curEl]){
                    pairsCount++
                }
            }
        }
    }
    return pairsCount
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']]))

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
                ['well', 'done', 'yo', '6'],
                ['not', 'done', 'yet', '5']]))