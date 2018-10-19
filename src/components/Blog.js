import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';



export const Indexart = () => {
    
    function handleClick() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return(
    <div className="container">
    <h3 align="center">Artikel</h3>
    <br />
    <div className="row">
        <div className="col-md-3 artikellist">
            <Link to="/blog/fakultas-dan-jurusan-di-ITS" onClick={handleClick.bind()}>
            <img src="/assets/artikel/artikel1.jpg" className="img-responsive" alt="Jurusan ITS"/></Link>
        </div>
        <div className="col-md-3 artikellist">
            <Link to="/blog/INILAH-ALASAN-KAMU-HARUS-MASUK-ITS-FASILITASNYA-OKE-BANGET" onClick={handleClick.bind()}>
            <img src="/assets/artikel/artikel2.jpg" className="img-responsive" alt="Jurusan ITS" /></Link>
        </div>
        <div className="col-md-3 artikellist">
            <Link to="/blog/BIAYA-KULIAH-DI-ITS-JALUR-SBMPTN-SNMPTN-DAN-PKM-MURAH-ATAU-MAHAL" onClick={handleClick.bind()}>
            <img src="/assets/artikel/artikel3.jpg" className="img-responsive" alt="Jurusan ITS" /></Link>
        </div>
        <div className="col-md-3 artikellist">
            <Link to="/blog/PROGRAM-STUDI-DAN-DAYA-TAMPUNG-SBMPTN-2018-DI-ITS" onClick={handleClick.bind()}>
            <img src="/assets/artikel/artikel4.jpg" className="img-responsive" alt="Jurusan ITS" /></Link>
        </div>
        <div className="col-md-3 artikellist">
            <Link to="/blog/PREDIKSI-PASSING-GRADE-SBMPTN-2018-ITS-SURABAYA" onClick={handleClick.bind()}>
            <img src="/assets/artikel/artikel5.jpg" className="img-responsive" alt="Jurusan ITS" /></Link>
        </div>
        <div className="col-md-3 artikellist">
            <Link to="/blog/INFORMASI-UMUM-SBMPTN-2018-CEK-DISINI" onClick={handleClick.bind()}>
            <img src="/assets/artikel/artikel6.jpg" className="img-responsive" alt="Jurusan ITS" /></Link>
        </div>
        <div className="col-md-3 artikellist">
            <Link to="/blog/MAU-LULUS-SBMPTN-INILAH-STARTEGI-BELAJARNYA" onClick={handleClick.bind()}>
            <img src="/assets/artikel/artikel7.jpg" className="img-responsive"alt="Jurusan ITS" /></Link>
        </div>
    </div>
    
    </div>
)};

const myartikel = ({match}) => {
    switch(match.params.myartikel){
        case 'fakultas-dan-jurusan-di-ITS':{
            return(
                <Artsatu></Artsatu>
            );
            break;
        }
        case 'INILAH-ALASAN-KAMU-HARUS-MASUK-ITS-FASILITASNYA-OKE-BANGET':{
            return(
                <Artdua></Artdua>
            );
            break
        }
        case 'BIAYA-KULIAH-DI-ITS-JALUR-SBMPTN-SNMPTN-DAN-PKM-MURAH-ATAU-MAHAL':{
            return(
                <Arttiga></Arttiga>
            );
            break
        }
        case 'PROGRAM-STUDI-DAN-DAYA-TAMPUNG-SBMPTN-2018-DI-ITS':{
            return(
                <Artempat></Artempat>
            );
            break
        }
        case 'PREDIKSI-PASSING-GRADE-SBMPTN-2018-ITS-SURABAYA':{
            return(
                <Artlima></Artlima>
            );
            break
        }
        case 'INFORMASI-UMUM-SBMPTN-2018-CEK-DISINI':{
            return(
                <Artenam></Artenam>
            );
            break
        }
        case 'MAU-LULUS-SBMPTN-INILAH-STARTEGI-BELAJARNYA':{
            return(
                <Arttujuh></Arttujuh>
            );
            break
        } 
        
            
    }
    
}

