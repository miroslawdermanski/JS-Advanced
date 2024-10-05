function factory(library, orders){

    let fulfilledOrders = []

    for(let order of orders){

        let name = order.template.name
        let fulfilledOrder = {name}
        for(let part of order.parts){

            if(library.hasOwnProperty(part)){

                fulfilledOrder[part] = library[part]
            }
        }
        fulfilledOrders.push(fulfilledOrder)
    }
    return fulfilledOrders
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
{
    template: { name: 'ACME Printer'},
    parts: ['print']      
},
{
    template: { name: 'Initech Scanner'},
    parts: ['scan']      
},
{
    template: { name: 'ComTron Copier'},
    parts: ['scan', 'print']      
},
{
    template: { name: 'BoomBox Stereo'},
    parts: ['play']      
}];

const products = factory(library, orders);
console.log(products);
  