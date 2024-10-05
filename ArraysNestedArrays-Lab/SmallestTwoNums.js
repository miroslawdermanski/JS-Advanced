function smallestTwoNums(input){

    input = input.sort((a, b) => a - b)
    let output = ''
    for (let i = 0; i < 2; i++) {

        output += `${input[i]} `
    }
    console.log(output);
}

smallestTwoNums([30, 15, 50, 5])

smallestTwoNums([3, 0, 10, 4, 7, 3])