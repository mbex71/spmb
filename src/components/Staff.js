import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Staff extends Component{
    render(){
        return(
            <div className="container-fluid staff" style={{marginTop:"150px"}}>
            <h3 align="center">Staff Pengajar</h3>
            <br/><br/>
            <div className="row">
                
                <div className="col-md-3" align="center">                
                    <img src="/assets/pengajar/pengajar1.jpg" alt="" className="img-responsive img-staff"/>                                
                    <label htmlFor="">
                        Achmad Ferdiansyah PP ST. MT.
                    </label>
                    <p>Dosen Teknik Kimia ITS</p>
                </div>
    
                <div className="col-md-3" align="center">                
                    <img src="/assets/pengajar/pengajar2.jpg" alt="" className="img-responsive img-staff"/>                                
                    <label htmlFor="">
                        Andre Ashfahani ST. Msc.
                    </label>
                    <p>Dosen Teknik Elektro ITS</p>
                </div>
    
                <div className="col-md-3" align="center">                
                    <img src="/assets/pengajar/pengajar3.jpg" alt="" className="img-responsive img-staff"/>                                
                    <label htmlFor="">
                        M. Mujtaba Mitra Zuana S.Pd
                    </label>
                    <p>Dosen UIN Sunan Ampel Surabaya</p>
                </div>
    
                <div className="col-md-3" align="center">                
                    <img src="/assets/pengajar/pengajar4.jpg" alt="" className="img-responsive img-staff"/>                                
                    <label htmlFor="">
                        Nurbani Fatmala S.Si M.Si.
                    </label>
                    <p>Dosen Akademi Analis Kesehatan Delima Husada</p>
                </div>
    
                <div className="col-md-3" align="center">                
                    <img src="/assets/pengajar/pengajar5.jpg" alt="" className="img-responsive img-staff"/>                                
                    <label htmlFor="">
                        Herry Sufyan Hadi ST. MT.
                    </label>
                    <p>Dosen Teknik Fisika ITS</p>
                </div>
    
                <div className="col-md-3" align="center">                
                    <img src="/assets/pengajar/pengajar6.jpg" alt="" className="img-responsive img-staff"/>                                
                    <label htmlFor="">
                        Aldi Gunawan S.Si
                    </label>
                    <p>Alumni Departemen Of Chemistry ITS</p>
                </div>
    
                <div className="col-md-3" align="center">                
                    <img src="/assets/pengajar/pengajar7.jpg" alt="" className="img-responsive img-staff"/>                                
                    <label htmlFor="">
                        Agustin Leny Putri S.Si
                    </label>
                    <p>Pasca Sarjana Departemen Of Physic ITS </p>
                </div>
    
                <div className="col-md-3" align="center">                
                    <img src="/assets/pengajar/pengajar8.jpg" alt="" className="img-responsive img-staff"/>                                
                    <label htmlFor="">
                        Rohim Aminullah Firdaus S.Pd M.Si
                    </label>
                    <p>Pasca Sarjana Departemen Of Physic ITS </p>
                </div>
    
    
            </div>
        </div>
        );
    }

}

ReactDOM.render(<Staff />, document.getElementById('root'));

export default Staff;