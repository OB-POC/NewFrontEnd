import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'
import StandingInstModal from '../transferFundsModal'

export default class Rel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        }
  }
componentDidMount(){
  console.log(this.props, "DidMount");
}
    render(){
      console.log(this.props.accounts, "Accounts");
      console.log(this.props.accounts.accounts[0].standingInstructions, "interestRate");
        return(
          <div className='card-style'>
                          <div>
                            <img src = {"./images/img-card.png"||"./images/cards/debit/"+this.props.accounts.bankName+"@3x.png"}style = {{ width: '314px',height: '194px',marginTop:'30px'}}/>
                          </div>
                         <div>
                             <div className='row' style={{marginTop:'-20px'}}>
                                 <div className='col-6' style={{paddingLeft:'0px'}}>
                                 <div className='bankName'>
                                     {this.props.accounts.bankName}
                                 </div>
                                 <div className='aer_subscript'>
                                     {this.props.accounts.accounts[0].interestRate} % AER
                                 </div>
                                 </div>
                                 <div className='col-6'/>
                             </div>
                             <div className='row' style={{marginTop:'28px'}}>
                                 <div className='col-6' >
                                     <div className='helper-text'>
                                         Total Balance
                                     </div>
                                     <div className='money-font' style={{marginTop:'5px'}}>
                                         £ {this.props.accounts.accounts[0].balance}
                                     </div>

                                 </div>
                                 <div className='col-6' >
                                     <div className='helper-text'>
                                         Payment instructions
                                     </div>
                                     <div className='money-font' style={{marginTop:'5px'}}>
                                         £ {this.props.accounts.accounts[0].standingInst}
                                     </div>
                                     <StandingInstModal standingInstructions = {this.props.accounts.accounts[0].standingInstructions} />
                                 </div>
                             </div>

                             <div className='row' style={{marginTop:'32px'}}>
                                 <div className='col-6'>
                                     <div className='helper-text'>
                                         Minimum balance
                                     </div>
                                     <div className='money-font' style={{marginTop:'5px'}}>
                                         £ {this.props.accounts.accounts[0].minBalance}
                                     </div>
                                 </div>
                                 <div className='col-6'>
                                     <div className='helper-text'>
                                         Unutilized balance
                                     </div>
                                     <div className='money-font' style={{marginTop:'5px'}}>
                                         £ {this.props.accounts.accounts[0].availableBalance > 0 ? this.props.accounts.accounts[0].availableBalance : 0}
                                     </div>
                                 </div>
                             </div>

                        </div>
                        <Link to='/optimizings'>
                        <div style={{marginBottom:'0px',marginTop:'40px'}}>

                             <div className='tranfer_merge_button'>
                             <span className = 'TRANSFER'>
                                 OPTIMIZE
                                 </span>
                             </div>
                         </div>
                         </Link>
                     </div>
        );
    }
}
