function validityChecker(x1, y1, x2, y2){

    let distance1 = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2)
    console.log(`{${x1}, ${y1}} to {0, 0} is ${Number.isInteger(distance1) ? 'valid' : 'invalid'}`);

    let distance2 = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${Number.isInteger(distance2) ? 'valid' : 'invalid'}`);

    let distance3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(distance3) ? 'valid' : 'invalid'}`);
}

validityChecker(3, 0, 0, 4)

validityChecker(2, 1, 1, 1)