const Artsatu = (props) => (
        
    <div className="container artikel">
        <h1>INILAH FAKULTAS DAN JURUSAN / PROGRAM STUDI YANG ADA DI ITS SURABAYA, KAMU PILIH YANG MANA?</h1>
        <br /><br />
        <div align="center" style={{marginBottom:'50px'}}>
        <img src="/assets/artikel/artikel1.jpg" className="img-responsive" alt="Jurusan ITS"/>
        </div>

        <p>ITS memiliki sembilan bidang ilmu strategis yang menjadi pusat keunggulan bagi pengajaran ilmu pengetahuan, teknologi, dan seni di Indonesia. Berikut adalah Fakultas dan Jurusan yang ada di ITS Surabaya</p>
        <br />
        <label>FAKULTAS SAINS</label><br/>
        <p>ITS menjadi perguruan tinggi yang melahirkan penemuan ilmiah fundamental yang menginspirasi lahirnya ilmu baru dan perkembangan teknologi. Di ITS, Anda akan menemukan professor dan dosen yang mendedikasikan diri untuk penelitian yang berdampak terhadap kemanusiaan. Belajar menyusun pola pikir ilmiah dari para pakar untuk menguak rahasia alam semesta.</p>
        <p>Teknologi mutakhir dalam berbagai bidang lahir dari induk sains dasar yang meliputi Fisika, Kimia, dan Biologi. Dengan demikian, sains dasar menjadi sesuatu yang tak terpisahkan dalam inovasi di bidang ilmiah.</p>
        <p>Belajar sains dasar di ITS, Anda akan dipersiapkan menjadi seseorang yang selalu memiliki rasa ingin tahu terhadap setiap peristiwa alam di sekitar kita melalui pendekatan berpikir logis dan analitis. Para mahasiswa juga diajarkan untuk menyelesaikan masalah dari pendekatan hulu.</p>
        <br/>
        <label>FAKULTAS TEKNOLOGI INDUSTRI</label>
        <p>Dunia industri di Indonesia saat ini cukup besar dan terus berkembang. Dalam perkembangan tersebut banyak dibutuhkan ahli-ahli yang dapat menyokong pertumbuhan industri. ITS, membangun Fakultas Teknologi Industri yang menghasilkan mahasiswa-mahasiswa yang ahli, peka, serta memahami seluk beluk dunia industri dan dunia teknologi. Jurusan yang dinaungi diantaranya Teknik Mesin, Teknik Kimia, Teknik Fisika, Teknik Industri, Teknik Material.</p>
        <br/>
        <label>FAKULTAS TEKNOLOGI ELEKTRO</label>
        <p>Listrik memiliki peran penting untuk kehidupan dan kemajuan peradaban. Dalam meningkatkan kebermanfaatan listrik, dibutuhkan pula spesialis serta teknisi yang memahami listrik dan elektron. Karena itulah, ITS membangun Fakultas Teknologi Elektro untuk menghasilkan mahasiswa-mahasiswa dengan kemampuan yang sangat baik dalam memahami dan mengolah listrik serta elektron. Jurusan yang dinaungi oleh Fakultas Elektro adalah Teknik Elektro, Teknik Komputer, Teknik Biomedik.</p>
        <br/>
        <label>FAKULTAS ARSITEKTUR DESAIN DAN PERENCANAAN</label>
        <p>Perkembangan industri kreatif nasional menciptakan banyak wadah bagi masyarakat terutama generasi muda untuk berkreasi dan mengaplikasikan ilmu yang dimiliki untuk meningkatkan kemampuan diri. Fakultas Arsitektur, Desain, dan Perencanaan mendalami pendekatan ilmu desain dalam merumuskan dan menyelesaikan permasalahan yang ada di sekitar dari skala kecil sampai besar serta mengaplikasikan konsep inovatif untuk memenuhi kebutuhan.</p>
        <br/>
        <label>FAKULTAS TEKNIK SIPIL LINGKUNGAN DAN KEBUMIAN</label>
        <p>Fakultas Teknik Sipil, Lingkungan dan Kebumian (FTSLK) yang dulunya merupakan bagian dari Fakultas Teknik Sipil dan Perencanaan mempunyai kepakaran dalam berbagai bidang yang menunjang pembangunan strategis nasional berkelanjutan dan berwawasan lingkungan. Fakultas ini secara resmi berdiri tahun 2017 dengan dasar Peraturan Rektor nomer 10 Tahun 2016 tentang Organisasi dan Tata Kerja Institut Teknologi Sepuluh Nopember.</p>
        <p>Sesuai dengan target ITS maka FTSLK mempunyai target untuk menjadi wadah dari jurusan yang mempunyai reputasi internasional untuk mewujudkan word class university dan mempunyai kontribusi bagi pembangunan nasional. Untuk reputasi internasional FTSLK bekerjasama dalam bidang akademik dan penelitian dengan berbagai perguruan tinggi luar negeri dan lembaga penelitian internasional. Dalam kontribusi nasional FTSLK bersama dengan jurusan yang ada dibawahnya berperan dalam meningkatkan citra Indonesia dalam membina mahasiswa yang berprestasi dikancah regional dan internasional, menghasilkan lulusan yang mempunyai kompetensi di dalam bidangnya dan menghasilkan berbagai karya yang mempunyai kontribusi terhadap pembangunan skala nasional.</p>
        <br/>
        <label>FAKULTAS TEKNOLOGI KELAUTAN</label>
        <p>Teknologi Kelautan mempelajari penguasaan, pengembangan, pemanfaatan, dan transformasi IPTEK di bidang kelautan untuk mewujudkan pembangunan kelautan berbasis masyarakat (community-based) dan pemberdayaan masyarakat maritim yang berkelanjutan serta berwawasan lingkungan di kawasan Asia Pasifik. Fakultas Teknologi Kelautan melingkupi Jurusan Teknik Kelautan, Teknik Perkapalan, Sistem Perkapalan, dan Teknik Transportasi Laut.</p>
        <br/>
        <label>FAKULTAS MATEMATIKA, KOMPUTASI DAN SAINS DATA</label>
        <p>Fakultas Matematika, Komputasi dan Sains Data mencetak mahasiswa-mahasiswa yang dapat memahami dan mengaplikasikan ilmu hitung dan ilmu data untuk menyelesaikan berbagai permasalahan. Karena, Sejak dahulu kemampuan mengolah data dan angka sangat penting dan dibutuhkan di dunia kerja. Jurusan yang dinaungi oleh Fakultas Matematika, Komputasi dan Sains Data adalah Matematika, Statistika, dan Aktuaria.</p>
        <br/>
        <label>FAKULTAS TEKNOLOGI INFORMASI DAN KOMUNIKASI</label>
        <p>Teknologi Informasi berkaitan dengan perancangan dan pengembangan sistem berbasis komputer, yang diimplementasikan pada perangkat keras maupun perangkat lunak. Fakultas Teknologi Informasi dan Komunikasi adalah mencetak ahli dengan kemampuan teknologi komputer yang mendalam dan menguasai penyelesaian masalah teknis yang dibutuhkan, seiring modernitas zaman. Jurusan yang bernaung dalam Fakultas Teknologi Informasi dan Komunikasi adalah Sistem Informasi, Informatika, dan Teknologi Informasi.</p>
        <br/>
        <label>FAKULTAS BISNIS DAN MANAJEMEN </label>
        <p>Saat ini dunia bisnis di Indonesia semakin berkembang, baik untuk jasa maupun produk. Dalam perkembangannya pastilah diikuti dengan kebutuhan sumber daya masyarakat yang memahami dengan benar pengelolaan bisnis dan manajemen suatu proyek. ITS pun turut andil untuk mencetak mahasiswa-mahasiswa yang mampu menyokong dunia bisnis dan manajemen di Indonesia dengan membangun fakultas Bisnis dan Manajemen. Jurusan yang dinaungi oleh fakultas ini diantaranya Manajemen Bisnis, Manajemen Teknologi, Studi Pembangunan.</p>
        <br/>
        <label>FAKULTAS VOKASI</label>
        <p>Mahasiswa diploma dikenal dengan kemampuannya yang terampil, sigap, dan aktif dalam menjalankan berbagai proyek. Mengetahui hal tersebut, ITS membangun Fakultas Vokasi yang menaungi jurusan-jurusan dengan status mahasiswa berupa Diploma 3 dan Diploma 4. Jurusan tersebut diantaranya Teknik Infrastruktur Sipil, Teknik Mesin Industri, Teknik Instrumentasi, Teknik Elektro Otomasi, Teknik Kimia Industri, Statistika Bisnis.</p>

        <br/>
        <br/>
        <label>Sumber:</label>
        <p>
        <a href="http://its.ac.id" target="__blank">www.its.ac.id</a>
        </p>
    </div>
    
);

const Artdua = () => (
    <div className="container artikel">
        <h1>INILAH ALASAN KAMU HARUS MASUK ITS, FASILITASNYA OKE BANGET !!</h1>
        <br /><br />
        <div align="center" style={{marginBottom:'50px'}}>
        <img src="/assets/artikel/artikel2.jpg" className="img-responsive" alt="Jurusan ITS"/>
        </div>
        <p>Tahun 2017, ITS menduduki peringkat terbaik ke-5 di Indonesia berdasarkan penilaian Kementerian Riset, Teknologi, dan Pendiddikan Tinggi (Kemristekdikti) dan menjadi 10 universitas unggulan di Indonesia versi QS World University Ranking. Selain dari aspek pendidikan dan manejemen, ITS memiliki komitmen yang kuat pada pengelolaan lingkungan, salah satunya dengan Program Smart Eco-Campus. Berikut ini adalah beberapa fasilitas yang ada di Kampus ITS</p>
        <br />
        <label>ITS Training Center</label>
        <p>ITS Training Center adalah salah satu unit pelayanan di bawah UPT Pusat Pelatihan dan Sertifikasi Profesi, BPPU ITS. ITS Training Center bertujuan memberikan layanan pelatihan dan sertifikasi profesi bagi mahasiswa maupun kalangan profesional dalam rangka meningkatkan kompetensi pada bidang profesi tertentu. Diajar oleh kalangan akademisi/praktisi ITS yang berkompeten serta didukung dengan sarana dan fasilitas penunjang training yang lengkap menjadikan ITS Training Center sebagai pilihan </p>
        <br />
        <label>Pusat Pengembangan Karir dan Kewirausahaan</label>
        <p>Berbagai informasi dunia kerja sesuai dengan kompetensi yang dipelajari sangat membantu menjembatani mahasiswa untuk berkarir dengan penuh perencanaan sejak awal. PPK-SAC ITS juga memetakan jumlah mahasiswa ITS yang terbantu dengan keberadaan PPK-SAC dari aspek memperoleh kesempatan melakukan konsultasi psikologi dan bimbingan karir, memperoleh informasi peluang karir baik online maupun offline malalui bursa karir ITS.</p>
        <br />
        <label>UPT Bahasa dan Budaya</label>
        <p>UPT Bahasa dan Budaya – ITS berfungsi mendukung tujuan utama dari Institut dalam konteks studi ekstra kurikuler yang diharapkan dapat memenuhi celah kekurangan kompetensi bahasa Inggris di jalur kurikuler. Hal ini diberikan tugas untuk mengembangkan program pengajaran bahasa yang paling efisien dan efektif sesuai dengan kebutuhan dan kemampuan peserta, untuk melakukan penelitian bahasa kedua di murni dan terapan bidang linguistik, dan membangun jaringan komunikasi dan kerjasama di bidang pengajaran bahasa dengan perguruan tinggi baik di dalam negeri dan luar negeri.</p>
        <br />
        <label>Perpustakaan</label>
        <p>Pusat sumber belajar atau Learning Resource Center dengan fasilitas dan jasa berbasis teknologi informasi. Bertujuan untuk menunjang kurikulum dengan menyediakan informasi dan bahan pustaka yang memadai untuk mahasiswa dan dosen sehingga program akademik dapat dilaksanakan secara efektif serta membantu melestarikan karya ilmiah civitas academika seperti, tugas akhir, skripsi, tesis, disertasi, prosiding dan lain-lain</p>
        <br />
        <label>Fasilitas Olahraga</label>
        <p>ITS mengelola sejumlah fasilitas olah raga sebagai sarana pembinaan mahasiswa selain di bidang akademik. Semua fasilitas olah raga di lingkungan ITS dapat digunakan oleh mahasiswa, dosen, dan karyawan. Selain digunakan oleh civitas akademika ITS, semua fasilitas itu juga dapat digunakan oleh pihak luar. Fasilitas olahraga (Fasor) ITS berupaya untuk memberikan kontrisbusi nyata dalam layanan fasilitas oleh raga kepada stakeholder khususnya meningkatkan prestasi olah raga mahasiswa ITS dan meningkatkan perawatan sarana dan prasarana olah raga yang berkesinambungan.</p>
        <br />
        <label>Graha 10 November</label>
        <p>Graha Sepuluh Nopember ITS adalah gedung yang letak lokasinya di lingkungan Kampus yang cukup representative, mudah diakses dari berbagai penjuru Kota Surabaya dan dekat dengan pusat kota, mempunyai fasilitas cukup memadai, seperti ketersediaan listrik, pendingin dan lahan parkir yang cukup luas dan nyaman serta multifungsi yang dapat digunakan untuk berbagai keperluan antara lain: Wisuda mahasiswa ITS, berbagai seminar, pagelaran musik, temu alumni, pertemuan Dharma Wanita, pengukuhan guru besar, pendaftaran mahasiswa baru, pernikahan, tes pegawai, dan berbagai keperluan lainnya.</p>
        <br />
        <label>Asrama Mahasiswa</label>
        <p>Asrama Mahasiswa ITS ingin menjadi sarana pengembangan kepribadian, peningkatan kedisiplinan dan kepedulian sosial mahasiswa. Untuk menuju itu, Asrama Mahasiswa ITS menyediakan hunian yang layak dan kondusif, menyelenggarakan kegiatan untuk pengembangan kepribadian, peningkatan kedisiplinan mahasiswa,serta meningkatkan kepedulian sosial, nilai-nilai moralitas dan spiritualitas, dan kemampuan komunikasi mahasiswa dalam berbahasa internasional.</p>
        <br />
        <label>Masjid Manarul Ilmi</label>
        <p>Masjid Manarul Ilmi ITS yang terletak tepat di depan Gedung Rektorat ITS ini memiliki luas bangunan sebesar 2.458 m2. Saat memasuki area masjid, kita akan disuguhkan dengan pemandangan serambi yang luas, lengkap dengan tiang-tiang penyangganya yang berdiri kokoh. Melirik ke arah ruang utama masjid, kita akan melihat dinding-dinding yang terbuat dengan kayu berukir. Hal itu bertujuan untuk sirkulasi udara agar tetap terjaga. Lebih masuk lagi, secara takjub mata kita akan langsung terarahkan ke atap masjid yang luas berbentuk limas segi empat.</p>
        <br />
        <label>Medical Center</label>
        <p>Pusat pelayanan kesehatan untuk civitas akademika ITS dan masyarakat umum. Berupa unit rawat jalan yang melaksanakan pelayanan pemeriksaan, tindakan medis, penunjang medis, dan rujukan.</p>
        <br />
        <label>ITS Press</label>
        <p>Sarana pengelola yang melayani bidang produksi percetakan dan penerbitan di lingkungan ITS. ITS Press melayani pembuatan dan penerbitan jurnal ilmiah, berita ITS, buku ajar, percetakan umum, laporan akademis, penyediaan media cetak untuk pendidikan serta penelitian.</p>
        <br/>
        <br/>
        <label>Sumber:</label>
        <p>
        <a href="http://its.ac.id" target="__blank">www.its.ac.id</a>
        </p>
    </div>
);

const Arttiga = () => (
    <div className="container artikel">
        <h1>INILAH ALASAN KAMU HARUS MASUK ITS, FASILITASNYA OKE BANGET !!</h1>
        <br /><br />
        <div align="center" style={{marginBottom:'50px'}}>
        <img src="/assets/artikel/artikel3.jpg" className="img-responsive" alt="Jurusan ITS"/>
        </div>
        <p>Mulai tahun akademik 2013/2014, biaya pendidikan mahasiswa baru jalur SNMPTN dan SBMPTN menggunakan satu komponen biaya yaitu Uang Kuliah Tunggal (UKT) untuk semua program studi kecuali Program Studi Double Degree Marine Engineering atau Double Degree Teknik Sistem Perkapalan. Besaran UKT tergantung dari indeks kemampuan sosial ekonomi dari orang tua</p>
        <p>Uang Kuliah Tunggal (UKT) di ITS dibagi dalam 7 (tujuh) kategori yang disesuaikan dengan kemampuan ekonomi orang tua mahasiswa. Indeks kemampuan ekonomi orang tua ditentukan pada saat daftar ulang. Nilai kategori, Indeks kemampuan ekonomi orang tua dan tarif UKT dapat dilihat pada tabel berikut. UKT diberlakukan untuk semua calon mahasiswa yang diterima di berbagai program studi melalui SNMPTN kecuali Program Studi Double Degree Teknik Sistem Perkapalan (Marine Engineering).</p>
        <br />
        <label>Kategori dan Tarif Uang Kuliah Tunggal (UKT) Tahun 2018/2019</label>
        <table className="table">
            <thead>
                <tr>
                    <th>Kategori</th>
                    <th>Tarif UKT</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Rp 500.000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Rp 1000.000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Rp 2.500.000</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Rp 4.000.000</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Rp 5000.000</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Rp 6000.000</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Rp 7500.000</td>
                </tr>
            </tbody>

        </table>
        <br />
        <p>Biaya pendidikan pada program Double Degree Marine Engineering sebesar Rp 19.700.000 pada semester pertama dan Rp 17.500.000 pada semester berikutnya.</p>
        <p>
            Adapun untuk mahasiswa jalur PKM berlaku tariff berbeda, yaitu sebagai berikut :
            <ul className="nav">
                <li>
                    <label>Program Kemitraan</label>
                    <ul>
                        <li>
                            <label>Uang Kuliah(UK)</label>
                            <p>Sebesar Rp. 7.500.000,00 per semester untuk semua program studi, kecuali untuk biaya pendidikan pada program Double Degree Marine Engineering sebesar Rp 19.700.000,00 pada semester pertama dan Rp 17.500.000,00 pada semester berikutnya.</p>
                        </li>
                        <li>
                            <label>Sumbangan Pengembangan Institusi</label>
                            <p>Sesuai dengan yang telah disepakati dalam Piagam Kerjasama Kemitraan antara ITS dengan Mitra ITS.</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <label>Program Mandiri</label>
                    <ul>
                        <li>
                            <label>Uang Kuliah(UK)</label>
                            <p>Sebesar Rp. 7.500.000,00 per semester untuk semua program studi, kecuali untuk biaya pendidikan pada program Double Degree Marine Engineering sebesar Rp 19.700.000,00 pada semester pertama dan Rp 17.500.000,00 pada semester berikutnya.</p>
                        </li>
                        <li>
                            <label>Sumbangan Pengembangan Institusi</label>
                            <p>Besarnya sesuai tabel dibawah ini:</p>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Fakultas</th>
                                        <th>Program Study</th>
                                        <th>SPI(Rp)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)</td>
                                        <td>
                                            <tr>Fisika</tr>
                                            <tr>Matematika</tr>
                                            <tr>Statistika</tr>
                                            <tr>Kimia</tr>
                                            <tr>Biologi</tr>
                                        </td>
                                        <td>
                                            <tr>30.000.000</tr>
                                            <tr>30.000.000</tr>
                                            <tr>50.000.000</tr>
                                            <tr>50.000.000</tr>
                                            <tr>20.000.000</tr>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fakultas Teknologi Industri (FTI)</td>
                                        <td>
                                            <tr>T. Mesin</tr>
                                            <tr>T. Kimia</tr>
                                            <tr>T. Fisika</tr>
                                            <tr>T. Industri</tr>
                                            <tr>T. Material</tr>
                                        </td>
                                        <td>
                                            <tr>75.000.000</tr>
                                            <tr>75.000.000</tr>
                                            <tr>75.000.000</tr>
                                            <tr>75.000.000</tr>
                                            <tr>75.000.000</tr>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fakultas Teknik Sipil dan Perencanaan (FTSP)</td>
                                        <td>
                                            <tr>T. Sipil</tr>
                                            <tr>Arsitektur</tr>
                                            <tr>T. Lingkungan</tr>
                                            <tr>Desain Produk Industri</tr>
                                            <tr>T. Geomatika</tr>
                                            <tr>Perencanaan Wilayah dan Kota</tr>
                                            <tr>T. Geofisika</tr>
                                            <tr>Desain Interior</tr>
                                        </td>
                                        <td>
                                            <tr>75.000.000</tr>
                                            <tr>75.000.000</tr>
                                            <tr>75.000.000</tr>
                                            <tr>75.000.000</tr>
                                            <tr>60.000.000</tr>
                                            <tr>75.000.000</tr>
                                            <tr>60.000.000</tr>
                                            <tr>50.000.000</tr>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fakultas Teknologi Kelautan (FTK)</td>
                                        <td>
                                            <tr>T. Perkapalan</tr>
                                            <tr>T. Sistem Perkapalan</tr>
                                            <tr>Double Degree Marine Engineering</tr>
                                            <tr>T. Kelautan</tr>
                                            <tr>Transportasi Laut</tr>
                                        </td>
                                        <td>
                                            <tr>50.000.000</tr>
                                            <tr>60.000.000</tr>
                                            <tr>0</tr>
                                            <tr>50.000.000</tr>
                                            <tr>50.000.000</tr>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fakultas Teknologi Informasi (FTIF)</td>
                                        <td>
                                            <tr>T. Informatika</tr>
                                            <tr>Sistem Informa</tr>                                            
                                        </td>
                                        <td>
                                            <tr>75.000.000</tr>
                                            <tr>75.000.000</tr>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fakultas Teknologi Elektro (FTE)</td>
                                        <td>
                                            <tr>T. Elektro</tr>
                                            <tr>T. Komputer</tr>
                                            <tr>T. Biomedik</tr>
                                        </td>
                                        <td>
                                            <tr>75.000.000</tr>
                                            <tr>75.000.000</tr>
                                            <tr>75.000.000</tr>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fakultas Bisnis dan Manajemen Teknologi</td>
                                        <td>
                                            <tr>Manajemen Bisnis</tr>
                                        </td>
                                        <td>
                                            <tr>75.000.000</tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </li>
            </ul>
        </p>
        <br/>
        <br/>
        <label>Sumber:</label>
        <p>
        <a href="http://its.ac.id" target="__blank">www.its.ac.id</a>
        </p>

    </div>
);

