function focused() {
    
    const sections = document.querySelectorAll('div div')

    sections.forEach((div) => {
        
        const inputs = div.querySelectorAll('input')

        inputs.forEach(input => {

            input.addEventListener('focus', function (){
                div.classList.add('focused')
            })

            input.addEventListener('blur', function(){
                div.classList.remove('focused')
            })
        })
    })
}