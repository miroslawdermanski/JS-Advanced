function subSum(array, startIdx, endIdx){

    if(startIdx < 0) startIdx = 0
    if(endIdx > array.length-1) endIdx = array.length-1

    if(!Array.isArray(array)){
        return NaN
    } else if(array.length == 0){
        return 0
    } else {
        let sum = 0
        array = array.map(Number)
        for(let i = startIdx; i <= endIdx; i++){
            let curNum = Number(array[i])
            if(isNaN(curNum)) return NaN
            sum += curNum
        }
        return Math.round(sum*100)/100
    }
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))

console.log(subSum([10, 'twenty', 30, 40], 0, 2))

console.log(subSum([], 1, 2))

console.log(subSum('text', 0, 2))