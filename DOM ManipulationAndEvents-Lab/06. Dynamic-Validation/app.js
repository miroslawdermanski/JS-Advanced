function validate() {
    
    const inputEl = document.getElementById('email')

    let regEx = /[a-z]+@[a-z]+\.[a-z]+/g

    inputEl.addEventListener('change', function(){
        if(!regEx.test(inputEl.value)){
            inputEl.classList = 'error'
        } else {
            inputEl.classList.remove('error')
        }
    })
}