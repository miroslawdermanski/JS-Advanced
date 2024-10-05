function lastKNums(n, k){

    let sequence = [1]
    while(sequence.length < n){

        let newDigit = 0
        let curElToAddIdx = sequence.length-1
        for(let numsToAdd = k; numsToAdd > 0; numsToAdd--){

            if(sequence[curElToAddIdx] != undefined){
                newDigit += sequence[curElToAddIdx]
                curElToAddIdx--
            }
        }
        sequence.push(newDigit)
    }
    //return `[${sequence.join(', ')}]`;
    return sequence;

}

console.log(lastKNums(6, 3))

console.log(lastKNums(8, 2))