function calorieObject(array){

    let result = {}

    for (let i = 0; i < array.length-1; i+=2) {
        result[array[i]] = +array[i+1]
    }
    console.log(result);  
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])