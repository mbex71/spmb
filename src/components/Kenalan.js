import React, {Component} from 'react';


class Kenalan extends Component{
    render(){
        return(
            
            <div className="container-fluid vid">
            <h3 align="center">Kenalan Yuk!!</h3>
            <br/>
              <div className="row">
                <div className="col-md-6" align="center">                                        
                  <div className="embed-responsive embed-responsive-16by9">
                      <iframe 
                      title="Sang Juara SBMPTN"
                      className="embed-responsive-item"
                      height="1200"
                      width="auto"
                      src="https://www.youtube.com/embed/7XigVXfL-28?rel=0&showinfo=0&ecver=1&autoplay=0" frameBorder="0">
                      </iframe>
                  </div>

      
                </div>
                <div className="col-md-6">
                  
                    <p className="par">
                    Program Juara SBMPTN Camp adalah program bimbingan belajar (bimbel) camp atau karantina intensif untuk persiapan Test Centre / SBMPTN dan Ujian Mandiri PTN. Program ini diselenggarakan oleh Sang Juara School yaitu bimbingan belajar IPA yang telah berpengalaman sejak tahun 2011.
                    </p>
                    <p className="par">
                    Selama hampir sebulan penuh, siswa Juara SBMPTN Camp akan dikarantina untuk mempersiapkan keberhasilan mereka di ujian SBMPTN dan Ujian Mandiri PTN. Setiap hari mulai jam 8 pagi sampai jam 9 malam, siswa akan digembleng sesi kelas maupun privat secara intensif untuk belajar materi dan soal soal SBMPTN.
                    </p>
                    <p className="par">
                    Dalam proses pembelajaran, siswa akan dibimbing oleh Tentor Terbaik yang memiliki latar Belakang Alumni S1/S2/S3 maupun dosen dari Institut Teknologi Sepuluh November (ITS) dan juga Universitas Airlangga Surabaya. Program ini akan diadakan di kota Surabaya setelah UN SMA/SMK sampai siswa melakukan Test Centre 2019. Bagi siswa yang berminat mendaftar kami sarankan untuk memilih jadwal tes centre pada bulan Mei. Agar suasana belajar lebih fokus maka kami membatasi kuota peserta hanya untuk 40 peserta yang nantinya terbagi menjadi kelas kecil dengan maksimal 8 siswa/kelas.
                    </p>
                    <p className="par">
                    Selain belajar materi SBMPTN, siswa juga akan diberikan pendampingan bimbingan spiritual (Shalat Berjamaah tepat waktu Shalat Tahajud, Shalat Dhuha, Mengaji) bagi siswa muslim selama camp. Selain itu siswa akan diajak untuk melakukan kunjungan kampus, motivation class, outbond dan doa bersama sebagai penunjang agar siswa siap untuk menghadapi SBMPTN 2019 dan diterima di kampus ITS, Unair maupun PTN lain sesuai impian siswa.
                    </p>
                    
                    <button className="btn btn-danger hidden-xs hidden-sm" onClick={this.jadwalHandler} >Jadwal Kegiatan</button>

                      <div className="container" align="center">
                          <button className="btn btn-danger hidden-lg hidden-md" target="__blank" onClick={this.jadwalHandler}>Jadwal Kegiatan</button>
                      </div>
                  
                </div>
              </div>
            </div>      
          
        );
    }
}



export default Kenalan;