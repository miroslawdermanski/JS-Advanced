function rotateArray(array, number){

    while(number > 0){

        array.unshift(array.pop())
        number--
    }
    console.log(array.join(' '));
}

rotateArray(['1', 
            '2', 
            '3', 
            '4'], 
            2)

rotateArray(['Banana', 
            'Orange', 
            'Coconut', 
            'Apple'], 
            15)