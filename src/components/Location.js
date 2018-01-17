import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import lokasi1 from '../assets/lokasi/1.jpg';
import lokasi2 from '../assets/lokasi/2.jpeg';
import lokasi3 from '../assets/lokasi/3.jpg';
import lokasi4 from '../assets/lokasi/4.jpg';
import lokasi5 from '../assets/lokasi/5.jpg';
import lokasi6 from '../assets/lokasi/6.jpeg';
import lokasi7 from '../assets/lokasi/7.jpeg';
import lokasi8 from '../assets/lokasi/8.jpeg';
import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs,
    InfoWindow
} from 'react-google-maps';




const Peta = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: -7.28659, lng: 112.760 }}
  >
    {
        props.isMarkerShown && <Marker position={{lat: -7.28659, lng: 112.760}}>
            <InfoWindow>
                <div>
                    Sang Juara School
                </div>
            </InfoWindow>
        </Marker>


    }{
        props.isMarkerShown && <Marker position={{lat:-7.2728118, lng: 112.781}}>
            <InfoWindow>
                <div>
                Anjani BNB Surabaya
                </div>                
            </InfoWindow>
        </Marker> 
    }

  </GoogleMap>
))

class Location extends Component{
    render(){
        return(
            <div className="location">
                <div className="container-fluid">
                    <h3 align="center">Lokasi</h3>                    
                    <div className="row" style={{marginTop:"50px",marginBottom:"100px"}}>
                        <div className="col-md-8 " align="center">                             
                            <ul className="list-inline">
                                <li><img src={lokasi1} alt="" className="img-responsive"/></li>
                                <li><img src={lokasi2} alt="" className="img-responsive"/></li>
                                <li><img src={lokasi3} alt="" className="img-responsive"/></li>
                                <li><img src={lokasi4} alt="" className="img-responsive"/></li>
                                <li><img src={lokasi5} alt="" className="img-responsive"/></li>
                                <li><img src={lokasi6} alt="" className="img-responsive"/></li>
                                <li><img src={lokasi7} alt="" className="img-responsive"/></li>
                                <li><img src={lokasi8} alt="" className="img-responsive"/></li>
                            </ul>
                        </div>
                        <div className="col-md-4">

                            <label htmlFor=""><h4>Tempat:</h4></label>
                            <p>Anjani BNB Surabaya (Dekat dengan ITS)</p>
                            <label htmlFor=""><h4>Waktu:</h4></label>
                            <p>April-Mei 2018 (Menyesuaikan jadwal pemerintah untuk UN 2018)</p>
                            <label htmlFor=""><h4>Peserta:</h4></label>
                            <p>Kelas 2 SMA atau sederajat dan alumni 2016 - 2017 yang mengikuti SBMPTN</p>
                            <label htmlFor=""><h4>Fasilitas Kamar:</h4></label>                        
                            <ul className="list">                                    
                                <li>  Tempat tidur springbed</li>
                                <li>  Kamar Ber-AC</li>
                                <li>  Kamar dilengkapi kamar mandi dalam</li>
                            </ul>

                        </div>
                    </div>
                    
                </div>
                <div className="container" style={{marginBottom:"100px"}}>
                <h3 align="center">Peta</h3>
                    <Peta
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBap3OXENY3BB0DjsLz3ycx_sgLCiM_yZw&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    ></Peta>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Location />, document.getElementById('root'));

export default Location;