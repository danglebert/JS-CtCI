const isRotation = (str1, str2) => {
  const str2Con = str2.concat(str1);
  return str2Con.includes(str1);
};
