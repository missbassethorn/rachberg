export function buildSolutionRows(solution, width, height) {
  const solutionRows = [];
  const solutionCells = solution.split('')
  for (var i = 0; i < height; i++) {
    const nextSliceIndex= width * i;
    solutionRows.push(solutionCells.slice(nextSliceIndex, nextSliceIndex + width));
  }

  return solutionRows;
}

export function rotateArrayWithLeftPad(array) {
  const depth = maxDepth(array);
  const newArray = [];
  for (let col = 0; col < depth; col++) {
    const colSlice = [];

    for (let row = 0; row < array.length; row++) {
      colSlice.push(array[row][col] ? array[row][col] : null);
    }

    newArray.push(colSlice);
  }

  return newArray.reverse();
}

export function maxDepth(array) {
  return Math.max(...array.map(row => row.length));
}