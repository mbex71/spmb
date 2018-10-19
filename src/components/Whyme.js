import React, { Component } from 'react';


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
                        <i class="fas fa-map-marked fas-logo"></i>
                        <h4> <label htmlFor="">LOKASI DEKAT ITS & UNAIR</label></h4>          
                        <p>Rasakan denyut nadi kehidupan di kampus ITS & Unair sebelum kamu diterima menjadi mahasiswa</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i class="fas fa-chalkboard-teacher fas-logo"></i>
                        <h4><label htmlFor="">DIAJAR OLEH DOSEN/ALUMNI S1/S2 ITS & UNAIR</label></h4>          
                        <p>Kami memberikan kualitas pengajaran yang baik, kamu akan dibimbing langsung oleh para dosen muda dan alumni  ITS/Unair</p>
                        </div>                        
                        <div className="col-md-4 keg">
                        <i class="fas fa-user-shield fas-logo"></i>
                        <h4><label htmlFor="">GARANSI MASUK PTN</label></h4>          
                        <p>Jika tidak lulus SBMPTN dan Ujian Mandiri Universitas 2019, kamu akan mendapatkan cashback</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i class="fas fa-money-bill-wave-alt fas-logo"></i>
                        <h4><label htmlFor="">KEUNTUNGAN TAMBAHAN</label></h4>          
                        <p>Dapatkan Cashback Rp. 500.000,00/siswa  dengan mengajak teman mengikuti juara SBMPTN Camp</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i class="fas fa-users fas-logo"></i>
                        <h4><label htmlFor="">KUOTA TERBATAS</label></h4>          
                        <p>Agar suasana belajar lebih Fokus dan Eksklusif, kami hanya menerima 40 siswa untuk angkatan 2019</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i class="fas fa-user-graduate fas-logo"></i>
                        <h4><label htmlFor="">BERPENGALAMAN MELULUSKAN</label></h4>          
                        <p>Tahun 2018, 90 % siswa Camp diterima di PTN</p>
                        </div>
                    </div>
                    
                </div>
                </div>
        );
    }
}



export default Whyme;