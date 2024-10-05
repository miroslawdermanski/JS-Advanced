function sumOfNums(n, m){

    let result = 0
    n = Number(n)
    m = Number(m)
    for(let i = n; i <= m; i++){

        result += i
    }
    console.log(result);
}

sumOfNums('1', '5' )

sumOfNums('-8', '20')