function search() {
   
   let typedInput = document.querySelector('#searchText').value

   let towns = document.querySelectorAll('ul li')

   let matchesFound = 0

   for(let i = 0; i < towns.length; i++){

      if (towns[i].textContent.includes(typedInput)){

         towns[i].style.fontWeight = 'bold'
         towns[i].style.textDecoration = 'underline'
         matchesFound++
      }
   }
   document.getElementById('result').textContent = `${matchesFound} matches found`
}
