import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import camp1 from '../assets/camp/1.jpg';
import camp2 from '../assets/camp/2.jpg';
import test1 from '../assets/testi/Testimoni1.jpg';
import test2 from '../assets/testi/Testimoni2.jpg';
import test3 from '../assets/testi/Testimoni3.png';
import test4 from '../assets/testi/Testimoni4.jpg';
import test5 from '../assets/testi/Testimoni5.jpg';
import test6 from '../assets/testi/Testimoni6.jpg';
import staff1 from '../assets/pengajar/pengajar1.jpg';
import staff2 from '../assets/pengajar/pengajar2.jpg';
import staff3 from '../assets/pengajar/pengajar3.jpg';
import staff4 from '../assets/pengajar/pengajar4.jpg';
import staff5 from '../assets/pengajar/pengajar5.jpg';
import staff6 from '../assets/pengajar/pengajar6.jpg';
import staff7 from '../assets/pengajar/Pengajar7.jpg';
import staff8 from '../assets/pengajar/Pengajar8.jpg';
import jadwal from '../assets/document/JadwalKegiatanJuaraSBMPTNCamp.pdf';




const Apakata = () => (
    <div className="container" style={{marginTop:"150px"}}>
        <h3 align="center">Apa Kata Mereka??</h3>
        <br/><br/>
        <div className="row">
            
            <div className="col-md-4" align="center">                
                <img src={test1} alt="" className="img-responsive img-testi"/>                
                <p className="comment-testi">Bla.. Bla..</p>
                <label htmlFor="">
                    Dhoni Hartanto, ST MT - Alumni ITS - Dosen Universitas Negeri Semarang
                </label>
            </div>
            
            <div className="col-md-4" align="center">                
                <img src={test2} alt="" className="img-responsive img-testi" />                
                <p className="comment-testi">Bla.. Bla..</p>
                <label htmlFor="">
                    Dhoni Hartanto, ST MT - Alumni ITS - Dosen Universitas Negeri Semarang
                </label>
            </div>
            
            <div className="col-md-4" align="center">                
                <img src={test3} alt="" className="img-responsive img-testi" />                
                <p className="comment-testi">Bla.. Bla..</p>
                <label htmlFor="">
                    Dhoni Hartanto, ST MT - Alumni ITS - Dosen Universitas Negeri Semarang
                </label>
            </div>
            
            <div className="col-md-4" align="center">                
                <img src={test4} alt="" className="img-responsive img-testi" />                
                <p className="comment-testi">Bla.. Bla..</p>
                <label htmlFor="">
                    Dhoni Hartanto, ST MT - Alumni ITS - Dosen Universitas Negeri Semarang
                </label>
            </div>

            <div className="col-md-4" align="center">                
                <img src={test5} alt="" className="img-responsive img-testi" />                
                <p className="comment-testi">Bla.. Bla..</p>
                <label htmlFor="">
                    Dhoni Hartanto, ST MT - Alumni ITS - Dosen Universitas Negeri Semarang
                </label>
            </div>

            <div className="col-md-4" align="center">                
                <img src={test6} alt="" className="img-responsive img-testi" />                
                <p className="comment-testi">Bla.. Bla..</p>
                <label htmlFor="">
                    Dhoni Hartanto, ST MT - Alumni ITS - Dosen Universitas Negeri Semarang
                </label>
            </div>

        </div>

    </div>
)

