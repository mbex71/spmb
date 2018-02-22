import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
                      src="https://www.youtube.com/embed/4xhcsx_jxpc?rel=0&showinfo=0&ecver=1&autoplay=0" frameBorder="0">
                      </iframe>
                  </div>

      
                </div>
                <div className="col-md-6">
                  
                    <p className="par">Program Juara SBMPTN Camp adalah program bimbingan belajar (bimbel) camp atau karantina intensif untuk persiapan SBMPTN 2018. Program ini diselenggarakan oleh Sang Juara School yaitu bimbingan belajar IPA yang telah berpengalaman sejak tahun 2011.</p>
                    <p className="par">Selama hampir sebulan penuh, siswa Juara SBMPTN Camp akan dikarantina untuk mempersiapkan keberhasilan mereka di ujian SBMPTN dan Ujian Mandiri PTN 2018. Setiap hari mulai jam 8 pagi sampai jam 9 malam, siswa akan digembleng sesi kelas maupun privat secara intensif untuk belajar materi dan soal soal SBMPTN. Dalam proses pembelajaran, siswa akan dibimbing oleh Tentor Terbaik yang memiliki latar Belakang Alumni S1/S2/S3 maupun dosen dari Institut Teknologi Sepuluh November (ITS) Surabaya. Program ini akan diadakan di kota Surabaya mulai 15 April hingga 8 Mei 2018 dan terbatas hanya untuk 20 peserta.</p>
                    <p className="par">Selain belajar materi SBMPTN, siswa juga akan diberikan pendampingan bimbingan spiritual (Shalat Berjamaah tepat waktu Shalat Tahajud, Shalat Dhuha, Mengaji) bagi siswa muslim selama camp. Selain itu siswa akan diajak untuk melakukan kunjungan kampus, motivation class, outbond dan doa bersama sebagai penunjang agar siswa siap untuk menghadapi SBMPTN 2018.</p>
                    
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

ReactDOM.render('<Kenalan />', document.getElementById('root'));

export default Kenalan;