class Contact{

    constructor(firstName, lastName, phone, email){
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.email = email
        this._online = false

        //Create the element
        this.element = document.createElement('article')

        //Create title div
        this.titleDiv = document.createElement('div')
        this.titleDiv.className = 'title'
        this.titleDiv.textContent = `${this.firstName} ${this.lastName}`

        //Button
        this.button = document.createElement('button')
        this.button.innerHTML = '&#8505'
        this.titleDiv.appendChild(this.button)

        //Info div
        this.infoDiv = document.createElement('div')
        this.infoDiv.className = 'info'
        this.infoDiv.style.display = 'none'

        //Phone span
        this.phoneSpan = document.createElement('span')
        this.phoneSpan.textContent = `&phone; ${this.phone}`
        this.infoDiv.appendChild(this.phoneSpan)

        //Email span
        this.emailSpan = document.createElement('span')
        this.emailSpan.textContent = `&#9993; ${this.email}`
        this.infoDiv.appendChild(this.emailSpan)

        this.element.appendChild(this.titleDiv)
        this.element.appendChild(this.infoDiv)

        //Add event listener for the button to toggle visibility
        this.button.addEventListener('click', () => {
            this.infoDiv.style.display = this.infoDiv.style.display == 'none' ? 'block' : 'none'
        })
    }

    //Getter and Setter for the online property
    get online(){
        return this._online
    }

    set online(value){
        this._online = value
        if(this._online){
            this.titleDiv.classList.add('online')
        } else {
            this.titleDiv.classList.remove('online')
        }
    }

    //Render method to append the contact box to the DOM tree
    render(id){
        const parent = document.getElementById(id)
        if(parent){
            parent.appendChild(this.element)
        }
    }
}