import { hitungRataRata,Siswa } from "./utils";

// let nama: string = 'nopal'

// let nopal: Siswa = {
//     nama: 'nopal',
//     nis: 111111,
//     tanggalLahir: new Date('2007-07-20')
// }

// console.log(`Nama saya ${nopal.nama} dengan nis ${nopal.nis} lahir pada tahun ${nopal.tanggalLahir.getFullYear()}`)

let students: Siswa[] = [
    {
        nama: 'Khali',
        nis: 101,
        tanggalLahir: new Date('2006-06-15'),
        math: 80,
        english: 75,
        biology: 60
    },
    {
        nama: 'Bobby Lesley',
        nis: 102,
        tanggalLahir: new Date('2005-05-20'),
        math: 70,
        english: 90,
        biology: 80
    },
    {
        nama: 'Bautista',
        nis: 103,
        tanggalLahir: new Date('2004-04-10'),
        math: 75,
        english: 80,
        biology: 75
    },
    {
        nama: 'The Rock',
        nis: 104,
        tanggalLahir: new Date('2004-04-10'),
        math: 90,
        english: 90,
        biology: 85
    }
]

// for (let i = 0; i < students.length; i++) {
//     const avg = students[i].math+students[i].english+students[i].biology
// }


//rata rata nilai setiap siswa

    students.forEach((student) => {
    const average = hitungRataRata(student);
    console.log(`Nama: ${student.nama}`);
    console.log(`Rata-rata Nilai: ${average.toFixed(2)}`);
});

//nilai tertinggi di math
const max = students.reduce(function(prev, current) {
    return (prev.math > current.math) ? prev : current
})

console.log(`Nama: ${max.nama} \nNilai MTK: ${max.math}`)

//siswa terbaik keseluruhan
const nilaiTerbaikRataRata = students.reduce((prev, current) => {
    const prevAverage = hitungRataRata(prev)
    const currentAverage = hitungRataRata(current)
    return prevAverage > currentAverage ? prev : current;
    });
    
console.log(`Siswa Terbaik Rata-rata: ${nilaiTerbaikRataRata.nama}`);
console.log(`Rata-rata Nilai: ${nilaiTerbaikRataRata.math}`);

//Nilai biology dibawah kkm
const nialiBiologi = students.filter((student) =>{
    return student.biology < 80
})
// const nialiBiologi = students.find((student) =>{
//     return student.biology < 80
// })

console.log(`\nSiswa dengan nilai biology dibawah KKM adalah:`)

nialiBiologi.forEach((student) => {
    console.log(`\nNama: ${student.nama} \nNilai Biology ${student.biology}`)
})

// if(nialiBiologi){
//     console.log(`\nNama: ${nialiBiologi.nama} \nNilai Biology ${nialiBiologi.biology}`)
// }else {
//     console.log(`\nTidak ada siswa yang nilai biology dibawah KKM`)
// }


//siswa yang nilainya rata rata diatas 80

// let nilaiRataRata = students.find((student) =>{
//     return hitungRataRata(student) > 80
// })

// if(nilaiRataRata){
//     console.log(`\nSiswa yang nilainya rata rata diatas 80 adalah:`)
//     console.log(`\nNama: ${nilaiRataRata.nama} \nNilai Biology ${nilaiRataRata.biology}`)
// } else {
//     console.log(`\nTidak ada siswa yang nilainya rata rata diatas 80`)
// }

let studentsAverageUp80 = students.filter((student) =>{
    return hitungRataRata(student) > 80
})

console.log(`\nSiswa yang nilainya rata rata diatas 80 adalah:`)

studentsAverageUp80.forEach((student) => {
    let average = hitungRataRata(student)
    console.log(`\nNama: ${student.nama} \nNilai Biology ${average.toFixed(2)}`)
})


//===================================
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     console.log(`Nama saya ${students[i].nama} dengan nis ${students[i].nis} lahir pada tahun ${students[i].tanggalLahir.getFullYear()}`)
// }

// students.forEach(student =>  {
//     console.log(`nama: ${student.nama}`)
//     console.log(`nis: ${student.nis}`)
//     console.log(`tanggal lahir: ${student.tanggalLahir}`)
// })