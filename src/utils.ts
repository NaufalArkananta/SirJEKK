function hitungRataRata(student: Siswa): number {
    const total = (student.math + student.english + student.biology)/3;
    return total;
}

export {hitungRataRata}


type Siswa = {
    nama: string,
    nis: number,
    tanggalLahir: Date,
    math: number,
    english: number,
    biology: number

}

export {Siswa}