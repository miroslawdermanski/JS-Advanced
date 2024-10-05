function storeCatalogue(arr){

    let catalogue = {}

    arr.forEach(x => {
        let [prodName, prodPrice] = x.split(' : ')
        prodPrice = Number(prodPrice)
        catalogue[prodName] = prodPrice
    })
    let sortedCatalogue = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]))
    let curLetter = sortedCatalogue[0][0][0]
    console.log(curLetter);
    
    sortedCatalogue.forEach(item => {
        let itemLetter = item[0][0]
        if(itemLetter !== curLetter){
            curLetter = itemLetter
            console.log(`${curLetter}`)
        }
        console.log(`  ${item[0]}: ${item[1]}`)
    })
}

storeCatalogue(['Appricot : 20.4',
                'Fridge : 1500',
                'TV : 1499',
                'Deodorant : 10',
                'Boiler : 300',
                'Apple : 1.25',
                'Anti-Bug Spray : 15',
                'T-Shirt : 10'])

storeCatalogue(['Banana : 2',
                'Rubic\'s Cube : 5',
                'Raspberry P : 4999',
                'Rolex : 100000',
                'Rollon : 10',
                'Rali Car : 2000000',
                'Pesho : 0.000001',
                'Barrel : 10'])