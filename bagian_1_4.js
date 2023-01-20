const arrLama = [
  {
    code: '20000000091',
    nama: 'SKYPUTRA PANCASURYA CILEGON',
  },
];
const arrBaru = [];
arrLama.map((value) => {
  arrBaru.push({ ...value, customer: value.code + ' - ' + value.nama });
});
console.log('Array Lama >>', arrLama);
console.log('Array Baru >>', arrBaru);
