import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Location extends Component{
    render(){
        return(
            <div className="location">
                <div className="container-fluid">
                    <h3 align="center">Lokasi</h3>                    
                    <div className="row" style={{marginTop:"50px",marginBottom:"100px"}}>
                        <div className="col-md-8 " align="center">                             
                            <ul className="list-inline">
                                <li><img src="/assets/lokasi/1.jpg" alt="" className="img-responsive"/></li>
                                <li><img src="/assets/lokasi/2.jpeg" alt="" className="img-responsive"/></li>
                                <li><img src="/assets/lokasi/3.jpg" alt="" className="img-responsive"/></li>
                                <li><img src="/assets/lokasi/4.jpg" alt="" className="img-responsive"/></li>
                                <li><img src="/assets/lokasi/5.jpg" alt="" className="img-responsive"/></li>
                                <li><img src="/assets/lokasi/6.jpeg" alt="" className="img-responsive"/></li>
                                <li><img src="/assets/lokasi/7.jpeg" alt="" className="img-responsive"/></li>
                                <li><img src="/assets/lokasi/8.jpeg" alt="" className="img-responsive"/></li>
                            </ul>
                        </div>
                        <div className="col-md-4">

                            <label htmlFor=""><h4>Tempat:</h4></label>
                            <p>Anjani BNB Surabaya (Dekat dengan ITS)</p>
                            <label htmlFor=""><h4>Waktu:</h4></label>
                            <p>April-Mei 2018 (Menyesuaikan jadwal pemerintah untuk UN 2018)</p>
                            <label htmlFor=""><h4>Peserta:</h4></label>
                            <p>Kelas 3 SMA atau sederajat dan alumni 2016 - 2017 yang mengikuti SBMPTN</p>
                            <label htmlFor=""><h4>Fasilitas Kamar:</h4></label>                        
                            <ul className="list">                                    
                                <li>  Tempat tidur springbed</li>
                                <li>  Kamar Ber-AC</li>
                                <li>  Kamar dilengkapi kamar mandi dalam</li>
                            </ul>

                        </div>
                    </div>
                    
                </div>

            </div>
        );
    }
}

ReactDOM.render(<Location />, document.getElementById('root'));

export default Location;