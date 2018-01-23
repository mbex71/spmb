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

class Map extends Component{

    render(){
        return(
            <div className="container-fluid map">
                <Peta
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBap3OXENY3BB0DjsLz3ycx_sgLCiM_yZw&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                ></Peta>
            </div>
            
        )
    }

}

ReactDOM.render(<Map />, document.getElementById('root'));

export default Map 