function lowestPrices(arr){

    let productsList = new Map();

    for(let item of arr){

        let [townName, prodName, prodPrice] = item.split(' | ')
        prodPrice = Number(prodPrice)
        if(!productsList.has(prodName)) {

            productsList.set(prodName, [prodPrice, townName])
         
        } else {
            let currentPrice = productsList.get(prodName)[0]
            if(prodPrice < currentPrice) {
                productsList.set(prodName, [prodPrice,  townName])
            }
        }
    }
    let products = productsList.entries()
    for(let product of products){
        console.log(`${product[0]} -> ${product[1][0]} (${product[1][1]})`)
    }
}

// lowestPrices(['Sample Town | Sample Product | 1000',
//             'Sample Town | Orange | 2',
//             'Sample Town | Peach | 1',
//             'Sofia | Orange | 3',
//             'Sofia | Peach | 2',
//             'New York | Sample Product | 1000.1',
//             'New York | Burger | 10'])

lowestPrices(['Sample Town | Sample Product | 1000',
            'Sample Town | Orange | 2',
            'Sample Town | Peach | 1',
            'Sofia | Orange | 1',
            'Sofia | Peach | 2',
            'New York | Sample Product | 1000.1',
            'New York | Burger | 10'])