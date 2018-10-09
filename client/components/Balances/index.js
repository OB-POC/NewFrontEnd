import React from 'react';
import Paper from 'material-ui/Paper';

import './style.css';


export default class Balance extends React.Component{
    render(){
      var credData = this.props.creditData.map(function (data,i) {
        var accData = data.accounts.map(function (data1,j) {
          return(
            <div>
            <b>{data1.apr}% APR</b>
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
          <div className='outer-layer row' style={{display:'flex'}}>
          <div className="col-9">
            <div className='img-credit'><img src='../../../../images/card_img1.jpg' /></div>
            <div className='detail-credit'>
                 <p className='credit'>
                  <div className="bankName">{data.bankName}</div>
                 {accData}
                 </p>
            </div>
            {creditType}
            <div className='line'></div>
          </div>
          <div className="col-3">
            {out}
          </div>
          </div>
        )
      })
      var debitData = this.props.debitData.map(function (data,i) {
        var accData = data.accounts.map(function (data1,j) {
          console.log(data1);
          return(
            <b>{data1.interestRate}% AER</b>
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
          <div className='outer-layer2 row' style={{display:'flex'}}>
            <div className = 'col-9'>
             <div className='img-credit'><img src='../../../../images/card_img2.jpg' /></div>
             <div className='detail-credit'>
                  <p className='credit'>{data.bankName}<br/>
                  {accData}
                  </p>
                 </div>
                 {accType}
                 <div className='line-1'></div>
                 </div>
                 <div className="col-3">
                 {bal}
                 </div>
             </div>
        )
      })
        return(
            <div>
                <div className="balance-wrapper" style={{display:'flex'}}>
                <Paper className='paper' zDepth={2}style = {{marginLeft:'0px',marginRight:'0px',padding:'20px',width: '50%'}}>
                <div className='credit-accounts'>Debit accounts</div>
                   {debitData}
                </Paper>
                <Paper className='paper' zDepth={2} style = {{padding:'20px',width: '50%'}}>
                   <div className='credit-accounts'>Credit accounts</div>
                   {credData}
                   <center>
                    <button className='btn payout-button optimize-btt'>
                      <div>OPTIMIZE</div>
                      <div>
                        <i style = {{width: '26px',height: '18.3px'}} className='fas fa-arrow-right'></i>
                      </div>
                    </button>
                  </center>
                </Paper>

                </div>
            </div>
        )
    }
}
