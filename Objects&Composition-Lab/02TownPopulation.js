function townPopulation(array){

    let cityList = {}

    array.forEach(x => {
        x = x.split(' <-> ')
        if(x[0] in cityList){
            cityList[x[0]] += parseInt(x[1])
        } else {
            cityList[x[0]] = parseInt(x[1])
        }
    })
    for(let city in cityList){

        console.log(`${city} : ${cityList[city]}`)
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])