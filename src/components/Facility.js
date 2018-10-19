import React, { Component } from 'react';



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
                        <i class="fas fa-users fas-logo"></i>
                        <h4> <label htmlFor="">Bimbingan Intensif</label></h4>          
                        <p>Camp hampir sebulan dengan 5 sesi belajar setiap hari mulai jam 08.00 – 21.00 WIB</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i class="fas fa-brain fas-logo"></i>
                        <h4><label htmlFor="">Try Out</label></h4>          
                        <p>Mengukur kemampuan dan hasil belajarmu dengan mengikuti Try Out</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i class="fas fa-star fas-logo"></i>
                        <h4><label htmlFor="">Exclusive</label></h4>          
                        <p>Maksimal 8-9 Siswa/Kelas</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i class="fas fa-book-open fas-logo"></i>
                        <h4><label htmlFor="">Test Minat Bakat</label></h4>          
                        <p>Untuk mengetahui minat dan bakatmu sebagai referensi pengambilan jurusan</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i class="fab fa-houzz fas-logo"></i>
                        <h4><label htmlFor="">Tempat Nyaman</label></h4>          
                        <p>Ruang kelas dan Kamar Tidur ber AC, sekamar 2 orang, kamar Mandi dalam, makan 3x + Snack 2x sehari dan free laundry</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i class="fas fa-rocket fas-logo"></i>
                        <h4><label htmlFor="">Motivation Class</label></h4>          
                        <p>Kelas motivasi yang diisi mahasiswa berprestasi/Alumni ITS</p>
                        </div>
                        <div className="col-md-4 keg">
                        <i class="fas fa-university fas-logo"></i>
                        <h4><label htmlFor="">Visit Kampus ITS dan Outbound</label></h4>
                        <p>Berkunjung ke Kampus ITS untuk pengenalan kampus disertai dengan Outbound</p>
                        </div>
                        <div className="col-md-4 keg">

                            <i class="fas fa-plus-circle fas-logo"></i>
                            <h4><label htmlFor="">Bonus</label></h4>
                            <p>Bonus persiapan UM PTN/PTS</p>
                        </div>
                        <div className="col-md-4 keg">

                            <i class="fas fa-mosque fas-logo"></i>
                            <h4><label htmlFor="">Character & Spiritual Building</label></h4>
                            <p>Bimbingan Shalat berjamaah tepat waktu, Shalat tahajud, dhuha, tilawah untuk siswa muslim</p>
                        </div>
                        <div className="col-md-4 keg">

                            <i class="fas fa-car-side fas-logo"></i>
                            <h4><label htmlFor="">Antar Jemput ke Lokasi Tes SBMPTN</label></h4>
                            
                        </div>
                        <div className="col-md-4 keg">

                            <i class="fas fa-taxi fas-logo"></i>
                            <h4><label htmlFor="">City Tour</label></h4>
                            <p>Jalan jalan bersama selepas tes SBMPTN</p>
                        </div>
                        
                    </div>
                    
                </div>
                {/* <Gallery></Gallery> */}
                
            </div>
        );
    }
}


export default Facility;