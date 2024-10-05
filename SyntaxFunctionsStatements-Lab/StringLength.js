function stringLength(string1, string2, string3){

    let sumLength = 0
    let averageLength = 0
    sumLength = string1.length + string2.length + string3.length
    averageLength = Math.floor(sumLength / 3).toFixed(0)
    console.log(`${sumLength}\n${averageLength}`);
}

stringLength('chocolate', 'ice cream', 'cake')

stringLength('pasta', '5', '22.3')