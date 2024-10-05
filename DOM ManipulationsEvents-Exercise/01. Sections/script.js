function create(words) {
   
   let contentDivEl = document.getElementById('content')
   words.forEach((word) => {

      let strDivEl = document.createElement('div')

      strParagraph = document.createElement('p')
      strParagraph.textContent = word
      strParagraph.style.display = 'none'

      strDivEl.appendChild(strParagraph)

      strDivEl.addEventListener('click', displayParagraph)
      contentDivEl.appendChild(strDivEl)
   })

   function displayParagraph(event){

      let paragraph = event.target.querySelector('p')
      paragraph.style.display = 'block'
   }
}