function validate() {
    
    let emailInputEl = document.getElementById('email')
    emailInputEl.addEventListener('change', function(e){
        let emailInput = emailInputEl.value
        let pattern = /[a-z]+\@[a-z]+\.[a-z]+/
        if(!pattern.test(emailInput)){
            emailInputEl.className = "error"
        } else {
            emailInputEl.classList.remove('error')
        }
    })   
}