import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

import { Button, Icon, Modal, Radio} from 'semantic-ui-react'
import Header from '../headernew'
import Sidebar from '../sidebar'
import Services from '../../services'

export default class FinancialAdvisory extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: true,
      debitData : [],
      creditData : [],
      accSumary: {},
      value: ''
    }
  }
  componentWillMount() {
      var token = sessionStorage.getItem("token");
      Services.totalBalancesCall(token, function(data){
          this.setState({accSumary : data});
          console.log(data)
     }.bind(this),function(err){
         console.log(err);
     })
     //  Services.creditCall(token, function(data){
     //      this.setState({creditData : data.banks});
     //
     // }.bind(this),function(err){
     //     console.log(err);
     // })
      Services.debitCall(token,function(data){
          this.setState({debitData : data.banks});
      }.bind(this),function(err){
          console.log(err);
      })
  }
  handleChange = (e, { value }) => this.setState({ value })
  onCancelClick = () => {
    this.setState({
      value: ''
    })
  }
  onPreviousClick = () => {
    this.setState({
      value: ''
    })
  }
  onNextClick = () => {
    if(this.state.value == 'pool'){
      this.props.history.push('/poolfrom');
    }
    console.log('Next');
  }
    render(){
      let amount = 0
      this.state.debitData.forEach((bank) => {
        if(bank.accounts[0].balance - bank.accounts[0].minBalance - bank.accounts[0].standingInst > 0)
        amount = amount + bank.accounts[0].balance - bank.accounts[0].minBalance - bank.accounts[0].standingInst
     });
        return(
          <div className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
            <Header username = {this.state.accSumary.username} history = {this.props.history}/>
            <div style = {{display:"flex"}}>
                <Sidebar activeComponent = "wallet"/>
              <div className='main-content' style = {{backgroundColor:"#f5f6fa",width:"94.5%",paddingBottom:'20px'}}>
                <div>
                <h1 style = {{fontWeight: '300',marginTop:'20PX'}}>My Accounts</h1>
                </div>
                <div className = 'financialAdvisory'>
                    <Link to='/wallet'>
                    <div className = 'closeIcon' tabIndex = '1'>
                      <img src = {'images/financialAdvisory/ic-error.png'} />
                    </div>
                    </Link>
                    <div className='cardFinacialDetail'>
                      <div className='weeklysaving text-style-1'>
                        Based on our forecasts, you can safely spend £ 310 this week
                      </div>
                      <div className='cardDetails'>
                      <div id='availableCash' className='cashtype'>
                        Avaliable Cash
                        <label className='amount'>£ {amount}</label>
                      </div>
                      <div id='expenses' className='cashtype'>
                        Forecasted Expenses
                        <label className='amount'>£ 200</label>
                      </div>
                      <div id='income' className='cashtype'>
                        Forecasted Income
                        <label className='amount'>£ 300</label>
                      </div>
                      </div>
                    </div>
                    <img src='images/financialAdvisory/img-banner.png' className='adviseImg'>
                    </img>
                    <div className ='advisoryMsg text-style-1'>
                      Hey Alice!,  You can invest £100 for the next 6 months and earn £ 20,331!
                    </div>
                    <div className='seehow'>
                    <lable className='SEE-HOW'>See How</lable>
                    </div>
                </div>
              <div>
            </div>
            </div>
            </div>
        </div>
        );
    }
}
