const matrixSize = [];
const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const matrixRead = (props) => {
  const arrMatrix = [];
  let tmpArr = [];
  for (let i = 1; i < parseInt(props[0]) + 1; i++) {
    tmpArr = [];
    for (let i2 = 1; i2 < parseInt(props[1]) + 1; i2++) {
      tmpArr.push(i2 * i);
    }
    arrMatrix.push(tmpArr);
  }
  console.table(arrMatrix);
};
readLine.question('Masukkan row matrix : ', (input) => {
  let output = '';
  matrixSize[0] = input;
  readLine.question('Masukkan columns matrix : ', (input) => {
    let output = '';
    matrixSize[1] = input;
    matrixRead(matrixSize);
    readLine.close();
  });
});
