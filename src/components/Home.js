import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Home extends Component{
    constructor(props){
        super(props);

        this.jadwalHandler = this.jadwalHandler.bind(this);
    }

    jadwalHandler(e){
        e.preventDefault();
        window.open('/assets/document/JadwalKegiatanJuaraSBMPTNCamp.pdf','__blank');
    }

    render(){
        return(
            <div className="home" id="home">
            <div id="myCarousel" className="carousel slide caption-animation" data-ride="carousel" >
          
              <div className="carousel-inner">
                <div className="item active">
                  <img src="/assets/camp/1.jpg" alt="" className="img-responsive"/>
                  <div className="carousel-caption camp-caption">
                    <label className="label label-info">Juara SBMPTN</label>
                    <p>Camp 30 hari penuh persiapan SBMPTN khusus ITS</p>
                  </div>
                </div>
        
                <div className="item">
                  <img src="/assets/camp/2.jpg" alt="" className="img-responsive" />
                  <div className="carousel-caption camp-caption">
                    <label className="label label-info">ITS Banget!!</label>
                    <p>Garansi Uang Kembali Jika Tidak Lulus SBMPTN / Ujian Mandiri ITS 2018</p>
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
                    
                      <p className="par">Program Juara SBMPTN Camp adalah program camp selama 30 hari penuh untuk persiapan SBMPTN 2018. Program ini diselenggarakan oleh Sang Juara School yaitu bimbingan belajar IPA yang telah berpengalaman sejak tahun 2011.</p>
                      <p className="par">Selama 30 hari peserta camp akan dikarantina untuk mempersiapkan keberhasilan mereka di ujian SBMPTN dan Ujian Mandiri PTN. Camp akan diadakan di kota Surabaya.</p>
                      <p className="par">Selain belajar materi SBMPTN, siswa juga akan diberikan pendampingan bimbingan spiritual (Shalat Berjamaah tepat waktu Shalat Tahajud,Shalat Dhuha, Mengaji) bagi siswa muslim selama camp. Selain itu siswa akan diajak untuk melakukan kunjungan kampus, motivation class, outbond dan doa bersama sebagai penunjang agar siswa siap untuk menghadapi SBMPTN 2018.</p>
                      
                      <button className="btn btn-info hidden-xs hidden-sm" onClick={this.jadwalHandler} >Jadwal Kegiatan</button>

                        <div className="container" align="center">
                            <button className="btn btn-info hidden-lg hidden-md" target="__blank" onClick={this.jadwalHandler}>Jadwal Kegiatan</button>
                        </div>
                    
                  </div>
                </div>
              </div>
        
            </div>



            {/* <Apakata></Apakata> */}
            {/* <Staff></Staff>             */}
            
            </div>

            
        );
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));



export default Home;