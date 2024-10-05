function addItem() {
    
    const inputText = document.getElementById('newItemText').value
    const inputValue = document.getElementById('newItemValue').value

    const newOptionEl = document.createElement('option')
    newOptionEl.textContent = inputText
    newOptionEl.value = inputValue

    document.getElementById('menu').appendChild(newOptionEl)

    document.getElementById('newItemText').value = ''
    document.getElementById('newItemValue').value = ''
}