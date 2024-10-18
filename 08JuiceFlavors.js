function juiceFlavors(array){

    let juices = {}
    let bottles = new Map()

    for(let item of array){
        let [flavor, quantity] = item.split(' => ')
        if(flavor in juices){
            juices[flavor] += Number(quantity)
        } else {
            juices[flavor] = Number(quantity)
        }
        
        if(juices[flavor] >= 1000){
            let btlsCount = parseInt(juices[flavor] / 1000)
            juices[flavor] = juices[flavor] % 1000
            if(bottles.has(flavor)){
                bottles.set(flavor, bottles.get(flavor) + btlsCount)
            } else {
                bottles.set(flavor, btlsCount)
            }
        }
    }
    bottles.forEach((juice, count) => {
        console.log(`${count} => ${juice}`)
    })
}

juiceFlavors(['Orange => 2000',
            'Peach => 1432',
            'Banana => 450',
            'Peach => 600',
            'Strawberry => 549'])

juiceFlavors(['Kiwi => 234',
            'Pear => 2345',
            'Watermelon => 3456',
            'Kiwi => 4567',
            'Pear => 5678',
            'Watermelon => 6789'])