const Artempat = () => (
    <div className="container artikel">
        <h1>PROGRAM STUDI DAN DAYA TAMPUNG SBMPTN 2018 DI ITS</h1>
        <br /><br />
        <div align="center" style={{marginBottom:'50px'}}>
        <img src="/assets/artikel/artikel4.jpg" className="img-responsive" alt="Jurusan ITS"/>
        </div>
        <p>Berikut daftar daya tampung SBMPTN pada masing-masing program studi di ITS tahun 2018 berdasarkan Surat Keputusan Rektor Institut Teknologi Sepuluh Nopember Nomor: 00093/IT2/HK.00.01/2018 tentang Penetapan Daya Tampung Mahasiswa baru Program Sarjana (S-1) Tahun Akademik 2018/2019 Institut Teknologi Sepuluh Nopember. Selain itu, juga diberikan data peminat dan keketatan tahun 2017.</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Fakultas</th>
                    <th>Program Study</th>
                    <th>Daya Tampung</th>
                    <th>Data Peminat</th>
                    <th>Data Keketatan</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Fakultas Ilmu Alam(FIA)
                    </td>
                    <td>
                        <tr>Fisika</tr>
                        <tr>Kimia</tr>
                        <tr>Biologi</tr>
                    </td>
                    <td>
                        <tr>48</tr>
                        <tr>48</tr>
                        <tr>40</tr>
                    </td>
                    <td>
                        <tr>477</tr>
                        <tr>556</tr>
                        <tr>524</tr>
                    </td>
                    <td>
                        <tr>10,9%</tr>
                        <tr>8.6%</tr>
                        <tr>6,9%</tr>
                    </td>  
                </tr>
                
                <tr>
                    <td>
                        Fakultas Teknologi Industri (FTI)
                    </td>
                    <td>
                        <tr>T. Mesin</tr>
                        <tr>T. Kimia</tr>
                        <tr>T. Fisika</tr>
                        <tr>T. Industri</tr>
                        <tr>T. Material</tr>
                    </td>
                    <td>
                        <tr>80</tr>
                        <tr>64</tr>
                        <tr>60</tr>
                        <tr>80</tr>
                        <tr>60</tr>
                    </td>
                    <td>
                        <tr>2144</tr>
                        <tr>1185</tr>
                        <tr>957</tr>
                        <tr>1833</tr>
                        <tr>1019</tr>
                    </td>
                    <td>
                        <tr>4,2%</tr>
                        <tr>5,4%</tr>
                        <tr>6,3%</tr>
                        <tr>4,4%</tr>
                        <tr>5,1%</tr>
                    </td>  
                </tr>

                <tr>
                    <td>
                    Fakultas Teknik Sipil, Lingkungan dan Kebumian (FTSLK)
                    </td>
                    <td>
                        <tr>T. Sipil</tr>
                        <tr>T. Lingkungan</tr>
                        <tr>T. Geomatika</tr>
                        <tr>T. Geofisika</tr>
                    </td>
                    <td>
                        <tr>60</tr>
                        <tr>48</tr>
                        <tr>44</tr>
                        <tr>24</tr>
                    </td>
                    <td>
                        <tr>2246</tr>
                        <tr>1124</tr>
                        <tr>748</tr>
                        <tr>417</tr>
                    </td>
                    <td>
                        <tr>2,7%</tr>
                        <tr>3,9%</tr>
                        <tr>5,9%</tr>
                        <tr>6,2%</tr>
                    </td>  
                </tr>

                <tr>
                    <td>
                    Fakultas Teknologi Kelautan (FTK)
                    </td>
                    <td>
                        <tr>Teknik Perkapalan</tr>
                        <tr>Teknik Sistem Perkapalan</tr>
                        <tr>Double Degree Teknik Sistem Perkapalan**)</tr>
                        <tr>Teknik Kelautan</tr>
                        <tr>Teknik Transportasi Laut</tr>
                    </td>
                    <td>
                        <tr>36</tr>
                        <tr>54</tr>
                        <tr>24</tr>
                        <tr>52</tr>
                        <tr>20</tr>
                    </td>
                    <td>
                        <tr>1022</tr>
                        <tr>933</tr>
                        <tr>380</tr>
                        <tr>1046</tr>
                        <tr>449</tr>
                    </td>
                    <td>
                        <tr>3,5%</tr>
                        <tr>3,9%</tr>
                        <tr>4,2%</tr>
                        <tr>4,6%</tr>
                        <tr>4,5%</tr>
                    </td>  
                </tr>

                <tr>
                    <td>
                        Fakultas Teknologi Informasi dan Komunikasi(FTIF)
                    </td>
                    <td>
                        <tr>T. Informatika</tr>
                        <tr>Sistem Informasi</tr>
                        <tr>Teknologi Informasi</tr>
                    </td>
                    <td>
                        <tr>72</tr>
                        <tr>60</tr>
                        <tr>18</tr>
                    </td>
                    <td>
                        <tr>2537</tr>
                        <tr>1626</tr>
                        <tr></tr>
                    </td>
                    <td>
                        <tr>3,3%</tr>
                        <tr>3,7%</tr>
                        <tr></tr>
                    </td>  
                </tr>

                <tr>
                    <td>
                        Fakultas Matematika, Komputasi dan Sains Data(FMKSD)
                    </td>
                    <td>
                        <tr>Matematika</tr>
                        <tr>Statistika</tr>
                        <tr>Sains Aktuaria</tr>
                    </td>
                    <td>
                        <tr>52</tr>
                        <tr>44</tr>
                        <tr>24</tr>
                    </td>
                    <td>
                        <tr>612</tr>
                        <tr>1047</tr>
                        <tr></tr>
                    </td>
                    <td>
                        <tr>8,5%</tr>
                        <tr>5,0%</tr>
                        <tr></tr>
                    </td>  
                </tr>

                <tr>
                    <td>
                        Fakultas Teknologi Elektro(FTE)
                    </td>
                    <td>
                        <tr>T. Elektro</tr>
                        <tr>T. Komputer</tr>
                        <tr>T. Biomedik</tr>
                    </td>
                    <td>
                        <tr>96</tr>
                        <tr>32</tr>
                        <tr>30</tr>
                    </td>
                    <td>
                        <tr>1551</tr>
                        <tr>675</tr>
                        <tr>453</tr>
                    </td>
                    <td>
                        <tr>4,1%</tr>
                        <tr>3,0%</tr>
                        <tr>4,4%</tr>
                    </td>  
                </tr>

                <tr>
                    <td>
                        Fakultas Arsitektur, Desain dan Perencanaan(FADP)
                    </td>
                    <td>
                        <tr>Arsitektur</tr>
                        <tr>Perencanaan Wilayah dan Kota</tr>
                        <tr>Desain Produk</tr>
                        <tr>Desain Interior</tr>
                    </td>
                    <td>
                        <tr>40</tr>
                        <tr>44</tr>
                        <tr>48</tr>
                        <tr>28</tr>
                    </td>
                    <td>
                        <tr>1623</tr>
                        <tr>1174</tr>
                        <tr>851</tr>
                        <tr>635</tr>
                    </td>
                    <td>
                        <tr>2,5%</tr>
                        <tr>3,7%</tr>
                        <tr>5,6%</tr>
                        <tr>4,1%</tr>
                    </td>  
                </tr>

                <tr>
                    <td>
                        Fakultas Bisnis dan Manajemen Teknologi(FBMT)
                    </td>
                    <td>
                        <tr>Manajemen Bisnis</tr>
                        
                    </td>
                    <td>
                        <tr>60</tr>
                        
                    </td>
                    <td>
                        <tr>1438</tr>
                        
                    </td>
                    <td>
                        <tr>3,1%</tr>                        
                    </td>  
                </tr>
                <tr>
                    <td></td>
                    <td><label>Jumlah</label></td>
                    <td>1490</td>
                </tr>

            </tbody>
        </table>

    </div>
);

