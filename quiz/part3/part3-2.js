// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log('LOOPING PERTAMA')
let i=1;
for (; i <= 5; i++) {
  console.log('maju sejauh' + ' ' + i + 'x')
}

console.log('LOOPING KEDUA')
for (; i > 1; i--) {
  console.log('mundur sejauh' +' ' + (i-1) +'x')
}
