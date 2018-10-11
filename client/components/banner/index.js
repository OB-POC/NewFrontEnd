import React from 'react';
import './style.css';

export default class Rel extends React.Component{
  constructor(props){
    super(props);
  }
  yesClick(){
    this.props.history.push('./payout')
  }
    render(){
      console.log(this.props.accSumary, 'accSumary');
        return(
          <div>
            <div className="title">
              <p className = 'My-financials'>My financials</p>
            </div>
            <div className = 'banner-1' style={{display:'flex' ,backgroundImage: 'url("../../../../images/Banners/img-banner.png")',backgroundRepeat:'no-repeat'}}>
                <div className="banner-col">
                  <span className = 'Savings-accounts' style ={{whiteSpace: 'nowrap',display: 'block'}}>Debit Accounts</span>
                  <span className = 'layer'>{this.props.accSumary.noOfDebitAccounts}</span>
                  <span className = 'Credit-Accounts' style ={{whiteSpace: 'nowrap'}}>Credit Accounts</span>
                  <span className = 'layer'>{this.props.accSumary.noOfCreditAccounts}</span>
                </div>
                <div  style = {{display:'flex',flexDirection:'column'}}>
                <span className = 'Savings-accounts'  style ={{whiteSpace: 'nowrap'}}>Debit Balance</span>
                <span className = 'layer' style ={{whiteSpace: 'nowrap'}}>£ {this.props.accSumary.totalAvailableDebitBalance}</span>
                <span className = 'Credit-Accounts'  style ={{whiteSpace: 'nowrap'}}>Credit outstanding</span>
                <span className = 'layer' style ={{whiteSpace: 'nowrap'}}>£ {this.props.accSumary.totalAvailableCreditBalance}</span>
                </div>
                <div  style = {{display:'flex',flexDirection:'column'}}>
                <span className = 'Want-to-reduce-your' style={{paddingRight:'30px'}}>Looking for best option to
maximise your savings
and optimise your
expenses ? </span>
                  <div className = 'Rectangle-4' style = {{padding:"16px 45px 16px 36px",
                  display:'flex',marginTop:'16px',cursor:'pointer'}}
                   onClick = {this.yesClick.bind(this)} tabIndex = '1'>
                    <span className = 'YES' >YES</span><i style = {{ color:'white'}} className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
          </div>
        );
    }
}
