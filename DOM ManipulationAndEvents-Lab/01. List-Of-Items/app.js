function addItem() {
    
    const inputValue = document.querySelector('#newItemText').value

    const newListItem = document.createElement('li')
    newListItem.textContent = inputValue
    document.querySelector('#items').appendChild(newListItem)

    document.querySelector('#newItemText').value = ''
}