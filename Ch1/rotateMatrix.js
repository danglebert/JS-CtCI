const rotateMatrix = arr => {
  const outer = [];

  for (let i = 0; i < arr.length; ++i) {
    let inner = [];
    for (let j = arr[i].length - 1; j >= 0; --j) {
      inner.push(arr[j][i]);
    }
    outer.push(inner);
  }
  return outer;
};

const testArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ]
