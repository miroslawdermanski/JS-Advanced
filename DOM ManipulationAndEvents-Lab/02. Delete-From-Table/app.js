function deleteByEmail() {
    
    const inputElValue = document.querySelector('input[type="text"]').value.toLowerCase()
    document.querySelector('#result').textContent = ''

    const tBodyRows = document.querySelectorAll('table tbody tr')

    let foundMatch = false
    tBodyRows.forEach((tr) => {
        const name = tr.querySelector('td:nth-child(1)').textContent
        const email = tr.querySelector('td:nth-child(2)').textContent.toLowerCase()

        if(inputElValue == email){
            tr.parentNode.removeChild(tr)
            document.querySelector('#result').textContent = 'Deleted.'
            foundMatch = true
        }
    })
    if(!foundMatch){
        document.querySelector('#result').textContent = 'Not found.'
    }
    
    document.querySelector('input[type="text"]').value = ''
}