( function(){

    Array.prototype.last = function(){
        return this[this.length - 1]
    }

    Array.prototype.skip = function(n){
        return this.slice(n)
        // let result = []
        // for(let i = n; i < this.length; i++){
        //     result.push(this[i])
        // }
        // return result
    }

    Array.prototype.take = function(n){
        return this.slice(0, n)
        // let result = []
        // for(let i = 0; i <= n; i++){
        //     result.push(this[i])
        // }
        // return result
    }

    Array.prototype.sum = function(){
        let sum = 0
        this.forEach((el) => sum += el)
        return sum
    }

    Array.prototype.average = function(){
        return this.sum() / this.length
    }
})()