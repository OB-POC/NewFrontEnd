import React from 'react';
import Header from '../headernew';
import Sidebar from '../sidebar';

import services from '../../services'
import './style.css';

export default class Offerings extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            cardData : []
        }
    }


    componentWillMount(){
        var context = this
            var token = sessionStorage.getItem("token");
          services.makePaymentCall(token,function (data) {
            services.offeringCall(token,function (data1) {
              context.setState({cardData : data1});
              setTimeout(function(){
                context.setState({timer: true,type:data.totalAvailableBalance});
              }.bind(this),2000)
            })
          })
        
        }

    componentDidMount(){
        var username =
        this.setState({
          username: sessionStorage.getItem("username")
        })
      }

    render(){
        return(
            <div>
                <Header username = {this.state.username}/>
            <div style = {{display:"flex"}}>
           <Sidebar/>
           <div style={{backgroundColor:"#f5f6fa",width:'100%',}}>
            <div className="container" style={{marginTop:'120px',marginLeft:'70px'}}>
                <div id="banner" className="row" >
                    <img src="images/img-banner.png" id="banner-img"/>
                    <h4 id="lable">Your payment is complete!</h4>
                </div>
                <div id="bg" className="back_groud_panal">
                    <img src="images/img-imge-bg.png" className="bgimg"/>
                    <h5 id="msg">Want to enjoy an annual savings of <span>&#163;</span>{this.state.cardData.savingsOnBestMatch}? 
                        Switch to LBG-Club Lloyds Saver Account at a new AER of {this.state.cardData.aer}%. </h5>
                    <img src="images/ic-card-copy.png" className="lbgcard"/>
                    <button className='switch-button' onClick={() => alert('Your transaction is being processed. You will receive confirmation message wihin 24 hrs.')}>
                        <span id="switch-msg">Switch Now</span>
                        <i id="right-arrow" className='fas fa-arrow-right fa-lg'></i>
                    </button>
                </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}
