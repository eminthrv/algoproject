//Given an m x n matrix, return all elements of the matrix in spiral order.
//just google what this means

function spiralOrder(matrix) {
    if (!matrix || matrix.length === 0) return [];

    const result = [];
    let rowStart = 0,
        rowEnd = matrix.length - 1,
        colStart = 0,
        colEnd = matrix[0].length - 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {
        // Traverse right
        for (let i = colStart; i <= colEnd; i++) {
            result.push(matrix[rowStart][i]);
        }
        rowStart++;

        // Traverse down
        for (let i = rowStart; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd]);
        }
        colEnd--;

        if (rowStart <= rowEnd) {
            // Traverse left
            for (let i = colEnd; i >= colStart; i--) {
                result.push(matrix[rowEnd][i]);
            }
        }
        rowEnd--;

        if (colStart <= colEnd) {
            // Traverse up
            for (let i = rowEnd; i >= rowStart; i--) {
                result.push(matrix[i][colStart]);
            }
        }
        colStart++;
    }

    return result;
}

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))