function extract(elementId){

    let paragraph = document.getElementById(elementId).textContent

    let matcher = /\(([^)]+)\)/g

    let result = paragraph.match(matcher).join('; ')
    return result
}

