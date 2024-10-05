function sortArray(arr, order) {

    if (order === 'asc') {

        return arr.sort((a, b) => a - b);  // Sort in ascending order
        
    } else if (order === 'desc') {

        return arr.sort((a, b) => b - a);  // Sort in descending order
    }
}

sortArray([14, 7, 17, 6, 8], 'asc')

sortArray([14, 7, 17, 6, 8], 'desc')