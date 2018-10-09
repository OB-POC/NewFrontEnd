import React from 'react';
import './style.css';
import Header from '../headernew'
import Sidebar from '../sidebar'
import Services from '../../services'
import ReactLoading from 'react-loading'

export default class Rel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      payOutData: {},
      username: '',
      load: false
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
    setTimeout(this.loader.bind(this),2000)
  }
  loader(){
    this.props.history.push('./payout')
    this.setState({
      load: true
    })
  }
  handlePayment() {
    this.props.history.push('/offerings');
  }

    render(){
        return(
            this.state.load ?
            <div  className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
              <Header username = {this.state.username} history = {this.props.history}/>
              <div style = {{display:"flex"}}>
                <Sidebar/>
                <div  style = {{backgroundColor:"#f5f6fa",width:"100%",paddingBottom:'30px'}}>
                  <div className='Recommended_for_you'>
                  Recommended for you
                  </div>
                  <div className="headerImg">
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
                    <div className='row'>
                      <div className='outer_layer_payout col-xs-4' id="element-1" style={{marginTop:'17px',marginLeft:'49px',borderRadius:'6px',backgroundColor:'#FFFFFF',boxShadow:' 0 5px 16px 0 rgba(0, 0, 0, 0.08)',width:'310px'}}>
                        <div style={{display:'flex',height:'77px',paddingTop:'15px',paddingRight:'14px'}}>
                          <div className='img_credit_payout'><img src='images/card_img1.jpg' /></div>
                          <div className='detail_credit'>
                              <div className=''>Halifax<br/>
                                <div>
                                  <b className=''>0.2 % APR</b><br/>
                                </div>
                              </div>
                          </div>
                          <div className='name_credit_payout'><p></p></div>
                          <div className='amount_credit'><h5><b style={{color:'#ff5d64'}}><span>&#163;</span> 2500</b></h5></div>
                        </div>
                        <div style={{display:'flex',height:'77px',paddingTop:'15px',paddingRight:'14px'}}>
                          <div className='img_credit_payout'><img src='images/card_img1.jpg' /></div>
                          <div className='detail_credit'>
                              <div className=''>Halifax<br/>
                                <div>
                                  <b className=''>0.2 % APR</b><br/>
                                </div>
                              </div>
                          </div>
                          <div className='name_credit_payout'><p></p></div>
                          <div className='amount_credit'><h5><b style={{color:'#ff5d64'}}><span>&#163;</span> 2500</b></h5></div>
                        </div>
                      </div>

                      <div className='outer_layer_payout2 col-xs-4' id="element-2" style={{marginTop:'4%',marginLeft:'49px',borderRadius:'6px',backgroundColor:'#FFFFFF',boxShadow:' 0 5px 16px 0 rgba(0, 0, 0, 0.08)',height:'77px'}}>
                        <div style={{display:'flex',paddingTop:'15px',paddingRight:'14px'}}>
                          <div className='img_credit_payout'><img src='images/card_img1.jpg' /></div>
                          <div className='detail_credit'>
                              <div className=''>Halifax<br/>
                                <div>
                                  <b className=''>0.2 % APR</b><br/>
                                </div>
                              </div>
                          </div>
                          <div className='name_credit_payout'><p></p></div>
                          <div className='amount_credit'><h5><b style={{color:'#ff5d64'}}><span>&#163;</span> 2500</b></h5></div>
                        </div>
                      </div>
                      <div className='outer_layer_payout2 col-xs-4' style={{marginTop:'4%',marginLeft:'49px',borderRadius:'6px',backgroundColor:'#FFFFFF',boxShadow:' 0 5px 16px 0 rgba(0, 0, 0, 0.08)',height:'77px',width:'160px'}}>
                        <div style={{display:'flex',paddingTop:'15px',paddingRight:'14px'}}>
                        <div className='amount_credit'><h5><b style={{color:'#ff5d64',marginLeft:'34px'}}><span>&#163;</span> 2500</b></h5></div>
                        </div>
                      </div>
                      </div>
                      <br/>
                      <center>
                      <button className='btn payout-button optimize-btt' onClick={this.handlePayment.bind(this)}>
                      <div>AGREE & PAY</div>
                      <div>
                        <i style = {{width: '26px',height: '18.3px'}} className='fas fa-arrow-right'></i>
                      </div>
                    </button></center>
                    <br/>
                  </div>

                </div>
              </div>
            </div>:
            <div>
            <center><ReactLoading type='bubbles' color='black' height={'20%'} width={'20%'} /></center>
            </div>
        );
    }
}
