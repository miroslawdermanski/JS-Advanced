function getPersons(){

    class Person {

        constructor(firstName, lastName, age, email){
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.email = email
        }
    
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    let result = []

    let anna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com')
    result.push(anna)
    let softUni = new Person('SoftUni', undefined, undefined, undefined)
    result.push(softUni)
    let stephan = new Person('Stephan', 'Johnson', 25, undefined)
    result.push(stephan)
    let gabriel = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    result.push(gabriel)

    return result
}