class List{

    constructor(){
        this.list = []
        this.size = this.list.length
    }

    add(el){
        if(typeof el == 'number'){
            this.list.push(el)
            this.size = this.list.length
            this.list.sort((a, b) => a - b)
            return this.list
        }
    }

    remove(idx){
        if(this.list[idx] != undefined){
            this.list.splice(idx, 1)
            this.size = this.list.length
            return this.list
        }
    }

    get(idx){
        if(this.list[idx] != undefined){
            return this.list[idx]
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
