function argumentInfo(arg1, arg2, arg3){

    let collection = new Map()

    for(let argument of arguments){

        let typeOfArg = typeof argument
        console.log(`${typeOfArg}: ${argument}`)
        
        if(collection.has(typeOfArg)){

            collection.set(typeOfArg, collection.get(typeOfArg) + 1);
        } else {
            collection.set(typeOfArg, 1);
        }
    }

    Array.from(collection.entries()).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
        console.log(`${type} = ${count}`);
        
    })
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })