import React from 'react';
import './style.css';
import { HashRouter as Router } from 'react-router-dom'


export default class Rel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        }
  }

    render(){
        return(
            <div className = 'ill_accounts row' style={{backgroundImage : 'url("../../../../images/Banners/ill-accounts.png")',backgroundRepeat:'round',padding:'47px 18px',marginLeft:'0px'}}>
              <div className = 'col-4'>
              <p className = 'Total-Balance'>Total Balance</p>
              <p className = 'amount'>£ 10,900</p>
              </div>
              <div className = 'col-4'>
              <p className = 'Total-Balance'>Total Balance</p>
              <p className = 'amount'>2</p>
              </div>
            </div>
        );
    }
}
