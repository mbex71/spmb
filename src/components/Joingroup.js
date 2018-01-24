import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Joingroup extends Component{
    constructor(props){
        super(props);

        this.handleJoin = this.handleJoin.bind(this);
    }

    handleJoin(e){
        e.preventDefault();
        window.open("http://bit.ly/juarasbmptn","__blank");
    }
    render(){
        return(
            <div className="container-fluid join">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4" align="center">
                    <h4>Yuk Gabung di Group SBMPTN 2018</h4>
                    <h5>Gratis Soal & Pembahasan Materi SBMPTN 2018</h5>
                    <br/>
                    <button onClick={this.handleJoin} className="btn btn-danger btn-lg">Join Group Kita Yuk!!</button>
                    </div>
                </div>                
            </div>
        );
    }
}

ReactDOM.render('<Joingroup />',document.getElementById('root'));

export default Joingroup