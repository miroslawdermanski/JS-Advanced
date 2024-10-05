function carFactory(obj){

    let storage = {
        engines: {
            'Small engine': {power: 90, volume: 1800},
            'Normal engine': {power: 120, volume: 2400},
            'Monster engine': {power: 200, volume: 3500}
        },
        carriageTypes: {
            'Hatchback': {type: 'hatchback', color: undefined},
            'Coupe': {type: 'coupe', color: undefined}
        },
    }

    let car = {
        carriage: {}
    }
    for(let requirement in obj){

        if(requirement == 'model'){
            car['model'] = obj.model

        } else if(requirement == 'power'){
            if(obj.power <= 90){
                car['engine'] = storage.engines['Small engine']
            } else if(obj.power <= 120){
                car['engine'] = storage.engines['Normal engine']
            } else if(obj.power <= 200){
                car['engine'] = storage.engines['Monster engine']
            }

        } else if(requirement == 'color'){
            car.carriage['color'] = obj.color

        } else if(requirement == 'carriage'){
            car.carriage['type'] = obj.carriage

        } else if(requirement == 'wheelsize'){
            car['wheels'] = Array(4).fill(obj.wheelsize % 2 === 0 ? obj.wheelsize - 1 : obj.wheelsize)
        }
    }
    return car
}

console.log(carFactory({ model: 'VW Golf II',
            power: 90,
            color: 'blue',
            carriage: 'hatchback',
            wheelsize: 14 }))

console.log(carFactory({ model: 'Opel Vectra',
            power: 110,
            color: 'grey',
            carriage: 'coupe',
            wheelsize: 17 }))          