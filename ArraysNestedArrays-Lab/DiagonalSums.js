function diagonalSums(input){

    let mainDS = 0
    let secondaryDS = 0

    let startIdxMain = 0
    let startIdxSec = input[0].length - 1
    for(let curArr = 0; curArr < input.length; curArr++){

        mainDS += input[curArr][startIdxMain]
        startIdxMain++

        secondaryDS += input[curArr][startIdxSec]
        startIdxSec--
    }
    console.log(`${mainDS} ${secondaryDS}`);
}

diagonalSums([[20, 40],
            [10, 60]])

diagonalSums([[3, 5, 17],
            [-1, 7, 14],
            [1, -8, 89]])