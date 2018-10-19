import React, { Component } from 'react';




class Program extends Component{
  constructor(props){
    super(props);

    this.state = {
      privateState: true,
      gold: false,
      reguler: false,
      exclusive: false

      
    }
    
    this.regulerHandle = this.regulerHandle.bind(this);
    this.privateHandle = this.privateHandle.bind(this);
    this.goldHandle = this.goldHandle.bind(this);
    this.exclusiveHandle = this.exclusiveHandle.bind(this);
  }

  privateHandle(e){
    e.preventDefault();
    this.setState({
      privateState:true,
      gold:false,
      reguler:false,
      exclusive: false

    });
  }

  goldHandle(e){
    e.preventDefault();
    this.setState({
      gold:true,
      privateState:false,
      reguler:false,
      exclusive: false
    });
  }

  regulerHandle(e){    
    e.preventDefault();
    this.setState({
      gold:false,
      privateState:false,
      reguler:true,
      exclusive: false
    });
  }

  exclusiveHandle(e){    
    e.preventDefault();
    this.setState({
      gold:false,
      privateState:false,
      reguler:false,
      exclusive: true
    });
  }

    render(){
        return(
                       
            <div className="program">
            <div className="container-fluid" style={{borderTop: '2px solid rgba(186,186,186, 0.5)',borderBottom: '2px solid rgba(186,186,186, 0.5)'}}>
              <br />
              <h3 align="center">Program Kami Lainnya</h3>
              <br/><br/>
              <div className="container">
                <div className="row" align="center">
                  <div className="col-xs-3">
                    <div>
                      <a href="/" onClick={this.privateHandle} className="btn-program btn-lg">
                      <h1><i class="fas fa-university"></i></h1>
                      <label htmlFor="">PRIVATE CLASS</label>
                    </a>
                    </div>
                  </div>
                  <div className="col-xs-3">
                    <div>
                      <a href="/" onClick={this.goldHandle} className="btn-program btn-lg">
                      <h1><i class="fas fa-book-open"></i></h1>
                      <label htmlFor="">GOLD CAMP</label>
                    </a>
                    </div>
                  </div>
                  <div className="col-xs-3">
                    <div>
                      <a href="/" onClick={this.regulerHandle} className="btn-program btn-lg">
                      <h1><i class="fas fa-paper-plane"></i></h1>
                      <label htmlFor="">INTENSIF CLASS</label>
                    </a>
                    </div>
                  </div>
                  <div className="col-xs-3">
                    <div>
                      <a href="/" onClick={this.exclusiveHandle} className="btn-program btn-lg">
                      <h1><i class="fas fa-scroll"></i></h1>
                      <label htmlFor="">EXCLUSIVE CLASS</label>
                    </a>
                    </div>
                  </div>
                </div>
              </div>
              <br/><br/>          
              
              
              {this.state.privateState ? <Private /> : null}
              {this.state.gold ? <Gold /> : null}
              {this.state.reguler ? <Reguler /> : null}
              {this.state.exclusive ? <Exclusive /> : null}
              
          
            </div>
            </div>
            

        );
       
    }
}

const Private = () => (    
    <div className="container" align="center" style={{marginBottom:"100px",marginTop:"50px"}}>  

          <h4><label htmlFor="private">Private Class</label></h4> 
          
        
          <ul className="nav">
            <li><h4><label htmlFor="harga">Rp 2.000.000</label></h4></li>
            <li>1 Kelompok Belajar 1-2 Siswa</li>            
            <li>8x Pertemuan</li>
            <li>Waktu belajar menyesuaikan jadwal siswa dan tentor, Tentor bisa datang ke rumah</li>
          </ul>
        </div>


  )
  
const Gold = (props) => (
    <div className="container" align="center" style={{marginBottom:"100px",marginTop:"50px"}} hidden={props.status}>      
        <h4><label htmlFor="umfk">GOLD Camp</label></h4> 
            <i>"Mengikuti program dan kelas yang sama dengan program Juara SBMPTN Camp, namun tidak menginap. Sehingga tidak mendapatkan fasilitas penginapan, makan, laundry, antar jemput saat tes serta tidak mendapatkan garansi uang kembali jika tidak lolos SBMPTN atau Ujian Mandiri ITS 2018."</i>
            <ul className="nav">
                <li><h4><label htmlFor="harga">Rp 10.500.000</label></h4></li>
                <li>Diskon Rp 1.500.000 untuk 5 pendaftar pertama</li>
                <li>Start Belajar setelah UN sd H-1 SBMPTN 2019. Belajar setiap Hari mulai jam 08.00-21.00 WIB, 5x Meeting/hari</li>
                <li>Fasilitas Belajar sama dengan Camp SBMPTN minus penginapan, makan, dan tidak ada Cash Back jika gagal masuk PTN.
                </li>
                
            </ul>
        
    </div>

  )

  const Reguler = (props) => (
    <div className="container" align="center" style={{marginBottom:"100px",marginTop:"50px"}} hidden={props.status}>      
        <h4><label htmlFor="umfk">Intensif Class</label></h4> 
        <ul className="nav">
                <li><h4><label htmlFor="harga">Rp 2.000.000</label></h4></li>
                <li>Daftar 4 GRATIS 1*</li>
                <li>Diskon Rp 150.000 untuk ranking 5 besar di kelas* 
                    
                </li>                
                <li>DISKON Rp 200.000 untuk pendaftaran sd Februari 2019</li>
                <li>(Promo Pilih Salah Satu)</li>
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
                <li>Kelas AC</li>
                <li>Tentor Berpengalaman, 12-15 siswa/kelas</li>
                <li>Start setelah UN sd H-1 SBMPTN, Belajar setiap hari 2x Meeting @90 Menit.</li>
              </ul>
            </div>
          </div> 
          
        
    </div>

  )

  const Exclusive = (props) => (
    <div className="container" align="center" style={{marginBottom:"100px",marginTop:"50px"}} hidden={props.status}>      
        <h4><label htmlFor="umfk">Exclusive Class</label></h4> 
            
            <ul className="nav">
                <li><h4><label htmlFor="harga">Rp 4.800.000</label></h4></li>
                <li>Eksklusif 8-10 siswa/kelas</li>
                <li>Belajar 2 sesi/Minggu</li>
                <li>1 Sesi 180 Menit, Start Belajar Januari 2019
                </li>
                
            </ul>
        
    </div>

  )




export default Program;