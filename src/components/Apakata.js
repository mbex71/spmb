import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Apakata extends Component{
    render(){
        return(
            <div className="container">
            <h3 align="center">Apa Kata Mereka??</h3>
            <br/><br/>
            <div className="row">
                
                <div className="col-md-4 col-testi" align="center">                
                    <img src="/assets/testi/Testimoni1.jpg" alt="" className="img-responsive img-testi"/>                
                    <p className="comment-testi">
                    Program juara sbmptn camp dapat menjadi pilihan utama dalam mempersiapkan ke jenjang perkuliahan. Berbeda dengan yang lain, program ini ekselen karena menawarkan sesuatu yang berbeda, peserta tidak hanya dididik penyelesaian soal-soal tetapi juga disiapkan dari segi spiritualitas dan mentalitas sehingga menjadi pribadi yang tangguh dalam menggapai sukses sbmptn. Nice and excellence program.
                    <br/><br/>
                    <label htmlFor="">
                        Dhoni Hartanto, ST MT - Alumni ITS - Dosen Universitas Negeri Semarang
                    </label>
                    </p>
    
                </div>
                
                <div className="col-md-4 col-testi" align="center">                
                    <img src="/assets/testi/Testimoni2.jpg" alt="" className="img-responsive img-testi" />                
                    <p className="comment-testi">
                    Masuk perguruan tinggi adalah impian hampir semua siswa SMA yang salah satu jalan menuju kesana adalah dengan lulus tes. Tes masuk perguruan tinggi umumnya komprehensif mencakup materi kelas X hingga XII. Maka, penting sekali untuk mengulang pelajaran dari awal. Salah satu cara jitunya adalah dengan latihan, latihan dan latihan. Juara SBMPTN Camp ini adalah salah satu tempat berlatih yang menarik dan menyenangkan.
                    <br/><br/>
                    <label htmlFor="">
                    Abdul Halim, ST MSc - Alumni ITS - Dosen Institut Teknologi Sains Bandung
                    </label>
                    </p>
    
                </div>
                
                <div className="col-md-4 col-testi" align="center">                
                    <img src="/assets/testi/Testimoni3.png" alt="" className="img-responsive img-testi" />                
                    <p className="comment-testi">Setelah mengikuti program Alhamdulillah saya diterima sebagai mahasiswa Teknik Sistem perkapalan ITS. Pengajarnya ramah, sabar, telaten, cara penyampaian materinya juga cukup jelas dan kalau diskusi juga seru menyenangkan.
                    <br/><br/>
                    <label htmlFor="">
                    M. Irsyad Saihilmi Mahasiswa T.Sistem Perkapalan ITS
                    </label>
                    </p>
    
    
                </div>
                
                <div className="col-md-4 col-testi" align="center">                
                    <img src="/assets/testi/Testimoni4.jpg" alt="" className="img-responsive img-testi" />                
                    <p className="comment-testi">Ikut sbmptn camp menyenangkan. Punya temen baru, pengalaman baru. Trus juga ga melulu belajar terus. Ada refreshingnya. Belajarnya juga ga monoton jadi ga bosen. Kalo terutama aku camp ini menghasilkan maksudnya aku bisa masuk PTN pilihan. Oh iya satu lagi. Gurunya mantap jaya
                    <br/><br/>
                    <label htmlFor="">
                    Qoriyana M Imananda - Mahasiswa UPN Surabaya
                    </label>
                    </p>
    
                </div>
    
                <div className="col-md-4 col-testi" align="center">                
                    <img src="/assets/alumni/Panji.PNG" alt="" className="img-responsive img-testi" />                
                    <p className="comment-testi">Selama pembelajaran menghadapi tes SBMPTN, Juara SBMPTN Camp sangat membantu saya. Dengan karantina selama 1 bulan membuat saya fokus dalam belajar. Terima Kasih Juara SBMPTN Camp.
                    <br/><br/>
                    <label htmlFor="">
                    Panji Aditya : SMAN 5 Balikpapan - Tek.lingkungan ITS
                    </label>
                    </p>
    
                </div>
    
                <div className="col-md-4 col-testi" align="center">                
                    <img src="/assets/alumni/Ricky.PNG" alt="" className="img-responsive img-testi" />                
                    <p className="comment-testi">Terima Kasih Juara SBMPTN Camp. Materi, Pembelajaran, Soal-Soal, Guru-Gurunya top banget. Semuanya benar-benar bermanfaat, suasananya juga sangat mendukung buat fokus belajar
                    <br/><br/>
                    <label htmlFor="">
                    Ricky Dana Setiawan -  SMAN 17 Surabaya - Kimia MIPA ITS
                    </label>
                    </p>
    
                </div>
    
            </div>
    
        </div>
        );
    }

}

ReactDOM.render(<Apakata />, document.getElementById('root'));

export default Apakata