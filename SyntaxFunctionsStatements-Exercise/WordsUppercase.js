function wordsUppercase(input){

    let pattern = /[\w]+/g

    let match = input.match(pattern)
    if(match){
        let output = ''
        for(let i = 0; i < match.length; i++){
            output += match[i].toUpperCase()
            if(i != match.length - 1){
                output += ', '
            }
        }
        console.log(output);
    }
}

wordsUppercase('Hi, how are you?')

wordsUppercase('hello')