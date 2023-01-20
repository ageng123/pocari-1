const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const bacaPecahan = (number) => {
  let pecahan = [];
  let numberArr = number.split('');
  for (let i in numberArr) {
    if (numberArr[i] > 0) {
      let pecahanR = numberArr[i] + '0'.repeat(number.length - i);
      console.log(i);
      pecahan.push(pecahanR);
    }
  }
  console.log(pecahan);
};
readLine.question('Masukkan pecahan Mata Uang ?', (input) => {
  bacaPecahan(input);
  readLine.close();
});
