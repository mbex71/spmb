import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Kontak extends Component{
    render(){
        return(
            
            <div className="kontak">
            <div className="container-fluid" align="center">                
                <h3>Kontak</h3>
                <br/>
                <div className="row">
                    <div className="col-md-3">
                        <div className="panel panel-info panel-lokasi">
                            <div className="panel-heading">
                            <h4><i className="ion-location"></i></h4>
                            <h4>Lokasi Kantor</h4>
                            </div>
                            <div className="panel-body">
                            <label>Bumi Marina Emas Selatan Blok E No. 80 Surabaya</label>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-info panel-lokasi">
                            <div className="panel-heading">
                                <h4><i className="ion-home"></i></h4>
                                <h4>Lokasi Camp</h4>
                            </div>
                            <div className="panel-body">
                                <label>Jl. Wisma Permai Barat I Blok LL No.29 Mulyorejo Surabaya</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-info panel-lokasi">
                            <div className="panel-heading">
                                <h4><i className="ion-iphone"></i></h4>
                                <h4>Nomor Telepon</h4>
                            </div>
                            <div className="panel-body">
                                <label>+62-856-4856-9506</label>
                            </div>
                        </div>                                               
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-info panel-lokasi">
                            <div className="panel-heading">
                                <h4><i className="ion-email"></i></h4>
                                <h4>Email</h4>
                            </div>
                            <div className="panel-body">
                                <label><a href="mailto:sangjuaraschool1@gmail.com" target="__blank">sangjuaraschool1@gmail.com</a></label>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
            </div>
        );
    }
}

ReactDOM.render(<Kontak />, document.getElementById('root'));

export default Kontak;