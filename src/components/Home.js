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
            <div className="home">
              
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
              
            </div>
            

            
        );
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));



export default Home;