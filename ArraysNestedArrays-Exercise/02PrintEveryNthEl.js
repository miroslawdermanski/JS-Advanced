function printEveryNthEl(array, number){

    array = array.filter((el, elIdx) => elIdx % number == 0)

    return array
}

console.log(printEveryNthEl(['5', 
                '20', 
                '31', 
                '4', 
                '20'], 
                2))

console.log(printEveryNthEl(['dsa',
                'asd', 
                'test', 
                'tset'], 
                2))

console.log(printEveryNthEl(['1', 
                '2',
                '3', 
                '4', 
                '5'], 
                6))               