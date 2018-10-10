import React from 'react';
import Header from '../headernew';
import Sidebar from '../sidebar';
import ReactLoading from 'react-loading'
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
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
        setTimeout(this.fun.bind(this), 2000)
      }
      fun(){
        this.setState({
          load1: false
        })
        toast.success(`Your transaction is being processed. You will receive confirmation
          message wihin 24 hrs. !`, {
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
                    <h4 id="lable">Your payment is complete!</h4>
                </div>
                {this.state.load1 ? <ReactLoading type='bubbles' color='black' height={'20%'} width={'20%'} />
                :null
              }
                <div id="bg" className="back_groud_panal">
                    <h5 id="msg">Want to enjoy an annual savings of <span>&#163;</span>{this.state.cardData.savingsOnBestMatch}?
                        Switch to LBG - {this.state.cardData.cardTitle.replace('LBG -','')} at an {this.state.cardData.aer?'AER':'APR'} of {this.state.cardData.aer?this.state.cardData.aer:this.state.cardData.apr}%. </h5>
                       
                       {this.state.cardData.typeLeftOut =='credit'?
                        <img src = 'images/credit.png' style = {{width: '100%',paddingTop : '25px'}}/>:
                        <img src = 'images/capture.png' style = {{width: '100%',paddingTop : '25px'}}/>
                       }
                    <div style={{position:'relative',paddingTop : '25px'}}>
                    <img style= {{width: '18vw'}} src="images/ic-card-copy.png" className="lbgcard"/>
                    <button className='switch-button' style = {{cursor: 'pointer'}} onClick={this.notify.bind(this)}>
                        <span id="switch-msg">Switch Now</span>
                        <i id="right-arrow" className='fas fa-arrow-right fa-lg'></i>
                    </button>
                    </div>
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
