import React from 'react';
import './style.css';
import Header from '../headernew'
import Sidebar from '../sidebar'
import Services from '../../services'

export default class Rel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      payOutData: {},
      username: ''
    }
  }
  componentWillMount() {
      var token = sessionStorage.getItem("token");
      Services.payOutCall(token, function(data){
          this.setState({payOutData : data});
     }.bind(this),function(err){
         console.log(err);
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
            <div  className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
              <Header username = {this.state.username}/>
              <div style = {{display:"flex"}}>
                <Sidebar/>
                <div  style = {{backgroundColor:"#f5f6fa",width:"100%"}}>
                  <div className='Recommended_for_you' style={{marginLeft:'70px',marginTop:'38px'}}>
                  Recommended for you
                  </div>
                  <div style={{marginTop:'17px',marginLeft:'70px'}}>
                    <div style={{backgroundImage:'url("images/img-recommendations.png")',backgroundRepeat:'no-repeat',height:'170px',width:'1160px'}}>
                      <div style={{paddingTop:'29px',paddingLeft:'195px'}}>
                        <div className='heading_text'>
                          Hey Alice
                        </div>
                        <div style={{width:'609px'}} className='heading_text'>
                          We have listed the best pay-off options for you. Your available balance in Barclays £4600 & AER at present is 0.25%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='main_section' style={{marginTop:'17px',marginLeft:'70px'}}>
                      <div className='row' style={{marginTop:'33px',marginLeft:'48px',marginRight:'105px'}}>
                        <div className='col-4' style={{margin:'auto'}}>
                          <p className='main_section_heading_text'>Pay from</p>
                        </div>
                        <div className='col-4' style={{margin:'auto'}}>
                          <p className='main_section_heading_text'>Current outstanding amount</p>
                        </div>
                        <div className='col-4' style={{margin:'auto'}}>
                          <p className='main_section_heading_text'>Outstanding balance</p>
                        </div>
                      </div>
                      <div className='Line' style={{marginLeft:'48px',marginRight:'105px'}}/>
                      <div className='outer_layer_payout' style={{marginTop:'17px',marginLeft:'49px',borderRadius:'6px',backgroundColor:'#FFFFFF',boxShadow:' 0 5px 16px 0 rgba(0, 0, 0, 0.08)',width:'310px'}}>
                        <div style={{display:'flex',height:'77px',paddingTop:'15px',paddingRight:'14px'}}>
                          <div className='img_credit_payout'><img src='images/card_img1.jpg' /></div>
                          <div className='detail_credit'>
                              <p className=''>Halifax<br/>
                                <div>
                                  <b className=''>0.2 % APR</b><br/>
                                </div>
                              </p>
                          </div>
                          <div className='name_credit_payout'><p></p></div>
                          <div className='amount_credit'><h5><b style={{color:'#ff5d64'}}><span>&#163;</span> 2500</b></h5></div>
                        </div>
                        <div style={{display:'flex',height:'77px',paddingTop:'15px',paddingRight:'14px'}}>
                          <div className='img_credit_payout'><img src='images/card_img1.jpg' /></div>
                          <div className='detail_credit'>
                              <p className=''>Halifax<br/>
                                <div>
                                  <b className=''>0.2 % APR</b><br/>
                                </div>
                              </p>
                          </div>
                          <div className='name_credit_payout'><p></p></div>
                          <div className='amount_credit'><h5><b style={{color:'#ff5d64'}}><span>&#163;</span> 2500</b></h5></div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>              
            </div>
        );
    }
}
