import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Program extends Component{
  constructor(props){
    super(props);

    this.state = {
      privateState: true,
      umfkState: false
      
    }
    
    this.masukkuliah = this.masukkuliah.bind(this);
    this.privateHandle = this.privateHandle.bind(this);
    this.umfkHandle = this.umfkHandle.bind(this);
  }

  privateHandle(e){
    e.preventDefault();
    this.setState({
      privateState:true,
      umfkState:false

    });
  }

  umfkHandle(e){
    e.preventDefault();
    this.setState({
      umfkState:true,
      privateState:false
    });
  }

  masukkuliah(e){    
    e.preventDefault();
    window.open("http://masukkuliah.com","__blank");
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
                    <a href="/" onClick={this.umfkHandle} className="btn-program btn-xs">
                    <h1><i className="ion-ios-medkit-outline"></i></h1>
                    <label htmlFor="">UMFK</label>
                    </a>
                  </div>
                  <div className="col-xs-4">
                    <a href="/" onClick={this.masukkuliah} className="btn-program btn-xs">
                    <h1><i className="ion-paper-airplane"></i></h1>
                    <label htmlFor="">masukkuliah.com</label>
                    </a>
                  </div>
                </div>
              </div>
              <br/><br/>          
              
              
              {this.state.privateState ? <Private /> : null}
              {this.state.umfkState ? <Umfk /> : null}
              
          
            </div>
            </div>
            

        );
       
    }
}

const Private = () => (    
    <div className="container" align="center" style={{marginBottom:"100px",marginTop:"50px"}}>  

          <h3><label htmlFor="private">Private Seleksi Bersama Masuk Perguruan Tinggi Negeri</label></h3> 
          <h5>Bagi yang ingin belajar persiapan SBMPTN di rumah</h5>
        
          <ul className="nav">
            <li><h4><label htmlFor="harga">Rp 1.200.000</label></h4></li>
            <li>1 Kelas (1-2 Orang)</li>
            <li>1 Minggu 2x Pertemuan</li>
            <li>8x Pertemuan</li>
            <li>Waktu menyesuaikan jadwal peserta dan tutor</li>
          </ul>
        </div>


  )
  
const Umfk = (props) => (
    <div className="container" align="center" style={{marginBottom:"100px",marginTop:"50px"}} hidden={props.status}>      
        <h3><label htmlFor="umfk">Ujian Masuk Fakultas Kedokteran</label></h3> 
            <h5>Bagi yang ingin belajar persiapan UMFK di rumah</h5>
            <ul className="nav">
                <li><h4><label htmlFor="harga">Rp 1.400.000</label></h4></li>
                <li>1 Kelas (1-2 Orang)</li>
                <li>1 Minggu 2x Pertemuan</li>
                <li>8x Pertemuan</li>
                <li>Waktu menyesuaikan jadwal peserta dan tutor</li>
            </ul>
        
    </div>

  )




ReactDOM.render(<Program />, document.getElementById('root'));

export default Program;