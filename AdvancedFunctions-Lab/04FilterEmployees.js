function filter(data, criteria){

    data = JSON.parse(data)
    
    let counter = 0
    for(let employee of data){

        let [key, recValue] = criteria.split('-')

        if(employee[key] == recValue){

            let fullName = `${employee['first_name']} ${employee['last_name']}`
            console.log(`${counter}. ${fullName} - ${employee['email']}`);
            counter++
        }
    }
}

filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')