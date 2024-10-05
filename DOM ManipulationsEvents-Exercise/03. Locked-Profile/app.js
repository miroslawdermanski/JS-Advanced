function lockedProfile() {
   
    let showMoreButtons = document.querySelectorAll('button')

    showMoreButtons.forEach(btn => {
        btn.addEventListener('click', onClick)
    })

    function onClick(e){

        let userInfoEl = e.target.parentElement
        
        let isLockedEl = userInfoEl.querySelector('input[value="unlock"]')
        if(isLockedEl.checked){

            let hiddenField = userInfoEl.getElementsByTagName('div')[0]
            
            if(e.target.textContent == 'Show more'){

                hiddenField.style.display = 'block'
                e.target.textContent = 'Hide it'
                
            } else if(e.target.textContent == 'Hide it'){

                hiddenField.style.display = 'none'
                e.target.textContent = 'Show more'
            }           
        }
    }
}