const palindromePermutation = str => {
  const obj = {};

  for (let i = 0; i < str.length; ++i) {
    if (str[i] !== ' ') {
      if (obj[str[i]]) obj[str[i]]++;
      else obj[str[i]] = 1;
    }
  }

  if (Object.values(obj).filter(x => x % 2).length > 1) return false;
  else return true;
};
