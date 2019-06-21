const zeroMatrix = arr => {
  const arrCopy = arr.map(arr => arr.slice());

  for (let i = 0; i < arrCopy.length; ++i) {
    for (let j = 0; j < arrCopy[i].length; ++j) {
      if (arrCopy[i][j] === 0) {
        for (let k = 0; k < arr[i].length; ++k) {
          arr[i][k] = 0;
          arr[k][i] = 0;
        }
      }
    }
  }
  return arr;
};
