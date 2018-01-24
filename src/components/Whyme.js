import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Whyme extends Component{
    render(){
        return(
            <div className="whyme">
                <div className="container">
                    <div align="center">
                        <h3>Mengapa SBMPTN Camp??</h3>
                        <label htmlFor="">Satu-satunya program yang mengkhususkan persiapan masuk ITS via SBMPTN</label>
                    </div>
                    <div className="row listkegiatan">
                        <div className="col-md-4 keg">          
                        <i className="ion-ios-cog-outline fas-logo"></i>
                        <h4> <label htmlFor="">LOKASI DEKAT ITS</label></h4>          
                        <p>Rasakan denyut nadi kehidupan di kampus ITS sebelum kamu menjadi mahasiswa ITS.</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i className="ion-ios-paper-outline fas-logo"></i>
                        <h4><label htmlFor="">DIAJAR OLEH DOSEN/ALUMNI S1/S2 ITS</label></h4>          
                        <p>Kami memberikan kualitas pengajaran yang baik, kamu akan dibimbing langsung oleh para dosen ITS.</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i className="ion-android-star-outline fas-logo"></i>
                        <h4><label htmlFor="">BIMBINGAN SPIRITUAL</label></h4>          
                        <p>Perjuangan tentu tak lepas dari takdir sang kuasa, kami akan memberikan bimbingan kepada siswa muslim berupa shalat jamaah tepat waktu, shalat dhuha, tahajud dan mengaji.</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i className="ion-search fas-logo"></i>
                        <h4><label htmlFor="">GARANSI UANG KEMBALI</label></h4>          
                        <p>Jika tidak lulus Sbmptn atau Ujian Mandiri ITS 2018 kamu akan mendapatkan cashback.</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i className="ion-ios-home fas-logo"></i>
                        <h4><label htmlFor="">KEUNTUNGAN TAMBAHAN</label></h4>          
                        <p>Dapatkan Rp. 500.000,00 dengan mengajak teman mengikuti juara SBMPTN Camp</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i className="ion-android-happy fas-logo"></i>
                        <h4><label htmlFor="">TERBATAS</label></h4>          
                        <p>Hanya untuk 21 orang saja</p>
                        </div>
                    </div>
                    
                </div>
                </div>
        );
    }
}

ReactDOM.render(<Whyme />, document.getElementById('root'));

export default Whyme;