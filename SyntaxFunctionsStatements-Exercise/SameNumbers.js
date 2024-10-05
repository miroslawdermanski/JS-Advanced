function sameNums(num){

    let numAsStr = `${num}`
    let numAsArray = numAsStr.split('')
    let isValid = true
    let totalSum = 0
    
    for (let i = 0; i < numAsArray.length-1; i++){

        if(numAsArray[i] != numAsArray[i+1]){
            isValid = false
            break;
        }
    }
    numAsArray.forEach(digit => totalSum += Number(digit))
    console.log(isValid ? 'true':'false');
    console.log(totalSum);
}

sameNums(2222222)

sameNums(1234)