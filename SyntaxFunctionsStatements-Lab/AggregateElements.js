function aggregateEls(input){

    let elsSum = 0
    input.forEach( el => {
        elsSum += el
    })
    let invSum = 0
    input.forEach( el => {
        invSum += 1 / el
    })
    let concat = ''
    input.forEach( el => {
        concat += el
    })
    console.log(`${elsSum}\n${invSum}\n${concat}`);
}

aggregateEls([1, 2, 3]);

aggregateEls([2, 4, 8, 16])