import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

class Program extends Component{
    render(){
        return(
            <Router>  
              
            <div className="program">
            <div className="container-fluid">
              <h3 align="center">Program</h3>
              <div className="container">
                <div className="row" align="center">
                  <div className="col-xs-4">
                    <Link to="/program/private">
                    <h1><i className="ion-university"></i></h1>
                    <label htmlFor="">Private SBMPTN</label>
                    </Link>
                  </div>
                  <div className="col-xs-4">
                    <Link to='/program/umfk'>
                    <h1><i className="ion-ios-medkit-outline"></i></h1>
                    <label htmlFor="">UMFK</label>
                    </Link>
                  </div>
                  <div className="col-xs-4">
                    <Link to="http://masukkuliah.com" target="__blank">
                    <h1><i className="ion-paper-airplane"></i></h1>
                    <label htmlFor="">masukkuliah.com</label>
                    </Link>
                  </div>
                </div>
              </div>
              <br/><br/>          
            
              <Route exact path="/program" render={()=>(
                <p></p>
              )}></Route>
              <Route path="/program/private" component={Private} />
              <Route path="/program/umfk" component={Umfk} />
          
            </div>
            </div>
            </Router>

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
  
const Umfk = () => (
    <div className="container" align="center" style={{marginBottom:"100px",marginTop:"50px"}}>      
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