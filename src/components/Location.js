import React, { Component } from 'react';
import Slider from 'react-slick';



class Location extends Component{
    render(){

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <div className="location">
                <div className="container-fluid">
                    <h3 align="center">Lokasi</h3>                    
                    <div className="row" style={{marginTop:"50px",marginBottom:"100px"}}>
                        <div className="col-md-8 " align="center" style={{paddingLeft:'50px',paddingRight:'50px'}}>  
                        <Slider {...settings}>
                        
                                <div><img src="/assets/lokasi/kamar.jpg" alt="" className="img-responsive"/></div>
                                <div><img src="/assets/lokasi/kamar 2.jpg" alt="" className="img-responsive"/></div>
                                <div><img src="/assets/lokasi/kamar mandi.jpg" alt="" className="img-responsive"/></div>
                                <div><img src="/assets/lokasi/lantai 1.jpg" alt="" className="img-responsive"/></div>
                                <div><img src="/assets/lokasi/lantai 2.jpg" alt="" className="img-responsive"/></div> 
                            
                        </Slider>                           
                        <br/><br/>
                        </div>
                        <div className="col-md-4">

                            <label htmlFor=""><h4>Tempat:</h4></label>
                            <p>Dparagon Kalijudan Surabaya, Komplek wiguna indah blok e 88-89, Kalijudan, Mulyorejo, Surabaya</p>
                            <label htmlFor=""><h4>Waktu:</h4></label>
                            <p>Setelah UN sd SBMPTN 2019 (tanggal fix menunggu jadwal dari pemerintah</p>
                            <label htmlFor=""><h4>Peserta:</h4></label>
                            <p>Kelas 3 SMA atau sederajat dan alumni 2017 - 2018 yang akan mengikuti SBMPTN</p>
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



export default Location;