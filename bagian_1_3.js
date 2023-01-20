let deret = 0;
const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const calculateFibonacci = (number) => {
  if (number < 1) {
    return 0;
  }
  let constanta = {
    a: 0,
    b: 1,
  };
  for (let i = 1; i < number; i++) {
    const pembantu = constanta.a + constanta.b;
    constanta.a = constanta.b;
    constanta.b = pembantu;
  }
  return constanta.b;
};
readLine.question('Masukkan panjang deret fibonacci : ', (input) => {
  let output = '';
  for (let i = 0; i < input; i++) {
    if (output != '') {
      output += ', ';
    }
    output += calculateFibonacci(i);
  }
  console.log(output);
  readLine.close();
});
