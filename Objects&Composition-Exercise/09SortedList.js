function createSortedList(){

    let result = {arr: []}
    result['add'] = function(el){
        result.arr.push(el);
        result['size'] = result.arr.length
        return result.arr.sort((a, b) => a - b)
    }
    result['remove'] = function(idx){
        if(idx >= 0 && idx < result.arr.length){
            result.arr.splice(idx, 1)
            result['size'] = result.arr.length
            return result.arr.sort((a, b) => a - b)
        }
    }
    result['get'] = function(idx){
        if(idx >= 0 && idx < result.arr.length){
            return result.arr[idx];
        }
    }   
    result['size'] = result.arr.length
    return result
}

let list = createSortedList();
list.add(7);
list.add(6);
list.add(5);
console.log(list.get(1)); 
list.remove(1);
console.log(list['size']);

console.log(list.get(1));
