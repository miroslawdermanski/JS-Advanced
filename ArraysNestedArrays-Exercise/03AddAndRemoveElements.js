function addRemoveEls(input){

    let array = []
    let initialNum = 1

    for(let i = 0; i < input.length; i++){

        if(input[i] == 'add'){
            array.push(initialNum)
            initialNum++
        } else if(input[i] == 'remove'){
            array.pop()
            initialNum++
        }
    }
    if(array.length == 0){
        console.log('Empty');
    } else {
        array.forEach(el => console.log(el))
    }
}

addRemoveEls(['add', 
            'add', 
            'add', 
            'add'])

addRemoveEls(['add', 
            'add', 
            'remove', 
            'add', 
            'add'])

addRemoveEls(['remove', 
            'remove', 
            'remove'])