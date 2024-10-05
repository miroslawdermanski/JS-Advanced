function validate() {

    document.getElementById('company').addEventListener('change', function(e){
        const companyFieldEl = document.getElementById('companyInfo')
        if(e.target.checked){
            companyFieldEl.style.display = 'block'
        } else {
            companyFieldEl.style.display = 'none'
        }
    })

    document.getElementById('submit').addEventListener('click', function(e){
        e.preventDefault()

        let noIssues = true

        //const usernamePattern = /^[A-Za-z0-9]{3,20}$/
        let usernamePattern = /^[A-Za-z0-9]{3,20}$/
        const usernameInputEl = document.getElementById('username')
        if(!usernamePattern.test(usernameInputEl.value)){
            usernameInputEl.style.borderColor = 'red'
            noIssues = false
        } else {
            usernameInputEl.style.border = 'none'
        }

        const emailPattern = /^.*@.*\..*$/
        //let emailPattern = /^[\w]+\@[\w]+\.[\w]+$/
        const emailInputEl = document.getElementById('email')
        if(!emailPattern.test(emailInputEl.value)){
            emailInputEl.style.borderColor = 'red'
            noIssues = false
        } else {
            emailInputEl.style.border = 'none'
        }

        //const passwordPattern = /^\w{5,15}$/;
        let passwordPattern = /^[A-Za-z0-9_]{5,15}$/
        const passwordInputEl = document.getElementById('password')
        const confirmPassInputEl = document.getElementById('confirm-password')
        if(!passwordPattern.test(passwordInputEl.value) ||
            !passwordPattern.test(confirmPassInputEl.value) ||
            passwordInputEl.value != confirmPassInputEl.value         
        ){
            passwordInputEl.style.borderColor = 'red'
            confirmPassInputEl.style.borderColor = 'red'
            noIssues = false
        } else {
            passwordInputEl.style.border = 'none'
            confirmPassInputEl.style.border = 'none'
        }

        const checkBox = document.getElementById('company')
        if(checkBox.checked){
            const companyNumEl = document.getElementById('companyNumber')
            if(Number(companyNumEl.value) < 1000 || Number(companyNumEl.value) > 9999){
                companyNumEl.style.borderColor = 'red'
                noIssues = false
            } else {
                companyNumEl.style.border = 'none'
            }
        }

        const validDivEl = document.getElementById('valid')
        if(noIssues){
            validDivEl.style.display = 'block'
        } else {
            validDivEl.style.display = 'none'
        }
    })
}
