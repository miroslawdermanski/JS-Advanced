function townsToJson(arr){

    let columns = arr.shift().split('|').filter(x => x.length > 0).map(x => x.trim())

    let townsList = []
    arr.forEach(town => {
        let [townName, lat, long] = town.split('|').filter(x => x.length > 0).map(x => x.trim())
        lat = Number(lat).toFixed(2)
        long = Number(long).toFixed(2)
        let row = {[columns[0]]: townName,
            [columns[1]]: +lat,
            [columns[2]]: +long
        }
        townsList.push(row)
    })
    console.log(JSON.stringify(townsList))
}

townsToJson(['| Town | Latitude | Longitude |',
            '| Sofia | 42.696552 | 23.32601 |',
            '| Beijing | 39.913818 | 116.363625 |'])

townsToJson(['| Town | Latitude | Longitude |',
            '| Veliko Turnovo | 43.0757 | 25.6172 |',
            '| Monatevideo | 34.50 | 56.11 |'])