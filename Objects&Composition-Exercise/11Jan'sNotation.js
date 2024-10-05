function janNotation(arr){

    let items = []

    for(let item of arr){

        if(Number.isInteger(item)){

            items.push(item)
        } else {
            let operand2 = items.pop()
            let operand1 = items.pop()
            if(operand1 != undefined && operand2 != undefined){

                switch(item){
                    case '+':
                        items.push(operand1 + operand2);
                        break;
                    case '-':
                        items.push(operand1 - operand2);
                        break;
                    case '*':
                        items.push(operand1 * operand2);
                        break;
                    case '/':
                        items.push(operand1 / operand2);
                        break;
                }
            } else {

                console.log('Error: not enough operands!');
                return
            }           
        }
    }
    items.length == 1 ? console.log(items[0]) : console.log('Error: too many operands!');
}

janNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/'])

// janNotation([3, 4, '+'])

// janNotation([5, 3, 4, '*', '-'])

// janNotation([7, 33, 8, '-'])

// janNotation([15, '/'])