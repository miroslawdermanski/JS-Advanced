function addItem() {
    
    const inputValue = document.getElementById('newItemText').value
    if(inputValue.length == 0) return

    let list = document.getElementById('items')

    let newListItemEl = document.createElement('li')
    newListItemEl.textContent = inputValue

    let remove = document.createElement('a')
    let linkText = document.createTextNode('[Delete]')
    remove.appendChild(linkText)
    remove.href = '#'
    remove.addEventListener('click', deleteItem)

    newListItemEl.appendChild(remove)
    list.appendChild(newListItemEl)

    function deleteItem(){

        newListItemEl.remove()
    }
    document.getElementById('newItemText').value = ''
}