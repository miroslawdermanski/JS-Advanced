function attachEventsListeners() {

    const convertBtnEl = document.querySelector('input[value="Convert"]')
    convertBtnEl.addEventListener('click', convertDistance);

    function convertDistance(){

        const inputValue = Number(document.getElementById('inputDistance').value)
        
        let options = document.getElementById('inputUnits')
        
        let selectedOptionValue = options.querySelector('option:checked').value 
        //let selectedOptionValue = options.value;

        let resultOptions = document.getElementById('outputUnits')
        let selectedResultOptionValue = resultOptions.querySelector('option:checked').value

        let outputEl = document.getElementById('outputDistance')

        let calcOptions = {
            'km': 1000,
            'm': 1,
            'cm': 0.01,
            'mm': 0.001,
            'in': 0.0254,
            'ft': 0.3048,
            'yrd': 0.9144,
            'mi': 1609.34
        }

        let outputValueInMeters = inputValue * calcOptions[selectedOptionValue]
        
        let calcOptions2 = {
            'km': outputValueInMeters/1000,
            'm': outputValueInMeters/1,
            'cm': outputValueInMeters*100,
            'mm': outputValueInMeters*1000,
            'in': outputValueInMeters*39.3701,
            'ft': outputValueInMeters*3.28084,
            'yrd': outputValueInMeters*1.09361,
            'mi': outputValueInMeters*0.000621371
        }

        let result = calcOptions2[selectedResultOptionValue]
        outputEl.value = result
    }
}