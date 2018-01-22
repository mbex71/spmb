import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class Alumni extends Component{
    render(){
        return(
            <div className="container">
        <h3 align="center">Kami Telah diterima di ITS dan PTN lainnya, sekarang Giliranmu</h3>
        <br/>
        <div className="row" align="center">
            <div className="col-md-2 col-md-offset-1 col-alumni">
                <img src="/assets/alumni/Panji.PNG" alt="" className="img-responsive img-alumni"/>
                <h5>Panji Aditya Ramadhani D.</h5>
                <p>SMAN 5 Balikpapan - Teknik Lingkungan ITS</p>
            </div>
            <div className="col-md-2 col-alumni">
                <img src="/assets/alumni/Haikal.PNG" alt="" className="img-responsive img-alumni"/>
                <h5>M. Haikal Bahresy</h5>
                <p>SMAN 1 Manyar Gresik - Teknik Fisika ITS</p>
            </div>
            <div className="col-md-2 col-alumni">
                <img src="/assets/alumni/Ricky.PNG" alt="" className="img-responsive img-alumni"/>
                <h5>Ricky Dana Setiawawan</h5>
                <p>SMAN 17 Surabaya - Kimia MIPA ITS</p>
            </div>
            <div className="col-md-2 col-alumni">
                <img src="/assets/alumni/ADHEK.jpg" alt="" className="img-responsive img-alumni"/>
                <h5>Adhek Kurnia Pratama</h5>
                <p>SMAN 4 Tuban - Teknik Kimia ITS</p>
            </div>
            <div className="col-md-2 col-alumni">
                <img src="/assets/alumni/Akbar.PNG" alt="" className="img-responsive img-alumni"/>
                <h5>Akbar Swandana</h5>
                <p>SMAN 1 Singosari Malang - Teknik Instrumental ITS</p>
            </div>
        </div>
        <div className="row" align="center">
        <div className="col-md-2 col-md-offset-1 col-alumni">
                <img src="/assets/alumni/Kiki.jpeg" alt="" className="img-responsive img-alumni"/>
                <h5>Kiki Yuniar Kristiawan</h5>
                <p>SMA 1 Wachid Hasyim Surabaya -  T.Informatika UPN jatim</p>
            </div>

            <div className="col-md-2 col-alumni">
                <img src="/assets/alumni/Dina.jpg" alt="" className="img-responsive img-alumni"/>
                <h5>Adji Dina Kartika</h5>
                <p>SMAN 1 Samarinda - Gizi Kesehatan UGM</p>
            </div>

            <div className="col-md-2 col-alumni">
                <img src="/assets/alumni/10.PNG" alt="" className="img-responsive img-alumni"/>
                <h5>Nisrina Auliyah Laras Karindra</h5>
                <p>SMAN 20 Surabaya - Kesehatan Masyarakat Unair</p>
            </div>

            <div className="col-md-2 col-alumni">
                <img src="/assets/alumni/Ayu.jpg" alt="" className="img-responsive img-alumni"/>
                <h5>Ayu Wulandari</h5>
                <p>SMA wachid Hasyim - Agroteknologi UPN jatim</p>
            </div>

            <div className="col-md-2 col-alumni">
                <img src="/assets/alumni/1.PNG" alt="" className="img-responsive img-alumni"/>
                <h5>Muh. Fakhri Musyaffa Budiman</h5>
                <p>SMA N 3 Pekalongan - T. Industri UIN Suka Yogyakarta</p>
            </div>
        </div>
    </div>
        )
    }
}

ReactDOM.render(<Alumni />, document.getElementById('root'));

export default Alumni