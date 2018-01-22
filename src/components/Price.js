import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Price extends Component{
    render(){
        return(
            
            <div className="biaya">
            <div className="container" align="center">                
                <h3>Biaya</h3>
                <br/><br/>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-primary ">
                        <div className="panel-heading">
                            <label htmlFor=""><h3>Untuk 5 Pendaftar Pertama</h3></label>
                        </div>
                        <div className="panel-body panel-harga">
                            <h4 className="coret">Rp 19.898.000</h4>
                            <h2>RP. 16.898.000</h2>                        
                        </div>
                        <div className="panel-footer">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScZz99MDDV3CW2KYddSufg7oWmnlzli3k4nrwD_7KY46WTMjQ/viewform" className="btn btn-success" target="__blank">
                                <h4>Daftar Sekarang</h4>
                            </a>
                        </div>
                        
                        </div>
                    </div>
                </div>

                
            </div>
            </div>
        );
    }
}

ReactDOM.render(<Price />, document.getElementById('root'));

export default Price;