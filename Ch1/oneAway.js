const oneAway = (str1, str2) => {
  const shorter = str1.length <= str2.length ? str1 : str2;
  const longer = str1.length > str2.length ? str1 : str2;
  if (longer.length - shorter.length > 1) return false;

  const longerCounts = longer.split('').reduce((obj, let) => {
    if (!obj[let]) obj[let] = 1;
    else obj[let]++;
    return obj;
  }, {})

  for (let i = 0; i < shorter.length; ++i) {
    if (longerCounts[shorter[i]]) longerCounts[shorter[i]]--;
  }

  return Object.values(longerCounts).filter(x => x !== 0).length <= 1;
};
