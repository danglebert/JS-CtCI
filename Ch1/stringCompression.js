const strCompress = str => {
  if (!str.length) return '';

  let count = 1;
  let base = 0;
  let i = 1;

  while (str[base] === str[i]) {
    count++;
    i++;
  }

  return str[0] + count + strCompress(str.slice(i));
};
