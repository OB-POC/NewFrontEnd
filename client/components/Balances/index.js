import React from 'react';
import Paper from 'material-ui/Paper';

import './style.css';


export default class Balance extends React.Component{

    componentWillMount(){
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip({
            title: function() {
                var element = $( this );
                if ( element.is( ".outer-layer" ) ) {
                    return ("<img style='height:110px,width:175px,margin-left:22px' src='images/card_img1.jpg'/></div>div class='col-4' style='padding-top:30px,padding-left:55px'><div style='display:flex,flex-direction:row,margin-right:22px'><div style='display:flex,flexDirection:column'><div class='bank'>Banks</div><div class='JP_Morgan_Chase'>JP Morgan Chase</div><div class='bank' style='margin-top:15px'>Credit limit</div><div class='JP_Morgan_Chase'>£ 3000</div><div class='bank' style='margin-top:15px'>Available credit</div><div class='JP_Morgan_Chase'>£ 1200</div></div></div> </div><div class='col-4' style='padding-top:30px,padding-left:22px,padding-right:22px'><div style='display:flex,flex-direction:row'><div style='display:flex,flex-direction:column'><div class='bank'>Minimum due balance</div><div class='JP_Morgan_Chase'>£ 30</div><div class='bank' style='margin-top:15px'>Due date</div><div class='JP_Morgan_Chase' style='color:#ff5d64'>Thursday, Oct 11, 2018</div></div></div></div></div></div>"
                      );
                }           
            }, html: true ,placement: "top"});
        });
     }

    render(){
      var credData = this.props.creditData.map(function (data,i) {
        var accData = data.accounts.map(function (data1,j) {
          return(
            <div>
            <b className='credit'>{data1.apr||data1.interestRate} % APR</b><br/>
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
          <div className='outer-layer' style={{display:'flex'}}>
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
            <div>
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