const Artlima = () => (
    <div className="container">
        <h1>PREDIKSI PASSING GRADE SBMPTN 2018 ITS SURABAYA</h1>
        <br /><br />
        <div align="center" style={{marginBottom:'50px'}}>
        <img src="/assets/artikel/artikel5.jpg" className="img-responsive" alt="Jurusan ITS"/>
        </div>
        <p>Passing Grade ITS merupakan angka untuk mengindikasikan tingkat kesukaran untuk dapat lolos seleksi masuk ITS melalui SBMPTN. Pada tahun 2017, jumlah peminat siswa siswi SMA yang ingin masuk ITS bertambah cukup signifikan dibandingkan tahun-tahun sebelumnya berdasarkan data SBMPTN 2017. Oleh karena itu, passing grade ITS mempunyai angka rata-rata yang relatif tinggi dari kebanyakan passing grade universitas-universitas lainnya. Kalau begitu, yuk simak passing grade ITS dibawah ini:</p>
        <label>Passing Grade ITS Institut Teknologi Sepuluh November Surabaya</label>
        <table className="table">
            <thead>
                <tr>
                    <th>Program Study</th>
                    <th>Passing Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Teknik Informatika</td>
                    <td>59,50%</td>
                </tr>
                <tr>
                    <td>Teknik Elektro</td>
                    <td>57,70%</td>
                </tr>
                <tr>
                    <td>Teknik Kimia</td>
                    <td>56,60%</td>
                </tr>
                <tr>
                    <td>Teknik Industri</td>
                    <td>53,80%</td>
                </tr>
                <tr>
                    <td>Teknik Lingkungan</td>
                    <td>52,40%</td>
                </tr>
                <tr>
                    <td>Teknik Mesin</td>
                    <td>51,50%</td>
                </tr>
                <tr>
                    <td>Sistem Informasi</td>
                    <td>47,40%</td>
                </tr>
                <tr>
                    <td>Teknik Perkapalan</td>
                    <td>47,36%</td>
                </tr>
                <tr>
                    <td>Teknik Sipil</td>
                    <td>45,33%</td>
                </tr>
                <tr>
                    <td>Teknik Sistem Perkapalan</td>
                    <td>43,47%</td>
                </tr>
                <tr>
                    <td>Arsitektur</td>
                    <td>42,77%</td>
                </tr>
                <tr>
                    <td>Teknik Kelautan</td>
                    <td>42,47%</td>
                </tr>
                <tr>
                    <td>Teknik Fisika</td>
                    <td>40,19%</td>
                </tr>
                <tr>
                    <td>Statistika</td>
                    <td>38,91%</td>
                </tr>
                <tr>
                    <td>Teknik Geodesi</td>
                    <td>38,16%</td>
                </tr>
                <tr>
                    <td>Matematika</td>
                    <td>36,11%</td>
                </tr>
                <tr>
                    <td>Fisika</td>
                    <td>35,69%</td>
                </tr>
                <tr>
                    <td>Teknik Material</td>
                    <td>35,16%</td>
                </tr>
                <tr>
                    <td>Kimia</td>
                    <td>34,16%</td>
                </tr>
                <tr>
                    <td>Desain Produk Industri</td>
                    <td>33,22%</td>
                </tr>
                <tr>
                    <td>Biologi</td>
                    <td>31,50%</td>
                </tr>
            </tbody>
        </table>
        <br/>
        <p>Nah, sekarang kamu sudah tahu kan data passing grade ITS? Buat kamu yang ingin bercita-cita sebagai insinyur atau sarjana teknik, tidak ada salahnya mempersiapkan diri untuk masuk ITS Surabaya. Passing grade ITS dapat menjadi referensi dan tolak ukur ketika berlatih ataupun try-out masuk universitas dalam menghadapi ujian SBMPTN yang sesungguhnya. Kemudian, informasi mengenai daya tampung per jurusan juga sangat penting untuk diketahui oleh para siswa-siswi SMA yang ingin menjadi sarjana teknik. </p>

    </div>
);

