function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      const studentListRows = document.querySelectorAll('table tbody tr')
      const searchFieldEl = document.querySelector('#searchField')
      const searchInput = searchFieldEl.value.trim().toLowerCase()

      const studentList = Array.from(studentListRows).map((el) => el.innerText.toLowerCase())

      const result = []

      studentListRows.forEach(row => {
         row.classList.remove('select')
      })

      for(let i = 0; i < studentList.length; i++){
         if(studentList[i].includes(searchInput)){
            result.push(i)
         }
      }

      result.forEach((pos, idx) => {
         studentListRows[pos].classList.add('select')
      })

      searchFieldEl.value = ''
   }
}