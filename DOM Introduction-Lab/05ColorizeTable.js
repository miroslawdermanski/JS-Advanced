function colorizeRows(){

    let rows = document.querySelectorAll('table tr')
    let idx = 1
    for (let row of rows) {
        if(idx % 2 == 0) row.style.background = 'teal'
        idx++
    }
}