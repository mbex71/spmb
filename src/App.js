import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import{Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Program from './components/Program';
import Lokasi from './components/Location';
import Fasilitas from './components/Facility';
import Biaya from './components/Price';
import Kontak from './components/Kontak';
import Apakata from './components/Apakata';
import Staff from './components/Staff';
import Whyme from './components/Whyme';
import Alumni from './components/Alumni';
import Gallery from './components/Gallery';
import Map from './components/Map';
import Kenalan from './components/Kenalan';
import Joingroup from './components/Joingroup';
import Blog,{Indexart} from './components/Blog';


const Main = () => (
  <div>
  <Home></Home>
  <section id="program">
    <Kenalan></Kenalan>  
  </section>
    
    <Alumni></Alumni>

  <section id="fasilitas">
    <Fasilitas></Fasilitas>
  </section>

    <Whyme></Whyme>
    

  <section id="lokasi">
    <Lokasi></Lokasi>
  </section>

  <Apakata></Apakata>
  <Staff></Staff>

  <section id="biaya">
    <Biaya></Biaya>
  </section>
    <Joingroup></Joingroup>      
    <Gallery></Gallery>      
    <Indexart></Indexart>
    <Program></Program>
    <Map></Map>

  <section id="kontak">
    <Kontak></Kontak>
  </section>
  </div>
)


class App extends Component {
  constructor(props){
    super(props);
    
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onTop = this.onTop.bind(this);
    this.onProgram = this.onProgram.bind(this);
    this.onFasilitas = this.onFasilitas.bind(this);
    this.onLokasi = this.onLokasi.bind(this);
    this.onBiaya = this.onBiaya.bind(this);
    this.onKontak = this.onKontak.bind(this);
    this.onBlog = this.onBlog.bind(this);
  }

  onClickHandler(){
    // window.open("https://api.whatsapp.com/send?phone=6281335087677","_blank")
    window.open("https://wa.me/6281335087677?text=Halo%20Juarasbmptn.com,saya%20tertarik%20mengikuti%20Program%20Juara%20SBMPTN.%20Mohon%20info%20lebih%20lanjut","_blank")
    // window.open("https://wa.me/6281335087677","_blank")
    
  }

  onTop(e){
    e.preventDefault();
    window.open("/", "_self");
    // document.documentElement.scrollTop = 0;
  }

  onProgram(e){
    e.preventDefault();
    window.open("/#program","_self");
  }

  onFasilitas(e){
    e.preventDefault()
    window.open("/#fasilitas","_self");
  }
  onLokasi(e){
    e.preventDefault()
    window.open("/#lokasi","_self");
  }

  onBiaya(e){
    e.preventDefault()
    window.open("/#biaya","_self");
  }
  
  onKontak(e){
    e.preventDefault()
    window.open("/#kontak","_self");
  }

  onBlog(e){
    e.preventDefault()
    window.open("/blog","_self");
  }

  render() {
    return (
      <Router>
      <div className="App"> 
      
      <section id="home">       

      <nav className="navbar navbar-inverse hidden-xs hidden-sm navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a to="/" className="navbar-brand"><img src="/assets/logopng.png" alt="logo"  width="40px"/></a>
          </div>          

            <Scrollspy 
              items={['biaya','program','lokasi','fasilitas','home','kontak']} className="nav navbar-nav navbar-right"
              offset={50}
              >
              
              <li><Link to="/" onClick={this.onTop}>Beranda</Link></li>
              <li><Link to="/#program" onClick={this.onProgram}><i className="ion-code-working"></i> Program</Link></li>
              <li><Link to="/#fasilitas" onClick={this.onFasilitas}><i className="ion-document-text"></i> Fasilitas</Link></li>
              <li><Link to="/#lokasi" onClick={this.onLokasi}><i className="ion-ios-location"></i> Lokasi</Link></li>
              <li><Link to="/#biaya" onClick={this.onBiaya}><i className="ion-pricetags"></i> Biaya</Link></li>
              <li><Link to="/#kontak" onClick={this.onKontak}><i className="ion-iphone"></i> Kontak</Link></li>              
            </Scrollspy>
        </div>
      </nav>
      
        <div className="container  visible-sm visible-xs logo-xs" align="center">

          <img src="/assets/logo.png" align="center" height="50px;" alt="logo"/> 
          
        </div>
      
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
              <li><Link to="#home" className="col-xs-2" onClick={this.onTop} ><i className="ion-ios-home"></i></Link></li>
              <li><Link to="#program" className="col-xs-2" onClick={this.onProgram} ><i className="ion-code-working"></i></Link></li>
              <li><Link to="#fasilitas" className="col-xs-2" onClick={this.onFasilitas} ><i className="ion-document-text"></i></Link></li>
              <li><Link to="#lokasi" className="col-xs-2" onClick={this.onLokasi} ><i className="ion-ios-location"></i></Link></li>
              <li><Link to="#biaya" className="col-xs-2" onClick={this.onBiaya} ><i className="ion-pricetags"></i></Link></li>              
              <li><Link to="#kontak" className="col-xs-1" onClick={this.onKontak} ><i className="ion-iphone"></i></Link></li>
              
            </Scrollspy>

         </div>
      </nav>      
     
      <div className="hidden-xs" style={{marginTop:"50px"}}>      
      </div>
      </section>    
      
      
      <Switch>

      <Route exact path="/" component={Main} />
      
      <Route path="/blog" component={Blog}/>
      
      </Switch>
      
      

      
      </div>
      </Router>
      
    );
  }
}




export default App;
