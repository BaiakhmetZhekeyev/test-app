const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const result = [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];

function rotateMatrix(matrix) {
  const result = [[], [], []];
  result[0][0] = matrix[2][0];
  result[0][1] = matrix[1][0];
  result[0][2] = matrix[0][0];
  result[1][0] = matrix[2][1];
  result[1][1] = matrix[1][1];
  result[1][2] = matrix[0][1];
  result[2][0] = matrix[2][2];
  result[2][1] = matrix[1][2];
  result[2][2] = matrix[0][2];

  return result;
}

console.log(matrix);
console.log(rotateMatrix(matrix));

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

// const result = [
//   [9, 5, 1],
//   [10, 6, 2],
//   [11, 7, 3],
//   [12, 8, 4],
// ];
function rotateAnyMatrix(matrix) {
  const x = matrix[0].length;
  const y = matrix.length;
  const result = [];
  for (let i = 0; i < x; i++) {
    result.push([]);
    for (let j = 0; j < y; j++) {
      result[i][j] = matrix[y - j - 1][i];
    }
  }
  return result;
}

console.log(rotateAnyMatrix(matrix1));
console.log(rotateAnyMatrix(matrix));
