import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
    defaultCenter={{ lat: -7.288998, lng: 112.802923 }}
  >
    {
        props.isMarkerShown && <Marker position={{lat: -7.288998, lng: 112.802923}}>
            <InfoWindow>
                <div>
                    Sang Juara School
                </div>
            </InfoWindow>
        </Marker>


    }{
        props.isMarkerShown && <Marker position={{lat:-7.272788, lng: 112.783306}}>
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