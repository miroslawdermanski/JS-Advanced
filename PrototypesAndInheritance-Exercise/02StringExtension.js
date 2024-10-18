(function(){

    String.prototype.ensureStart = function(str){
        if(!this.startsWith(str)){
            return str + this
        }
        return this.toString()
    }

    String.prototype.ensureEnd = function(str){
        if(!this.endsWith(str)){
            return this + str
        }
        return this.toString()
    }

    String.prototype.isEmpty = function(){
        return this.length == 0 ? true : false
    }

    String.prototype.truncate = function(n){
        if(this.length <= n){
            return this.toString()
        }
        if(n < 4){
            return '.'.repeat(n)
        }
        if(!this.includes(' ')){
            return this.slice(0, n-3) + '...'
        }

        let words = this.split(' ')
        let result = ''

        for(let word of words){
            if(result.length + word.length + 3 > n) break;
            result += word + ' ';
        }
        return result.trim() + '...'
    }

    String.format = function(string, ...params){

        return string.replace(/{(\d+)}/g, (match, number) => {
            return typeof params[number] != 'undefined' ? params[number] : match
        })
    }
})()

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
