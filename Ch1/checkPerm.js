const checkPermutation = (str1, str2) => {
  const obj = {};

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; ++i) {
    if (obj[str1[i]]) obj[str1[i]]++;
    else obj[str1[i]] = 1;
  }

  for (let i = 0; i < str2.length; ++i) {
    if (!obj[str2[i]]) return false;
    else obj[str2[i]]--;
  }

  if (Object.values(obj).some(num => num !== 0)) return false;
  else return true;
};
