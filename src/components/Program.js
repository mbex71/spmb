import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Program extends Component{
  constructor(props){
    super(props);

    this.state = {
      privateState: true,
      gold: false,
      reguler: false

      
    }
    
    this.regulerHandle = this.regulerHandle.bind(this);
    this.privateHandle = this.privateHandle.bind(this);
    this.goldHandle = this.goldHandle.bind(this);
  }

  privateHandle(e){
    e.preventDefault();
    this.setState({
      privateState:true,
      gold:false,
      reguler:false

    });
  }

  goldHandle(e){
    e.preventDefault();
    this.setState({
      gold:true,
      privateState:false,
      reguler:false
    });
  }

  regulerHandle(e){    
    e.preventDefault();
    this.setState({
      gold:false,
      privateState:false,
      reguler:true
    });
  }

    render(){
        return(
                       
            <div className="program">
            <div className="container-fluid">
              <h3 align="center">Program Kami Lainnya</h3>
              <br/><br/>
              <div className="container">
                <div className="row" align="center">
                  <div className="col-xs-4">
                    <a href="/" onClick={this.privateHandle} className="btn-program btn-xs">
                    <h1><i className="ion-university"></i></h1>
                    <label htmlFor="">Private SBMPTN</label>
                    </a>
                  </div>
                  <div className="col-xs-4">
                    <a href="/" onClick={this.goldHandle} className="btn-program btn-xs">
                    <h1><i className="ion-ios-bookmarks-outline"></i></h1>
                    <label htmlFor="">GOLD SBMPTN</label>
                    </a>
                  </div>
                  <div className="col-xs-4">
                    <a href="/" onClick={this.regulerHandle} className="btn-program btn-xs">
                    <h1><i className="ion-paper-airplane"></i></h1>
                    <label htmlFor="">REGULER SBMPTN</label>
                    </a>
                  </div>
                </div>
              </div>
              <br/><br/>          
              
              
              {this.state.privateState ? <Private /> : null}
              {this.state.gold ? <Gold /> : null}
              {this.state.reguler ? <Reguler /> : null}
              
          
            </div>
            </div>
            

        );
       
    }
}

const Private = () => (    
    <div className="container" align="center" style={{marginBottom:"100px",marginTop:"50px"}}>  

          <h4><label htmlFor="private">Private Seleksi Bersama Masuk Perguruan Tinggi Negeri</label></h4> 
          <i>"Bagi yang ingin belajar persiapan SBMPTN di rumah"</i>
        
          <ul className="nav">
            <li><h4><label htmlFor="harga">Rp 1.200.000</label></h4></li>
            <li>1 Kelas (1-2 Orang)</li>
            <li>1 Minggu 2x Pertemuan</li>
            <li>8x Pertemuan</li>
            <li>Waktu menyesuaikan jadwal peserta dan tutor</li>
          </ul>
        </div>


  )
  
const Gold = (props) => (
    <div className="container" align="center" style={{marginBottom:"100px",marginTop:"50px"}} hidden={props.status}>      
        <h4><label htmlFor="umfk">GOLD SBMPTN</label></h4> 
            <i>"Mengikuti program dan kelas yang sama dengan program Juara SBMPTN Camp, namun tidak menginap. Sehingga tidak mendapatkan fasilitas penginapan, makan, laundry, antar jemput saat tes serta tidak mendapatkan garansi uang kembali jika tidak lolos SBMPTN atau Ujian Mandiri ITS 2018."</i>
            <ul className="nav">
                <li><h4><label htmlFor="harga">Rp 10.389.000</label></h4></li>
                <li>Daftar selama Februari cukup bayar Rp 9.389.000*</li>
                <li>Daftar 4 Gratis 1*</li>
                <li>Diskon Rp 300.000 untuk ranking 10 besar di kelas* 
                    (promo pilih salah satu)
                </li>
                
            </ul>
        
    </div>

  )

  const Reguler = (props) => (
    <div className="container" align="center" style={{marginBottom:"100px",marginTop:"50px"}} hidden={props.status}>      
        <h4><label htmlFor="umfk">REGULER SBMPTN</label></h4> 
        <ul className="nav">
                <li><h4><label htmlFor="harga">Rp.1.989.000</label></h4></li>
                <li>DISKON Rp 200.000 untuk pendaftaran selama Februari*</li>
                <li>Daftar 3 GRATIS 1*</li>
                <li>Diskon Rp 150.000 untuk ranking 5 besar di kelas* 
                    (promo pilih salah satu)
                </li>                
            </ul>
            <br />
          <div className="row">
            <div className="col-md-6">
              <label>Belajar SBMPTN Intensif</label>
              <ul className="nav">
                <li>Waktu 16 April - 5 Mei 2018 (senin-sabtu)</li>
                <li>1 hari 2 sesi @1.5 jam</li>
                <li>Try Out setiap akhir pekan</li>
                <li>Khusus Peserta SBMPTN Saintek</li>
              </ul>
            </div>
            <div className="col-md-6">
              <label>Fasilitas</label>
              <ul className="nav">
                <li>Tentor BERKUALITAS dari ITS,Unair,Unesa</li>
                <li>Kelas AC di kantor Sang Juara School</li>
                <li>1 kelas 10-12 siswa</li>
              </ul>
            </div>
          </div> 
          
        
    </div>

  )




ReactDOM.render(<Program />, document.getElementById('root'));

export default Program;