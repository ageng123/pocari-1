let limit = '';
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const SegitigaTerbalik = (limit) => {
  console.log('limit', limit);
  let output = '';
  let i = 1;
  for (let o = parseInt(limit); o > 0; o--) {
    output += '_'.repeat(i) + '*'.repeat(o);
    output += '\n';
    i += 2;
    o -= 2;
  }
  console.log(output);
};
const Segitiga = (limit) => {
  console.log('limit', limit);
  let output = '';
  let i = parseInt(limit);
  for (let o = 1; o < parseInt(limit); o++) {
    output += '_'.repeat(i) + '*'.repeat(o);
    output += '\n';
    i -= 2;
    o += 2;
  }
  console.log(output);
};
const SegitigaSiku = (limit) => {
  console.log('limit', limit);
  let output = '';
  let i = parseInt(limit);
  for (let o = 1; o < parseInt(limit); o++) {
    output += '*'.repeat(o);
    output += '\n';
  }
  console.log(output);
};
const SegitigaLooping = (limit) => {
  SegitigaTerbalik(limit);
  Segitiga(limit);
  SegitigaSiku(limit);
};

readline.question('Masukkan Limit yang ingin dibuat ? ', (cmdInput) => {
  SegitigaLooping(cmdInput);
  readline.close();
});
