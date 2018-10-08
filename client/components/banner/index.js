import React from 'react';
import './style.css';

export default class Rel extends React.Component{
  constructor(props){
    super(props);

  }

    render(){
        return(
          <div>
            <p className = 'My-financials' style = {{marginLeft:'60px',marginTop:'38px'}}>My financials</p>
            <div className = 'Rectangle-3'>
              <div  style = {{display:'flex'}}>
                <div  style = {{display:'flex',width : '179px',flexDirection:'column',borderRight :'2px solid rgba(255, 255, 255, .5)',paddingRight :'11%'}}>
                <span className = 'Savings-accounts' style ={{whiteSpace: 'nowrap',display: 'block'}}>Debit Accounts</span>
                <span className = 'layer'>4</span>
                <span className = 'Credit-Accounts' style ={{whiteSpace: 'nowrap'}}>Credit Accounts</span>
                <span className = 'layer'>3</span>
                </div>
                <div  style = {{display:'flex',flexDirection:'column',paddingLeft :'11%'}}>
                <span className = 'Savings-accounts'>Debit Balance</span>
                <span className = 'layer' style ={{whiteSpace: 'nowrap'}}>£ 15,200.13</span>
                <span className = 'Credit-Accounts'>Credit outstanding</span>
                <span className = 'layer' style ={{whiteSpace: 'nowrap'}}>£ 7,288.29</span>
                </div>
                <div  style = {{display:'flex',flexDirection:'column',paddingLeft :'11%'}}>
                <span className = 'Want-to-reduce-your'>Want to reduce your credit outstanding balance by £ 4301?</span>
                  <div className = 'Rectangle-4' style = {{padding:"16px 45px 16px 36px",display:'flex',marginTop:'16px',cursor:'pointer'}}>
                    <span className = 'YES' >YES</span><i style = {{ color:'white'}} class="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
