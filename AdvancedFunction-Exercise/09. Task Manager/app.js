function solve() {
    
    let input1 = document.getElementById('task')  
    let input2 = document.getElementById('description')
    let input3 = document.getElementById('date')
  

    let addBtn = document.getElementById('add')   
    addBtn.addEventListener('click', add)

    function start(event){

        let articleEl = event.target.parentElement.parentElement
        
        let divEl = articleEl.querySelector('div');
        divEl.remove()
        let newDiv = document.createElement('div')
        newDiv.className = 'flex'

        let delBtn = document.createElement('button')
        delBtn.addEventListener('click', function (e){
            let article = e.target.parentElement.parentElement
            article.remove()
        })
        delBtn.className = 'red'
        delBtn.textContent = 'Delete'
        newDiv.appendChild(delBtn)

        let finishBtn = document.createElement('button')
        finishBtn.addEventListener('click', function(e){
            let article = e.target.parentElement.parentElement
            let div = article.querySelector('div')
            div.remove()
            let completeSection = document.querySelector('h1.green').parentElement.parentElement
            let completeDiv = completeSection.querySelectorAll('div')[1]
            completeDiv.appendChild(article)
        })
        finishBtn.className = 'orange'
        finishBtn.textContent = 'Finish'
        newDiv.appendChild(finishBtn)
        articleEl.appendChild(newDiv)

        let divProgress = document.getElementById('in-progress')
        divProgress.appendChild(articleEl)
    }

    function add(event){
        event.preventDefault(); // Prevent form submission

        if(input1.value.trim() != '' && input2.value.trim() != '' && input3.value.trim() != ''){

            let article = document.createElement('article')

            let h3 = document.createElement('h3')
            h3.textContent = input1.value
            article.appendChild(h3)
            let p1 = document.createElement('p')
            p1.textContent = `Description: ${input2.value}`
            article.appendChild(p1)
            let p2 = document.createElement('p')
            p2.textContent = `Due Date: ${input3.value}`
            article.appendChild(p2)

            let divEl = document.createElement('div')
            divEl.className = 'flex'
            let startBtn = document.createElement('button')
            startBtn.addEventListener('click', start)
            startBtn.className = 'green'
            startBtn.textContent = 'Start'
            divEl.appendChild(startBtn)
            let deleteBtn = document.createElement('button')
            deleteBtn.addEventListener('click', function (e){
                let article = e.target.parentElement.parentElement
                article.remove()
            })
            deleteBtn.className = 'red'
            deleteBtn.textContent = 'Delete'
            divEl.appendChild(deleteBtn)
            article.appendChild(divEl)

            let openSectionEl = document.getElementsByTagName('section')[1]           

            let scndDivEl = openSectionEl.getElementsByTagName('div')[1]
            scndDivEl.appendChild(article)
            
            input1.value = ''
            input2.value = ''
            input3.value = ''
        } else {
            return
        }
    }
}