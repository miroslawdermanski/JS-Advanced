function orbitMatrix(input) {
    let width = input[0];
    let height = input[1];
    let starX = input[2];
    let starY = input[3];

    // Create an empty matrix filled with 0
    let matrix = Array.from({ length: height }, () => Array(width).fill(0));

    // Fill matrix based on distance from the star
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            // Calculate the distance from the star and assign it to the matrix
            matrix[row][col] = Math.max(Math.abs(row - starY), Math.abs(col - starX)) + 1;
        }
    }

    // Output the result matrix
    for (let row of matrix) {
        console.log(row.join(" "));
    }
}

// Test cases
orbitMatrix([5, 5, 0, 0]); // The star is in the top-left corner
orbitMatrix([5, 5, 2, 2]); // The star is in the middle
