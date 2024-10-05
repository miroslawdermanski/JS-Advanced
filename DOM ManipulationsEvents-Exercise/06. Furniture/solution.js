function solve() {

  const generateBtnEl = document.getElementsByTagName('button')[0]
  generateBtnEl.addEventListener('click', generate)

  const buyBtnEl = document.getElementsByTagName('button')[1]
  buyBtnEl.addEventListener('click', buy)

  function buy(){

    let resultTextBoxEl = document.querySelectorAll('#exercise textarea')[1]
    let furnitureNames = []
    let totalPrice = 0
    let avrgDecFactor = 0
    let decFactorSum = 0

    let furnitureItems = document.querySelectorAll('tbody tr')
    furnitureItems.forEach(row => {
      let checkbox = row.getElementsByTagName('input')[0]
      if(checkbox.checked){
        let cells = row.querySelectorAll('td')
        let name = cells[1].children[0].textContent
        let price = Number(cells[2].children[0].textContent)
        let decFactor = Number(cells[3].children[0].textContent)
        furnitureNames.push(name)
        totalPrice += price
        decFactorSum += decFactor
      }
      avrgDecFactor = decFactorSum / furnitureNames.length
    })
    resultTextBoxEl.value = `Bought furniture: ${furnitureNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avrgDecFactor}`
  }

  function generate(){

    let inputTextArr = document.querySelector('#exercise textarea').value
    console.log(inputTextArr);
    
    let inputToObjectArr = JSON.parse(inputTextArr)
    console.log(inputToObjectArr);
    
    for(let object of inputToObjectArr){
      let objectTR = document.createElement('tr')

      let objectTdImg = document.createElement('td')
      let imgEl = document.createElement('img')
      imgEl.src = object.img
      objectTdImg.appendChild(imgEl)
      objectTR.appendChild(objectTdImg)

      let objectTdName = document.createElement('td')
      let nameParagraph = document.createElement('p')
      nameParagraph.textContent = object.name
      objectTdName.appendChild(nameParagraph)
      objectTR.appendChild(objectTdName)

      let objectTdPrice = document.createElement('td')
      let priceParagraph = document.createElement('p')
      priceParagraph.textContent = object.price
      objectTdPrice.appendChild(priceParagraph)
      objectTR.appendChild(objectTdPrice)

      let objectTdDecFactor = document.createElement('td')
      let decFactorParagraph = document.createElement('p')
      decFactorParagraph.textContent = object.decFactor
      objectTdDecFactor.appendChild(decFactorParagraph)
      objectTR.appendChild(objectTdDecFactor)

      let checkBoxTd = document.createElement('td')
      let checkBox = document.createElement('input')
      checkBox.setAttribute('type', 'checkbox')
      checkBoxTd.appendChild(checkBox)
      objectTR.appendChild(checkBoxTd)

      document.querySelector('tbody').appendChild(objectTR)
    }
  }
}