import React, { Component } from 'react';


class Kontak extends Component{
    render(){
        return(
            
            <div className="kontak">
            <div className="container-fluid" align="center">                
                <h3>Kontak</h3>
                <br/><br/>
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
                                
                                <label>Dparagon Kalijudan Surabaya, Komplek wiguna indah blok e 88-89, Kalijudan, Mulyorejo, Surabaya</label>
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
                
                <div className="row">
                    <div className="col-md-3">
                        <div className="panel panel-info panel-lokasi">
                            <div className="panel-heading">
                                <h4><i className="ion-email"></i></h4>
                                <h4>Social Media</h4>
                            </div>
                            <div className="panel-body">
                                <ul className="list-inline">
                                    <li style={{marginRight:25,marginLeft:25}}><a style={{fontSize:30}} href="https://www.facebook.com/lbb.sangjuaraschool.its/" target="__blank"><i class="fab fa-facebook-square"></i></a></li>
                                    <li style={{marginRight:25,marginLeft:25}}><a style={{fontSize:30}} href="https://www.instagram.com/sangjuaraschool/" target="__blank"><i class="fab fa-instagram"></i></a></li>
                                    <li style={{marginRight:25,marginLeft:25}}><a style={{fontSize:30,color:'red'}} href="https://www.youtube.com/channel/UCl5Z_AUUzkURxH7dzzotdjA/featured" target="__blank"><i class="fab fa-youtube"></i></a></li>
                                </ul>
                                
                                
                                
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
            </div>
        );
    }
}



export default Kontak;