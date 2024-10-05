function cars(array){

    let objects = {}

    let comndProcessor = {

        create: (name,parent) => {
            if(parent){
                 // Create a new object inheriting from the parent object
                 objects[name] = Object.create(objects[parent]);
            } else {
                 // Create a new object
                 objects[name] = {};
            }
        },
        set: (name, key, value) => {
            // Set property on the object
            objects[name][key] = value
        },
        print: (name) => {
            // Print the object
            let result = []
            for(let key in objects[name]){

                result.push(`${key}:${objects[name][key]}`)
            }
            console.log(result.join(','));
            
        }
    }

    array.forEach(cmnd => {
        let tokens = cmnd.split(' ')
        if(tokens[0] == 'create'){
            if(tokens.length > 2){
                comndProcessor.create(tokens[1], tokens[3])
            } else {
                comndProcessor.create(tokens[1])
            }
        } else if(tokens[0] == 'set'){
            comndProcessor.set(tokens[1], tokens[2], tokens[3])
        } else if(tokens[0] == 'print'){
            comndProcessor.print(tokens[1])
        }
    })
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])