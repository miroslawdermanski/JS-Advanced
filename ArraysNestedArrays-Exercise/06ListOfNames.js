function listOfNames(input){

    input = input.sort((a, b) => a.localeCompare(b))
    .forEach(name => {
        console.log(`${input.indexOf(name)+1}.${name}`);
    })

}

listOfNames(["John", "Bob", "Christina", "Ema"])