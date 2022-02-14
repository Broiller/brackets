module.exports = function check(str, bracketsConfig) {


  let arrString = str.split('');
  for (let i = 0; i < arrString.length; i++) {
    bracketsConfig.forEach((el) => {
      if (arrString[i] === el[0] && arrString[i + 1] === el[1]) {
        arrString.splice(i, 2);
        i = -1;
      }   
    })
  }
  return !arrString.length;
}
