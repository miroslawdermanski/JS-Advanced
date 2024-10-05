function squareOfSatrs(n){

    let result = ''
    let k = n
    while(k > 0){
        result += '* '
        k--
    }
    let output = ''
    for(let i = 0; i < n; i++){

        output += `${result}\n`
    }
    console.log(output);
}

squareOfSatrs(1)

squareOfSatrs(2)

squareOfSatrs(5)