import React from 'react';
import Paper from 'material-ui/Paper';
import ToolTip from 'react-portal-tooltip'

import './style.css';


export default class Balance extends React.Component{

  constructor(){
    super()
    this.state = {
    }
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }
  payoutClick(){
    this.props.history.push('payout')
  }
  showTooltip(i) {
      this.setState({tooltipId:i})
  }
  hideTooltip(i) {
      this.setState({tooltipId: 100})
  }

    render(){
      const context = this;
      const contextState = this.state;
      var credData = this.props.creditData.map(function (data,i) {
        var tooltipRelId = `c${i}`;
        var tooltipRelIdHash = `#c${i}`;
        var accData = data.accounts.map(function (data1,j) {
          return(
            <div key={j}>
            <div id={tooltipRelId}></div>
            {data1.accountType == 'M' ?
            <ToolTip active={contextState.tooltipId == i+'c'} position="top" arrow="left" parent={tooltipRelIdHash}>
            <div className='tooltip_background'>
           <div className='row'>
               <div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px'}}>
                   <img style={{height:'110px',width:'175px',marginLeft:'22px'}} src={'../../../../images/cards/Credit/'+data.bankName+'@2x.png'}/>
               </div>
               <div className='col-4' style={{paddingTop:'20px',paddingLeft:'55px'}}>
                   <div style={{display:'flex',flexDirection:'row',marginRight:'22px'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='bank'><small>Banks</small></div>
                           <div className='JP_Morgan_Chase'>{data.bankName}</div>
                           <div className='bank' style={{marginTop:'15px'}}><small>Remaining Full Term</small></div>
                           <div className='JP_Morgan_Chase'>{data1.remainingFullTerm}</div>
                       </div>
                   </div>
               </div>
               <div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px',paddingRight:'22px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='bank'>Principal Due</div>
                           <div className='JP_Morgan_Chase'>£ {data1.totalBalanceDue}</div>
                           <div className='bank' style={{marginTop:'15px'}}>Due date</div>
                           <div className='JP_Morgan_Chase' style={{color:'#ff5d64'}}>{new Date(data1.dueDate).toDateString()}</div>
                       </div>
                   </div>
               </div>
           </div>
           </div>
        </ToolTip>:
        <ToolTip active={contextState.tooltipId == i+'c'} position="top" arrow="left" parent={tooltipRelIdHash}>
        <div className='tooltip_background'>
       <div className='row'>
           <div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px'}}>
               <img style={{height:'110px',width:'175px',marginLeft:'22px'}} src={'../../../../images/cards/Credit/'+data.bankName+'@2x.png'}/>
           </div>
           <div className='col-4' style={{paddingTop:'20px',paddingLeft:'55px'}}>
               <div style={{display:'flex',flexDirection:'row',marginRight:'22px'}}>
                   <div style={{display:'flex',flexDirection:'column'}}>
                       <div className='bank'><small>Banks</small></div>
                       <div className='JP_Morgan_Chase'>{data.bankName}</div>
                       <div className='bank' style={{marginTop:'15px'}}><small>Credit limit</small></div>
                       <div className='JP_Morgan_Chase'>£ {data1.creditLimit}</div>
                       <div className='bank' style={{marginTop:'15px'}}><small>Available credit</small></div>
                       <div className='JP_Morgan_Chase'>£ {data1.availableCredit}</div>
                   </div>
               </div>
           </div>
           <div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px',paddingRight:'22px'}}>
               <div style={{display:'flex',flexDirection:'row'}}>
                   <div style={{display:'flex',flexDirection:'column'}}>
                       <div className='bank'>Minimum due balance</div>
                       <div className='JP_Morgan_Chase'>£ {data1.minBalanceDue||data1.minMonthlyPayment}</div>
                       <div className='bank' style={{marginTop:'15px'}}>Due date</div>
                       <div className='JP_Morgan_Chase' style={{color:'#ff5d64'}}>{new Date(data1.dueDate).toDateString()}</div>
                   </div>
               </div>
           </div>
       </div>
       </div>
    </ToolTip>
            }

            <b className='credit'>{data1.apr||data1.interestRate} % APR</b>
            <small className='credit' style={{color:'#ff5d64'}}><i className='fas fa-info-circle'></i> {(new Date(data1.dueDate).getDate() - new Date().getDate())} days</small>
            </div>
          )
        })
        var creditType = data.accounts.map(function (data2, k) {
          return (
          <div key={k} className='name-credit'><p>{data2.accountType}</p></div>
        )
        })
        var out = data.accounts.map(function (data2, k) {
          return (

          <div key={k} className='amount-credit'><h5><b style={{color:'#ff5d64'}}><span>&#163;</span>{data2.minMonthlyPayment || data2.totalBalanceDue}</b></h5></div>
        )
        })
        return(
          <div key={i} className='outer-layer row' style={{display:'flex'}} onMouseEnter={context.showTooltip.bind(this, i+'c')} onMouseLeave={context.hideTooltip.bind(this)}
          tabIndex = "1">
          <div className="col-9">
          <div className='img-credit'><img src={'../../../../images/cards/Credit/'+data.bankName+'.png'} /></div>
          <div className='detail-credit'>
               <div className='credit'>{data.bankName}
               <div id={tooltipRelId}></div>
               {accData}
               </div>
            </div>
            {creditType}
            <div className='line' id = {tooltipRelId}></div>
          </div>
          <div className="col-3">
            {out}
          </div>
          </div>
        )
      })
      var debitData = this.props.debitData.map(function (data,i) {
        var tooltipRelId = `d${i}`;
        var tooltipRelIdHash = `#d${i}`;
        var accData = data.accounts.map(function (data1, j) {
          return(
            <div key={j}>
            <div id={tooltipRelId}></div>
            <ToolTip active={contextState.tooltipId == i+'d'} position="top" arrow="left" parent={tooltipRelIdHash}>
            <div className='tooltip_background'>
           <div className='row'>
               <div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px'}}>
                   <img style={{height:'110px',width:'175px',marginLeft:'22px'}} src={'../../../../images/cards/debit/'+data.bankName+'@2x.png'}/>
               </div>
               <div className='col-4' style={{paddingTop:'20px',paddingLeft:'55px'}}>
                   <div style={{display:'flex',flexDirection:'row',marginRight:'22px'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='bank'><small>Banks</small></div>
                           <div className='JP_Morgan_Chase'>{data.bankName}</div>
                           <div className='bank' style={{marginTop:'15px'}}><small>Standing Instructions</small></div>
                           <div className='JP_Morgan_Chase'>£ {data1.standingInst}</div>
                           <div className='bank' style={{marginTop:'15px'}}><small>Min. Balance</small></div>
                           <div className='JP_Morgan_Chase'>£ {data1.minBalance}</div>
                       </div>
                   </div>
               </div>
               <div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px',paddingRight:'22px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='bank'>Available Balance</div>
                           <div className='JP_Morgan_Chase'>£ {data1.availableBalance}</div>
                       </div>
                   </div>
               </div>
           </div>
           </div>
        </ToolTip>
            <b className='credit'>{data1.interestRate}% AER</b>
            </div>
          )
        })
        var accType = data.accounts.map(function (data2, k) {
          console.log(data2, "data2");

          return (
            <div key={k} className='name-credit'><p>{data2.accountType}{data2.aaccountType}</p></div>
        )
        })
        var bal = data.accounts.map(function (data2, k) {
          return (
            <div key={k} className='amount-credit'><h5><b style={{color:'#4a4a4a'}}><span>&#163;</span>{data2.balance}</b></h5></div>
        )
        })
        return(
        <div key={i} className='outer-layer2 row' style={{display:'flex'}}
        onMouseEnter={context.showTooltip.bind(this, i+'d')}
        onMouseLeave={context.hideTooltip.bind(this)} tabIndex = "1">
          <div className = 'col-9'>
          <div className='img-credit'><img src={'../../../../images/cards/debit/'+data.bankName+'.png'} /></div>
             <div className='detail-credit'>
                  <div className='credit'>{data.bankName}
                  <div id={tooltipRelId}></div>
                  {accData}
                  </div>
                 </div>
                 {accType}
                 <div className='line-1' ></div>
                 </div>
                 <div className="col-3">
                 {bal}
                 </div>
             </div>
        )
      })
        return(
            <div className="balance-wrapper">
                <div style={{display:'flex'}} >
                <Paper className='paper' zDepth={2}style = {{marginLeft:'0px',marginRight:'0px',padding:'20px',width: '50%'}}>
                <div className='credit-accounts'  >Debit accounts</div>
                   {debitData}
                </Paper>
                <Paper className='paper' zDepth={2} style = {{padding:'20px',width: '50%'}}>
                   <div className='credit-accounts' style = {{paddingBotttom:'23px'}}>Credit accounts</div>
                   {credData}
                   <center id = 'outer-layer'>
                    <button className='btn payout-button optimize-btt optimizeBtn' onClick = {this.payoutClick.bind(this)}>
                      <div className="btn-text-wrapper">
                        <div className="btn-text">OPTIMIZE</div>
                        <div className="btn-arrow">
                          <i className='fas fa-arrow-right'></i>
                        </div>
                      </div>
                    </button>
                  </center>
                </Paper>
                </div>
            </div>
        )
    }
}
