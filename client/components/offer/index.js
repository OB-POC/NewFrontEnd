import React from 'react';
import Header from '../headernew';
import Sidebar from '../sidebar';
import ReactLoading from 'react-loading'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import services from '../../services'
import './style.css';
import { css } from 'glamor';

export default class Offerings extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            cardData : [],
            load: false,
            load1: false,
            toastId: null
        }
    }




    componentWillMount(){
        var context = this
            var token = sessionStorage.getItem("token");
          services.makePaymentCall(token,function (data) {
            services.offeringCall(token,function (data1) {
                console.log(data1);
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
        setTimeout(this.loader.bind(this),2000)
      }
      loader(){
        this.setState({
          load: true
        })
      }

      notify() {
          this.setState({
            load1: true
          })
        setTimeout(this.fun.bind(this), 500)
        //this.fun.bind(this)
      }
      fun(){
        this.setState({
          load1: false
        })
        toast.success(`Your transaction is being processed. You will receive confirmation
          message within 24 hrs. !`, {
            className: css({
          background: '#006a4d'
        }),
        position: toast.POSITION.BOTTOM_CENTER
      });
      }

    render(){
        console.log(this.state.cardData)
      return(
          this.state.load ?
            <div>
                <Header username = {this.state.username} history = {this.props.history}/>
            <div style = {{display:"flex"}}>
           <Sidebar/>
           <div style={{backgroundColor:"#f5f6fa",width:'100%',}}>
            <div className="container">
                <div id="banner" className="row" >
                    <img src="images/img-banner.png" id="banner-img"/>
                    <h4 id="lable">Your payments are moved to the standing instructions!</h4>
                </div>
               
                <div id="bg" className="back_groud_panal">
                  <div className='row'>
                    <div className='col-1'/>
                    <div className='col-6'>
                        <h5 className='classMsg' id="msg">{this.state.cardData.aer?<p>Are you hoping to get the best possible return on
                            your hard earned
                            savings?
                            Switch to` <strong>LGB - Club
                            Lloyds Saver Account</strong> and
                            enjoy a high rate of 0.6%
                            annual returns on your
                            savings ! </p>:<p>Save more annually by
                            Switching to <strong>LBG’s 0%
                            Purchase and Balance
                            Transfer</strong>, with a very low
                            Annual Percentage Rate
                            of 19.9% !</p>} 
                        </h5>
                    </div>
                    <div className='col-4'>
                        <div style={{position:'relative'}}>
                          <img style= {{width: '18vw'}} src="images/ic-card-copy.png" className="lbgcard"/>
                          <button className='switch-button' style = {{cursor: 'pointer'}} onClick={this.notify.bind(this)}>
                              <span id="switch-msg">Switch Now</span>
                              <i id="right-arrow" className='fas fa-arrow-right fa-lg'></i>
                          </button>
                        </div>
                    </div>
                    <div className = 'col-1'/>
                  </div>
                  {/* <div className='inner_banner_1'>
                        <div className='heading_text' style={{padding:'25px'}}>
                        <center>
                          <strong>Additional savings:</strong> You potential savings will be increased {this.state.cardData.savingsOnOffering}% by switching to llyods account.
                        </center>
                        </div>
                  </div> */}
                  

                       {this.state.cardData.typeLeftOut =='credit'?
                        <img src = 'images/credit.png' style = {{width: '100%',paddingTop : '25px'}}/>:
                        <img src = 'images/capture.png' style = {{width: '100%',paddingTop : '25px'}}/>
                       }
                  
                </div>

            </div>
            </div>
            </div>
            <ToastContainer autoClose={4000} closeButton={false} hideProgressBar={true} transition={Zoom}/>
            </div>:
            <div>
            <center><ReactLoading type='bubbles' color='black' height={'20%'} width={'20%'} /></center>
            </div>
        );
    }
}
