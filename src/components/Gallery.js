import React, {Component} from 'react'


class Gallery extends Component{
    render(){
        return(
            <div className="container-fluid galery">    
            <h3 align="center">Gallery</h3>
            <br/><br/>
                <div className="row">

                    <div className="col-md-3">
                        <img src="/assets/gallery/galeri1.JPG" alt="" className="img-responsive" style={{marginBottom:"30px"}}/>
                    </div>
                    <div className="col-md-3">
                        <img src="/assets/gallery/galeri2.JPG" alt="" className="img-responsive" style={{marginBottom:"30px"}}/>
                    </div>
                    <div className="col-md-3">
                        <img src="/assets/gallery/galeri3.jpg" alt="" className="img-responsive" style={{marginBottom:"30px"}}/>
                    </div>
                    <div className="col-md-3">
                        <img src="/assets/gallery/galeri4.JPG" alt="" className="img-responsive" style={{marginBottom:"30px"}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <img src="/assets/gallery/galeri5.JPG" alt="" className="img-responsive" style={{marginBottom:"30px"}}/>
                    </div>
                    <div className="col-md-3">
                        <img src="/assets/gallery/galeri6.JPG" alt="" className="img-responsive" style={{marginBottom:"30px"}}/>
                    </div>
                    <div className="col-md-3">
                        <img src="/assets/gallery/galeri7.JPG" alt="" className="img-responsive" style={{marginBottom:"30px"}}/>
                    </div>
                    <div className="col-md-3">
                        <img src="/assets/gallery/galeri8.JPG" alt="" className="img-responsive" style={{marginBottom:"30px"}}/>
                    </div>       
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <img src="/assets/gallery/galeri9.JPG" alt="" className="img-responsive" style={{marginBottom:"30px"}}/>
                    </div>       
                    <div className="col-md-3">
                        <img src="/assets/gallery/galeri10.JPG" alt="" className="img-responsive" style={{marginBottom:"30px"}}/>
                    </div>       
                    <div className="col-md-3">
                        <img src="/assets/gallery/galeri11.JPG" alt="" className="img-responsive" style={{marginBottom:"30px"}}/>
                    </div>       
                    <div className="col-md-3">
                        <img src="/assets/gallery/galeri12.JPG" alt="" className="img-responsive" style={{marginBottom:"30px"}}/>
                    </div>       
                </div>
                     
            </div>
        );
    }
}



export default Gallery;