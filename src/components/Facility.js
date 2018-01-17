import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import gal1 from '../assets/gallery/galeri1.JPG';
import gal2 from '../assets/gallery/galeri2.JPG';
import gal3 from '../assets/gallery/galeri3.JPG';
import gal4 from '../assets/gallery/galeri4.JPG';
import gal5 from '../assets/gallery/galeri5.JPG';
import gal6 from '../assets/gallery/galeri6.JPG';
import gal7 from '../assets/gallery/galeri7.JPG';
import gal8 from '../assets/gallery/galeri8.JPG';



const Gallery = () => (

    <div className="container-fluid">    
        <h3 align="center">Gallery</h3>
        <br/><br/>
        <div className="row">
            <div className="col-md-3"><img src={gal1} alt="" className="img-responsive" style={{marginBottom:"30px"}}/></div>
            <div className="col-md-3"><img src={gal2} alt="" className="img-responsive" style={{marginBottom:"30px"}}/></div>
            <div className="col-md-3"><img src={gal3} alt="" className="img-responsive" style={{marginBottom:"30px"}}/></div>
            <div className="col-md-3"><img src={gal4} alt="" className="img-responsive" style={{marginBottom:"30px"}}/></div>
            <div className="col-md-3"><img src={gal5} alt="" className="img-responsive" style={{marginBottom:"30px"}}/></div>
            <div className="col-md-3"><img src={gal6} alt="" className="img-responsive" style={{marginBottom:"30px"}}/></div>
            <div className="col-md-3"><img src={gal7} alt="" className="img-responsive" style={{marginBottom:"30px"}}/></div>
            <div className="col-md-3"><img src={gal8} alt="" className="img-responsive" style={{marginBottom:"30px"}}/></div>       
            
        </div>      
    </div>
    
)


class Facility extends Component{
    render(){
        return(
            <div className="facilities">
                <div className="container">
                    <div align="center">
                        <h3>Kegiatan dan Fasilitas</h3>
                        <label htmlFor="">"Serius tapi menyenangkan"</label>
                    </div>
                    <div className="row listkegiatan">
                        <div className="col-md-4 keg">          
                        <i className="ion-ios-cog-outline fas-logo"></i>
                        <h4> <label htmlFor="">Bimbingan Intensif</label></h4>          
                        <p>Camp selama 30 hari dengan belajar 5 sesi kelas setiap hari</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i className="ion-ios-paper-outline fas-logo"></i>
                        <h4><label htmlFor="">Try Out</label></h4>          
                        <p>Mengukur kemampuan dan hasil belajarmu dengan mengikuti Try Out yang diadakan 5 hari sekali</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i className="ion-android-star-outline fas-logo"></i>
                        <h4><label htmlFor="">Exclusive</label></h4>          
                        <p>Maksimal 8-9 Siswa</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i className="ion-search fas-logo"></i>
                        <h4><label htmlFor="">Test Minat Bakat</label></h4>          
                        <p>Dengan metode fingerprint scanning untuk mengetahui minat dan bakatmu sebagai referensi pengambilan jurusan</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i className="ion-ios-home fas-logo"></i>
                        <h4><label htmlFor="">Tempat Nyaman</label></h4>          
                        <p>Tempat tinggal yang nyaman dengan AC, disertai makan 3x sehari dan free laundry di akhir pekan</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i className="ion-android-happy fas-logo"></i>
                        <h4><label htmlFor="">Motivation Class</label></h4>          
                        <p>Kelas motivasi yang diisi mahasiswa berprestasi ITS</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i className="ion-ios-home-outline fas-logo"></i>
                        <h4><label htmlFor="">Visit Kampus ITS dan Outbound</label></h4>
                        <p>Berkunjung ke Kampus ITS untuk pengenalan kampus disertai dengan Outbound</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i className="ion-android-add fas-logo"></i>
                        <h4><label htmlFor="">Bonus</label></h4>
                        <p>Bonus persiapan UM PTN/PTS</p>
                        </div>
                    </div>
                    
                </div>
                <Gallery></Gallery>
            </div>
        );
    }
}

ReactDOM.render(<Facility />, document.getElementById('root'));



export default Facility;