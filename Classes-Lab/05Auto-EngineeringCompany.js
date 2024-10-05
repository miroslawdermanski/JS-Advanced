function register(array){

    let register = {}

    for(let car of array){
        let [carBrand, carModel, producedCars] = car.split(' | ')
        if(carBrand in register){
            if(carModel in register[carBrand]){
                register[carBrand][carModel] += +producedCars
            } else {
                register[carBrand][carModel] = +producedCars
            }
        } else {
            register[carBrand] = {}
            register[carBrand][carModel] = +producedCars
        }
    }
    return Object.entries(register).forEach((carMaker) => {
        console.log(carMaker[0]);
        Object.entries(carMaker[1]).forEach(model => {
            console.log(`###${model[0]} -> ${model[1]}`);      
        })
    })
}

register(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
    )