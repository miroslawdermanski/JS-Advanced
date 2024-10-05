function toggle() {
    
    let curButtonState = document.querySelector('.button').textContent

    if(curButtonState == 'More'){

        document.getElementById('extra').style.display = 'block'
        document.querySelector('.button').textContent = 'Less'
    } else if(curButtonState == 'Less'){

        document.getElementById('extra').style.display = 'none'
        document.querySelector('.button').textContent = 'More'
    }
}