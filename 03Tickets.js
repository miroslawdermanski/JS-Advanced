function tickets(array, sortCriteria){

    let tickets = []

    for(let ticket of array){

        let [destinationName, price, status] = ticket.split('|')
        tickets.push({
            destination: destinationName,
            price: Number(price),
            status: status
        })
    }
    if(sortCriteria == 'destination'){
        tickets.sort((a, b) => a.destination.localeCompare(b.destination))
    } else if(sortCriteria == 'price'){
        tickets.sort((a, b) => a.price - b.price)
    } else if(sortCriteria == 'status'){
        tickets.sort((a, b) => a.status.localeCompare(b.status))
    }
    return tickets
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'))   