import React from 'react';
import Paper from 'material-ui/Paper';
import ToolTip from 'react-portal-tooltip'

import './style.css';


export default class Balance extends React.Component{

  constructor(){
    super()
    this.state = {
      isTooltipActive: false
    }
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  showTooltip() {
      this.setState({isTooltipActive: true})
  }
  hideTooltip() {
      this.setState({isTooltipActive: false})
  }


    render(){
      const context = this;
      const contextState = this.state;
      var credData = this.props.creditData.map(function (data,i) {
        var accData = data.accounts.map(function (data1,j) {
          return(
            <div>
            <b className='credit'>{data1.apr} % APR</b><br/>
            <small className='credit' style={{color:'#ff5d64'}}><i className='fas fa-info-circle'></i> {(new Date(data1.dueDate).getDate() - new Date().getDate())} days</small>
            </div>
          )
        })
        var creditType = data.accounts.map(function (data2, k) {
          return (
          <div className='name-credit'><p>{data2.accountType}</p></div>
        )
        })
        var out = data.accounts.map(function (data2, k) {
          return (
          <div className='amount-credit'><h5><b style={{color:'#ff5d64'}}><span>&#163;</span>{data2.totalBalanceDue}</b></h5></div>
        )
        })
        return(
          <div className='outer-layer' id="outer-layer" style={{display:'flex'}} onMouseEnter={context.showTooltip.bind(this)} onMouseLeave={context.hideTooltip.bind(this)}>
                    <ToolTip active={contextState.isTooltipActive} position="top" arrow="left" parent="#outer-layer">
                    <div className='tooltip_background'>
                   <div className='row'>
                       <div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px'}}>
                           <img style={{height:'110px',width:'175px',marginLeft:'22px'}} src='../../../../images/card_img1.jpg'/>
                       </div>
                       <div className='col-4' style={{paddingTop:'20px',paddingLeft:'55px'}}>
                           <div style={{display:'flex',flexDirection:'row',marginRight:'22px'}}>
                               <div style={{display:'flex',flexDirection:'column'}}>
                                   <div className='bank'><small>Banks</small></div>
                                   <div className='JP_Morgan_Chase'>JP Morgan Chase</div>
                                   <div className='bank' style={{marginTop:'15px'}}><small>Credit limit</small></div>
                                   <div className='JP_Morgan_Chase'>£ 3000</div>
                                   <div className='bank' style={{marginTop:'15px'}}><small>Available credit</small></div>
                                   <div className='JP_Morgan_Chase'>£ 1200</div>
                               </div>
                           </div>
                       </div>
                       <div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px',paddingRight:'22px'}}>
                           <div style={{display:'flex',flexDirection:'row'}}>
                               <div style={{display:'flex',flexDirection:'column'}}>
                                   <div className='bank'>Minimum due balance</div>
                                   <div className='JP_Morgan_Chase'>£ 30</div>
                                   <div className='bank' style={{marginTop:'15px'}}>Due date</div>
                                   <div className='JP_Morgan_Chase' style={{color:'#ff5d64'}}>Thursday, Oct 11, 2018</div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
          </ToolTip>
          <div className='img-credit'><img src='../../../../images/card_img1.jpg' /></div>
          <div className='detail-credit'>
               <p className='credit'>{data.bankName}<br/>
               {accData}
               </p>
          </div>
          {creditType}
          <div className='line'></div>
          {out}
          </div>
        )
      })
      var debitData = this.props.debitData.map(function (data,i) {
        var accData = data.accounts.map(function (data1,j) {
          console.log(data1);
          return(
            <b className='credit'>{data1.interestRate}% AER</b>
          )
        })
        var accType = data.accounts.map(function (data2, k) {

          return (
            <div className='name-credit'><p>{data2.accountType}</p></div>
        )
        })
        var bal = data.accounts.map(function (data2, k) {
          return (
            <div className='amount-credit'><h5><b style={{color:'#4a4a4a'}}><span>&#163;</span>{data2.balance}</b></h5></div>
        )
        })
        return(
          <div className='outer-layer2' style={{display:'flex'}}>
             <div className='img-credit'><img src='../../../../images/card_img2.jpg' /></div>
             <div className='detail-credit'>
                  <p className='credit'>{data.bankName}<br/>
                  {accData}
                  </p>
                 </div>
                 {accType}
                 <div className='line-1'></div>
                 {bal}
             </div>
        )
      })
        return(
            <div className="conatiner-fluid">
                <div style={{display:'flex'}}>
                <Paper className='paper' zDepth={2} style = {{padding:'20px',width: '50%'}}>
                   <div className='credit-accounts'>Credit accounts</div>
                   {credData}
                   <center><button className='btn payout-button'>PAYOUT PLAN <i className='fas fa-arrow-right fa-lg'></i></button></center>
                </Paper>
                <Paper className='paper' zDepth={2}style = {{marginLeft:'0px',marginRight:'0px',padding:'20px',width: '50%'}}>
                <div className='credit-accounts'>Debit accounts</div>
                   {debitData}
                </Paper>
                </div>
            </div>
        )
    }
}
