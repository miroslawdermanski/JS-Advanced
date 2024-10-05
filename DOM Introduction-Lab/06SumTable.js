function sum(){

    let table = document.querySelectorAll('table tr')
    let total = 0
    for (let i = 1; i < table.length; i++) {
        let cols = table[i].children
        total += Number(cols[1].textContent)
    }
    document.getElementById('sum').textContent = total
}