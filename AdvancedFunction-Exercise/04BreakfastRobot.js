function solution(){

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    function cook(input){

        input = input.split(' ')
        let command = input.shift()
        if(command == 'restock'){

            let [microel, quantity] = input
            ingredients[microel] += Number(quantity)
            return 'Success';
            
        } else if(command == 'prepare'){

            let [recipe, quantity] = input
            if(recipe == 'apple'){

                let neededCarbs = quantity * 1
                let neededFlvr = quantity * 2

                if(ingredients.carbohydrate >= neededCarbs && ingredients.flavour >= neededFlvr){
                    ingredients.carbohydrate -= neededCarbs
                    ingredients.flavour -= neededFlvr
                    return 'Success'
                } else {

                    let shortIngr = ''
                    if(ingredients.carbohydrate - neededCarbs < 0){
                        shortIngr = 'carbohydrate'
                    } else if(ingredients.flavour - neededFlvr < 0){
                        shortIngr = 'flavour'
                    }
                    return `Error: not enough ${shortIngr} in stock`;        
                }

            } else if(recipe == 'lemonade'){

                let neededCarbs = quantity * 10
                let neededFlvr = quantity * 20

                if(ingredients.carbohydrate >= neededCarbs && ingredients.flavour >= neededFlvr){
                    ingredients.carbohydrate -= neededCarbs
                    ingredients.flavour -= neededFlvr
                    return 'Success'
                } else {
                    
                    let shortIngr = ''
                    if(ingredients.carbohydrate - neededCarbs < 0){
                        shortIngr = 'carbohydrate'
                    } else if(ingredients.flavour - neededFlvr < 0){
                        shortIngr = 'flavour'
                    }
                    return `Error: not enough ${shortIngr} in stock`;
                }

            } else if(recipe == 'burger'){

                let neededCarbs = quantity * 5
                let neededFat = quantity * 7
                let neededFlvr = quantity * 3

                if(ingredients.carbohydrate >= neededCarbs && ingredients.fat >= neededFat && ingredients.flavour >= neededFlvr){
                    ingredients.carbohydrate -= neededCarbs
                    ingredients.fat -= neededFat
                    ingredients.flavour -= neededFlvr
                    return 'Success'
                } else {

                    let shortIngr = ''
                    if(ingredients.carbohydrate - neededCarbs < 0){
                        shortIngr = 'carbohydrate'
                    } else if(ingredients.fat - neededFat < 0){
                        shortIngr = 'fat'
                    } else if(ingredients.flavour - neededFlvr < 0){
                        shortIngr = 'flavour'
                    }
                    return `Error: not enough ${shortIngr} in stock`;
                }

            } else if(recipe == 'eggs'){

                let neededProtein = quantity * 5
                let neededFat = quantity * 1
                let neededFlvr = quantity * 1

                if(ingredients.protein >= neededProtein && ingredients.fat >= neededFat && ingredients.flavour >= neededFlvr){
                    ingredients.protein -= neededProtein
                    ingredients.fat -= neededFat
                    ingredients.flavour -= neededFlvr
                    return 'Success'
                } else {

                    let shortIngr = ''
                    if(ingredients.protein - neededProtein < 0){
                        shortIngr = 'protein'
                    } else if(ingredients.fat - neededFat < 0){
                        shortIngr = 'fat'
                    } else if(ingredients.flavour - neededFlvr < 0){
                        shortIngr = 'flavour'
                    }
                    return `Error: not enough ${shortIngr} in stock`;
                }

            } else if(recipe == 'turkey'){

                let neededProtein = quantity * 10
                let neededCarbs = quantity * 10
                let neededFat = quantity * 10
                let neededFlvr = quantity * 10

                if(ingredients.protein >= neededProtein && ingredients.carbohydrate >= neededCarbs && ingredients.fat >= neededFat && ingredients.flavour >= neededFlvr){
                    ingredients.protein -= neededProtein
                    ingredients.carbohydrate -= neededCarbs
                    ingredients.fat -= neededFat
                    ingredients.flavour -= neededFlvr
                    return 'Success'
                } else {

                    let shortIngr = ''
                    if(ingredients.protein - neededProtein < 0){
                        shortIngr = 'protein'
                    } else if(ingredients.carbohydrate - neededCarbs < 0){
                        shortIngr = 'carbohydrate'
                    } else if(ingredients.fat - neededFat < 0){
                        shortIngr = 'fat'
                    } else if(ingredients.flavour - neededFlvr < 0){
                        shortIngr = 'flavour'
                    }                
                    return `Error: not enough ${shortIngr} in stock`;
                }

            }

        } else if(command == 'report'){

            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`
        }
    }
    return cook
}

let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 