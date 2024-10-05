function cookingByNumbers(num, cmnd1, cmnd2, cmnd3, cmnd4, cmnd5){

    let operations = [cmnd1, cmnd2, cmnd3, cmnd4, cmnd5]

    num = Number(num)

    operations.forEach(command => {

        if(command == 'chop'){
            num /= 2
        } else if(command == 'dice'){
            num = Math.sqrt(num)
        } else if(command == 'spice'){
            num += 1
        } else if(command == 'bake'){
            num *= 3
        } else if(command == 'fillet'){
            num -= (0.2*num)
        }
        console.log(num);
    })
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')