const Artenam = () => (
    <div className="container artikel">
        <h1>INFORMASI UMUM SBMPTN 2018, CEK DISINI !</h1>
        <br /><br />
        <div align="center" style={{marginBottom:'50px'}}>
        <img src="/assets/artikel/artikel6.jpg" className="img-responsive" alt="Jurusan ITS"/>
        </div>
        <br/>
        <label>Prosedur Pendaftaran</label>
        <ul className="nav">
            <li>
                <p>&nbsp; a. Pendaftaran SBMPTN 2018 dilakukan secara online. Tata cara pendaftaran secara lengkap dapat dilihat pada laman &nbsp;
                <a href="http://pendaftaran.sbmptn.ac.id" target="__blank">Pendaftaran</a></p>
            </li>
            <li>
                <p>&nbsp; b. Tata cara pengisian borang pendaftaran ujian tulis dan keterampilan dapat diunduh (download) dari laman &nbsp;
                <a href="http://download.sbmptn.ac.id" target="__blank">Download</a>&nbsp; mulai tanggal 29 Maret 2018</p>
            </li>
            <li>
                <p>&nbsp; c. Pendaftaran online UTBC dan UTBK mulai tanggal 5 April 2018 pukul 08.00 WIB dan berakhir tanggal 27 April 2018 pukul 22.00 WIB. Pendaftaran onlineUTBK akan ditutup apabila jumlah kuota pendaftar telah terpenuhi.</p>
            </li>
            
        </ul>
        <br/>
        <label>Jenis Ujian</label>
        <ul className="nav">
            <li>
                <label>Ujian Tulis (UTBC atau UTBK)</label>
                <p>Materi Ujian Tulis Terdiri dari:</p>
                <ul>
                    <li>Tes Kemampuan dan Potensi Akademik (TKPA) terdiri atas mata uji Matematika Dasar, Bahasa Indonesia, Bahasa Inggris, TPA Verbal, TPA Numerikal, dan TPA Figural.</li>
                    <li>Tes Kemampuan Dasar Sains dan Teknologi (TKD Saintek) terdiri atas mata uji Matematika IPA, Biologi, Kimia, dan Fisika.</li>
                    <li>Tes Kemampuan Dasar Sosial dan Humaniora (TKD Soshum) terdiri atas mata uji Sosiologi, Sejarah, Geografi, dan Ekonomi.</li>
                    <li>Ujian tulis dilaksanakan dengan 2 (dua) metode, yaitu Ujian Tulis Berbasis Cetak (UTBC) atau Ujian Berbasis Komputer (UTBK).</li>

                </ul>
            </li>
            <br></br>
            <li>
                <label>Ujian Keterampilan</label>
                <p>Ujian Keterampilan (UK) diperuntukkan bagi peserta yang memilih program studi bidang seni dan keolahragaan terdiri atas:</p>
                <ul>
                    <li>UK Seni Rupa, Kriya, dan Desain berupa Tes Menggambar, serta Tes Pengetahuan dan Wawasan. Soal tes dibedakan dalam 3 (tiga) kategori sesuai bidang studi yaitu UK Seni Rupa, UK Kriya, dan UK Desain. </li>
                    <li>UK Tari berupa Tes Tari Bentuk, Tes Kreativitas, Imitasi Gerak, serta Tes Pengetahuan dan Wawasan (dalam bentuk wawancara).</li>
                    <li>UK Musik, Seni Karawitan dan Etnomusikologi berupa Tes Musikalitas, Tes Praktik Instrumen, serta Tes Pengetahuan dan Wawasan (dalam bentuk wawancara). Soal tes dibedakan dalam 2 (dua) kategori sesuai bidang studi yaitu UK Musik atau UK Seni Karawitan dan Etnomusikologi.</li>
                    <li>UK Teater dan Seni Pertunjukan berupa Tes Praktik Monolog, Tes Pantomim/Baca Puisi, serta Tes Pengetahuan dan Wawasan (dalam bentuk wawancara)</li>
                    <li>UK Fotografi berupa Tes Praktik Fotografi serta Tes Pengetahuan dan Wawasan (dalam bentuk wawancara).</li>
                    <li>UK Film dan Televisi berupa Tes Praktik Membuat Storyboard serta Tes Pengetahuan dan Wawasan (dalam bentuk wawancara).</li>
                    <li>UK Olahraga berupa Tes Kesehatan dan Tes Keterampilan Motorik.</li>

                </ul>
            </li>
        </ul>
        <br />
        <label>Kelompok Ujian</label>
        <p>Kelompok ujian tulis SBMPTN terbagi menjadi 3 (tiga) jenis, yaitu:</p>
        <ul>
            <li>Kelompok Ujian Sains dan Teknologi (Saintek) dengan materi ujian TKPA dan TKD Saintek.</li>
            <li>Kelompok Ujian Sosial dan Humaniora (Soshum) dengan materi ujian TKPA dan TKD Soshum.</li>
            <li>Kelompok Ujian Campuran dengan materi ujian TKPA, TKD Saintek, dan TKD Soshum.</li>
        </ul>
        <p>Setiap peserta dapat memilih kelompok ujian Saintek, Soshum, atau Campuran.</p>
        <br />
        <label>Kelompok Program Studi dan Jumlah Pilihan</label>
        <ul>
            <li>Program Studi yang ada di PTN dibagi menjadi dua kelompok, yaitu kelompok Saintek dan kelompok Soshum.</li>
            <li>Peserta dapat memilih program studi sebanyak-banyaknya 3 (tiga) program studi dengan ketentuan sebagai berikut:
                <ul>
                    <li>Jika program studi yang dipilih semuanya dari kelompok Saintek, peserta mengikuti kelompok ujian Saintek.</li>
                    <li>Jika program studi yang dipilih semuanya dari kelompok Soshum, peserta mengikuti kelompok ujian Soshum.</li>
                    <li>Jika program studi yang dipilih terdiri atas kelompok Saintek dan Soshum, peserta mengikuti kelompok ujian Campuran.</li>
                </ul>
            </li>
            <li>Urutan dalam pemilihan program studi menyatakan prioritas pilihan.</li>
            <li>Peserta ujian yang hanya memilih 1 (satu) program studi dapat memilih program studi di PTN mana pun.</li>
            <li>Peserta ujian yang memilih 2 (dua) atau 3 (tiga) program studi, salah satu program studi pilihannya harus di PTN yang berada dalam satu wilayah pendaftaran dengan tempat peserta mengikuti ujian. Pilihan Program Studi yang lain dapat di PTN yang berada di luar wilayah pendaftaran tempat peserta mengikuti ujian.</li>
            <li>Daftar wilayah pendaftaran, program studi, daya tampung per PTN tahun 2018, dan jumlah peminat program studi per PTN tahun 2017 dapat dilihat di laman <a href="http://www.sbmptn.ac.id" target="__blank">SBMPTN</a> mulai tanggal 29 Maret 2018.</li>

        </ul>
        <br />
        <label>Biaya Seleksi</label>
        <ul>
            <li>Biaya seleksi yang ditanggung oleh peserta adalah sebesar Rp. 200.000,00 (dua ratus ribu rupiah).</li>
            <li>Biaya seleksi dapat dibayarkan melalui salah satu bank berikut: Bank Mandiri, BNI, atau BTN.</li>
            <li>Biaya seleksi yang sudah dibayarkan tidak dapat ditarik kembali dengan alasan apa pun.</li>

        </ul>
        <br />
        <label>Jadwal Ujian</label>
        <ul>
            <li>Ujian Tulis (UTBC dan UTBK):
            UTBC dan UTBK dilaksanakan pada hari Selasa, tanggal 8 Mei 2018.</li>
            <li>Ujian Keterampilan :
            Ujian Keterampilan dilaksanakan pada hari Rabu dan/atau Jumat, tanggal 9 dan/atau 11 Mei 2018.</li>
        </ul>
        <br />
        <label>Pengumuman Hasil Seleksi</label>
        <p>Hasil ujian akan diumumkan pada hari Selasa, 3 Juli 2018 mulai pukul 17.00 WIB dan dapat diakses di laman <a href="http://pengumuman.sbmptn.ac.id" target="__blank">Pengumuman</a>.</p>

    </div>
);

