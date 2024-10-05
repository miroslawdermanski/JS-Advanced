function evenPosition(input){

    let output = ''

    for(let index = 0; index < input.length; index += 2){

        output += `${input[index]} `
    }
    console.log(output);
}

evenPosition(['20', '30', '40', '50', '60'])

evenPosition(['5', '10'])