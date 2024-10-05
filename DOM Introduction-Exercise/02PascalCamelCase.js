function solve(){

    let frstInput = document.getElementById('text').value
    let scndInput = document.getElementById('naming-convention').value

    frstInput = frstInput.split(' ').map(x => x.toLowerCase())
    if(scndInput == 'Camel Case') {

        for(let i = 1; i < frstInput.length; i++){
            
            let letter = frstInput[i][0].toUpperCase()
            frstInput[i] = frstInput[i].split('')
            frstInput[i][0] = letter
            frstInput[i] = frstInput[i].join('')
        }
        frstInput = frstInput.join('')
    } else if(scndInput == 'Pascal Case'){

        for(let i = 0; i < frstInput.length; i++){
            
            let letter = frstInput[i][0].toUpperCase()
            frstInput[i] = frstInput[i].split('')
            frstInput[i][0] = letter
            frstInput[i] = frstInput[i].join('')
        }
        frstInput = frstInput.join('')
    } else {

        frstInput = 'Error!'
    }

    document.getElementById('result').textContent = frstInput
}