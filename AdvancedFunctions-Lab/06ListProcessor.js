function listProcessor(array){

    let collection = []

    let processor = {

        add: (str) => collection.push(str),
        remove: (str) => collection = collection.filter((item) => item != str),
        print: () => console.log(collection.join(','))
    }

    array.forEach(command => {
        let [action, value] = command.split(' ');
        processor[action](value);
    })
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])