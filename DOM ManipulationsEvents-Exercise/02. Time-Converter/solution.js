function attachEventsListeners() {

    let allDivSections = document.querySelectorAll('main div')

    for(let div of allDivSections){

        let divButton = div.querySelector('[type="button"]')
        divButton.addEventListener('click', function(e){

            let inputId = e.target.id
            
            let inputValue = Number(div.querySelector('[type="text"]').value)

            let days, hours, minutes, seconds

            if(inputId == 'daysBtn'){

                days = inputValue
                hours = inputValue*24
                minutes = hours*60
                seconds = minutes*60
            } else if(inputId == 'hoursBtn'){

                hours = inputValue
                minutes = hours*60
                seconds = minutes*60
                days = inputValue/24
            } else if(inputId == 'minutesBtn'){

                minutes = inputValue
                seconds = minutes*60
                hours = minutes/60
                days = hours/24
            } else if(inputId == 'secondsBtn'){

                seconds = inputValue
                minutes = seconds/60
                hours = minutes/60
                days = hours/24
            }

            document.getElementById('days').value = days
            document.getElementById('hours').value = hours
            document.getElementById('minutes').value = minutes
            document.getElementById('seconds').value = seconds
        })
    }
}