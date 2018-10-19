import React, {Component} from 'react';



class Joingroup extends Component{
    constructor(props){
        super(props);

        this.handleJoin = this.handleJoin.bind(this);
    }

    handleJoin(e){
        e.preventDefault();
        window.open("http://bit.ly/ceritajuara","__blank");
    }
    render(){
        return(
            <div className="container-fluid join">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4" align="center">
                    <h4>Yuk gabung di grup Pejuang SBMPTN 2019</h4>
                    <h5>Gratis Tips dan Trik serta soal pembahasan SBMPTN</h5>
                    <br/>
                    <button onClick={this.handleJoin} className="btn btn-danger btn-lg">Join Group Kita Yuk!!</button>
                    </div>
                </div>                
            </div>
        );
    }
}



export default Joingroup