const Arttujuh = () => (
    <div className="container">
        <h1>MAU LULUS SBMPTN? INILAH STARTEGI BELAJARNYA</h1>
        <br /><br />
        <div align="center" style={{marginBottom:'50px'}}>
        <img src="/assets/artikel/artikel7.jpg" className="img-responsive" alt="Jurusan ITS"/>
        </div>
        <br />
        <p>Masuk dan berkuliah di PTN impian memang harapan beberapa pelajar. Maka dari itu ikuti beberapa trik yang semoga bermanfaat bagi adik-adik yang ingin mengikuti SBMPTN yang terkenal sulit tersebut. Asal mau berusaha dengan sungguh-sungguh dan menerapkan tips dibawah ini kamu bisa menggapai PTN impianmu. Tips-tips ini merupakan testimoni beberapa kakak yang sudah diterima di PTN impian mereka.</p>
        <ul>
        <li><label>Bersiaplah mulai dari sekarang</label>
        <p>Jangan menunda-nunda waktu, meskipun kalian berharap masuk PTN impian  lewat jalur SNMPTN, kalian juga harus bersiap untuk kemungkinan terburuk, misalnya kalian gak lolos di SNMPTN. Maka dari itu kalian harus mempersiapkan kemungkinan terburuk. setidaknya kalian sudah mulai mental dan fisik untuk menghadapi SBMPTN.</p></li>

        <li><label> Buka Websitenya, pelajari cara penilaian dan kampus mana saja yang menerima mahasiswa lewat jalur SBMPTN</label>
        <p>Ini sangat PENTING, kita harus tahu medan dimana kita bertempur, dengan membuka websitenya kita akan tahu bagaiman sistem penerimaan mahasiswa lewat jalur ini dengan ini kita bisa mengambil strategi belajar. Jangan lupa cek apakah PTN impianmu masuk dalam daftar kampus yang menerima mahasiswa lewat jalur ini, begitu pula jurusan yang ingin kamu ambil.</p></li>

        <li><label>Unduh dan pelajari soal-soal tahun lalu dan sebelum-sebelumnya</label>
        <p>Soal-soal yang ada dalam SBMPTN memang didesain khusus untuk menyaring palajar-pelajar yang benar-benar memiliki bekal di perkuliahan kelak. Berbeda dengan Ujian Nasional  yang memang didesain khusus untuk melihat sejauh mana materi yang diberikan di bangku sekolah telah dikuasai. Maka dari itu kamu juga harus memilki gambaran seperti apa soal-soal di SBMPTN yang pastinya beda banget dengan soal-soal Ujian Nasional. Unduh materi-materi, contoh soal-soal mulai dari 5 tahun bahkan 10 tahun sebelumnya. kalian bisa membeli buku soal-soal SBMPTN  di toko buku, atau mengunduh dari internet pun juga tidak masalah.</p></li>

        <li><label>Jangan hanya menghafal, konsep dasar juga penting</label>
        <p>Kumpulkan semua ringkasan materi terlebih lagi KONSEP DASAR MATA PELAJARAN. Jangan hanya engandalkan  menghafal pelajaran, terutama mata pelajaran yang berhubungan dengan ilmu sosial seperti sosiologi, geografi. Pelajari konsep dasarnya, pahami juga rumus-rumus, kata kunci dll. Kalian bisa belajar dari youtube, buku, perpustakaan bahkan guru kalian ketika sekolah. Sekarang juga banyak kok video-video yang menunjang pake banget belajar kalian. Gak perlu bimbel deh.</p></li>
        <li><label>Pelajari setiap soal dari tahun ke tahun, lihat soal apa yang paling hits (SERING MUNCUL)</label>
        <p>Carilah soal ynag plaing banyak dan sering muncul, kemudian bandingkan dengan tahun sebelumnya dan sesudahnya juga. Pelajari dan kuasi materinya dengan sungguh-sungguh, baru kemudian soal-sola lain-lain.  Jangan menyepelekan belajar. Asah terus kemapuan kalian, belajar berulang-ulang biar makin mantap.</p></li>

        <li><label>Sharing dan do'a</label>
        <p>Berbagilah dengan sesama pejuang SBMPTN, saling berbagi materi, contoh soal, keluh kesah, tips, informasi kmapus dan lain-lain. Jangan lupa beribadah dengan rajin, ubah kebiasaan buruk kalian siapa tahu Tuhan tersentuh denagn usaha kalian. Jangan lupakan juga sering-seringlah bertanya pada kakak yang sudah diterima. Ambil cerita keberhasilan mereka sebagai penyemangat, dan ambil juga cerita kegagalan mereka guna berhati-hati di ujian mendatang.</p></li>

        </ul>

    </div>
);



class Blog extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="blog">
                    {/* <Indexart></Indexart> */}

                    <Switch>
                    <Route exact path="/blog" component={Indexart} />                    
                    
                    <Route path="/blog/:myartikel" component={myartikel}/>
                    
                    </Switch>
                
                </div>
            </BrowserRouter>
        );
    }
}

export default Blog