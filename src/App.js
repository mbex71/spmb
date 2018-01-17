import React, { Component } from 'react';
// import logo from './logo.svg';
// import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import logo from './assets/logo.png';
// import Lokasi from './components/Location';
import Home from './components/Home';
// import Program from './components/Program';
// import Fasilitas from './components/Facility';
// import Biaya from './components/Price';
import Program from './components/Program';
import Lokasi from './components/Location';
import Fasilitas from './components/Facility';
import Biaya from './components/Price';
import Kontak from './components/Kontak';
import Scrollspy from 'react-scrollspy';


class App extends Component {
  constructor(props){
    super(props);
    
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(){
    window.open("https://api.whatsapp.com/send?phone=6285648569506","_blank")
  }

  render() {
    return (
      
      <div className="App">
      <nav className="navbar navbar-inverse hidden-xs hidden-sm navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a to="/" className="navbar-brand"><img src={logo} alt="logo"  height="22px"/></a>
          </div>          

            <Scrollspy 
              items={['biaya','program','lokasi','fasilitas','home','kontak']} className="nav navbar-nav navbar-right"
              offset={50}
              >
              <li><a href="#home"><i className="ion-ios-home"></i> Beranda</a></li>
              <li><a href="#program"><i className="ion-code-working"></i> Program</a></li>
              <li><a href="#lokasi"><i className="ion-ios-location"></i> Lokasi</a></li>
              <li><a href="#fasilitas"><i className="ion-document-text"></i> Fasilitas</a></li>
              <li><a href="#biaya"><i className="ion-pricetags"></i> Biaya</a></li>
              <li><a href="#kontak"><i className="ion-iphone"></i> Kontak</a></li>
            </Scrollspy>
        </div>
      </nav>

      <nav className="navbar navbar-default navbar-fixed-bottom">
        <div className="container" align="center">
          <ul className="nav" >
            {/* <li><a href="/" className="navbar-btn btn-chat btn">Chat kami di Whatsapp</a></li> */}
            <li><a href="" onClick={this.onClickHandler} className="navbar-btn btn-chat"> <i className="ion-social-whatsapp-outline"></i> Chat kami di Whatsapp</a></li>
          </ul>
          
          {/* <a href="/" className="btn btn-default navbar-btn btn-chat-width hidden-md hidden-lg">Chat kami di Whatsapp</a>         */}
        </div>  
        <div className="container-fluid hidden-lg hidden-md" align="center">       

            <Scrollspy items={['biaya','program','lokasi','fasilitas','home','kontak']} className="nav navbar-nav navbar-right">
              <li><a href="#home" className="col-xs-2"><i className="ion-ios-home"></i></a></li>
              <li><a href="#program" className="col-xs-2"><i className="ion-code-working"></i></a></li>
              <li><a href="#lokasi" className="col-xs-2"><i className="ion-ios-location"></i></a></li>
              <li><a href="#fasilitas" className="col-xs-2"><i className="ion-document-text"></i></a></li>
              <li><a href="#biaya" className="col-xs-2"><i className="ion-pricetags"></i></a></li>
              <li><a href="#kontak" className="col-xs-2"><i className="ion-iphone"></i></a></li>
            </Scrollspy>

         </div>
      </nav>      
      <div className="hidden-xs" style={{marginTop:"50px"}}>      
      </div>

    
      <section id="home">
        <Home></Home>
      </section>
      <section id="program">
        <Program></Program>
      </section>
      <section id="lokasi">
      <Lokasi></Lokasi>
      </section>
      <section id="fasilitas">
      <Fasilitas></Fasilitas>
      </section>
      <section id="biaya">
        <Biaya></Biaya>
      </section>
      <section id="kontak">
        <Kontak></Kontak>
      </section>
      
      </div>
      
    );
  }
}


export default App;