const Staff = () => (

    <div className="container-fluid staff" style={{marginTop:"150px"}}>
        <h3 align="center">Staff Pengajar</h3>
        <br/><br/>
        <div className="row">
            
            <div className="col-md-3" align="center">                
                <img src={staff1} alt="" className="img-responsive img-staff"/>                                
                <label htmlFor="">
                    Achmad Ferdiansyah PP ST. MT.
                </label>
            </div>

            <div className="col-md-3" align="center">                
                <img src={staff2} alt="" className="img-responsive img-staff"/>                                
                <label htmlFor="">
                    Andre Ashfahani ST. Msc.
                </label>
            </div>

            <div className="col-md-3" align="center">                
                <img src={staff3} alt="" className="img-responsive img-staff"/>                                
                <label htmlFor="">
                    M. Mujtaba Mitra Zuana S.Pd
                </label>
            </div>

            <div className="col-md-3" align="center">                
                <img src={staff4} alt="" className="img-responsive img-staff"/>                                
                <label htmlFor="">
                    Nurbani Fatmala S.Si M.Si.
                </label>
            </div>

            <div className="col-md-3" align="center">                
                <img src={staff5} alt="" className="img-responsive img-staff"/>                                
                <label htmlFor="">
                    Herry Sufyan Hadi ST. MT.
                </label>
            </div>

            <div className="col-md-3" align="center">                
                <img src={staff6} alt="" className="img-responsive img-staff"/>                                
                <label htmlFor="">
                    Aldi Gunawan S.Si
                </label>
            </div>

            <div className="col-md-3" align="center">                
                <img src={staff7} alt="" className="img-responsive img-staff"/>                                
                <label htmlFor="">
                    Agustin Leny Putri S.Si
                </label>
            </div>

            <div className="col-md-3" align="center">                
                <img src={staff8} alt="" className="img-responsive img-staff"/>                                
                <label htmlFor="">
                    Rohim Aminullah Firdaus S.Pd M.Si
                </label>
            </div>


        </div>
    </div>
)

class Home extends Component{
    render(){
        return(
            <div className="home" style={{marginBottom:"100px"}} id="home">
            <div id="myCarousel" className="carousel slide caption-animation" data-ride="carousel" >
          
              <div className="carousel-inner">
                <div className="item active">
                  <img src={camp1} alt="Chania" className="img-responsive"/>
                  <div className="carousel-caption camp-caption">
                    <label className="label label-info">Juara SBMPTN</label>
                    <p>Camp 30 hari penuh persiapan SBMPTN khusus ITS</p>
                  </div>
                </div>
        
                <div className="item">
                  <img src={camp2} alt="Chicago" className="img-responsive" />
                  <div className="carousel-caption camp-caption">
                    <label className="label label-info">ITS Banget!!</label>
                    <p>GARANSI UANG KEMBALI jika tidak lulus SBMPTN khusus ITS</p>
                  </div>
                </div>        
              </div>
          
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
        
            <div className="vid">
              <div className="container-fluid">
              <h3 align="center">Kenalan Yuk!!</h3>
              <br/>
                <div className="row">
                  <div className="col-md-6" align="center">                    
                    {/* <video className="img-responsive" controls autoPlay="true">
                        <source src="https://www.youtube.com/watch?v=4xhcsx_jxpc" type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />                                                
                    </video>         */}
                    
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe 
                        title="Sang Juara SBMPTN"
                        className="embed-responsive-item"
                        height="1200"
                        width="auto"
                        src="https://www.youtube.com/embed/4xhcsx_jxpc?rel=0&showinfo=0&ecver=1&autoplay=1" frameborder="0">
                        </iframe>
                    </div>

        
                  </div>
                  <div className="col-md-6">
                    
                      <p className="par">Program Juara SBMPTN Camp adalah program camp selama 30 hari penuh untuk persiapan SBMPTN 2018. Program ini diselenggarakan oleh Sang Juara School yaitu bimbingan belajar IPA yang telah berpengalaman sejak tahun 2011.</p>
                      <p className="par">Selama 30 hari peserta camp akan dikarantina untuk mempersiapkan keberhasilan mereka di ujian SBMPTN dan Ujian Mandiri PTN. Camp akan diadakan di kota Surabaya.</p>
                      <p className="par">Selain belajar materi SBMPTN, siswa juga akan diberikan pendampingan bimbingan spiritual (Shalat Berjamaah tepat waktu Shalat Tahajud,Shalat Dhuha, Mengaji) bagi siswa muslim selama camp. Selain itu siswa akan diajak untuk melakukan kunjungan kampus, motivation class, outbond dan doa bersama sebagai penunjang agar siswa siap untuk menghadapi SBMPTN 2018.</p>
                      <a href={{jadwal}} className="btn btn-info hidden-xs hidden-sm" target="__blank">Jadwal Kegiatan</a>
                      <div className="container" align="center"><a href={{jadwal}} className="btn btn-info hidden-lg hidden-md" target="__blank">Jadwal Kegiatan</a></div>
                    
                  </div>
                </div>
              </div>
        
            </div>

            <Apakata></Apakata>
            <Staff></Staff>
            
            
            </div>

            
        );
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));



export default Home;