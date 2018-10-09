import React from 'react';
import './style.css';
import { HashRouter as Router } from 'react-router-dom'
import Header from '../headernew'
import Sidebar from '../Sidebar'
import Banner from '../banner'
import Balance from '../Balances'
import Services from '../../services'

export default class Rel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      debitData : [],
      creditData : [],
      accSumary: {}
    }
  }
  componentWillMount() {
      var token = sessionStorage.getItem("token");
      Services.totalBalancesCall(token, function(data){
          this.setState({accSumary : data});
     }.bind(this),function(err){
         console.log(err);
     })
      Services.creditCall(token, function(data){
          this.setState({creditData : data.banks});

     }.bind(this),function(err){
         console.log(err);
     })
      Services.debitCall(token,function(data){
          this.setState({debitData : data.banks});
      }.bind(this),function(err){
          console.log(err);
      })
  }
    render(){
        return(
            <div  className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
              <Header username = {this.state.accSumary.username}/>
              <div style = {{display:"flex"}}>
                <Sidebar/>
              <div className='row' style = {{backgroundColor:"#f5f6fa",width:"100%"}}>
                <div className='col-9' >
                <Banner accSumary = {this.state.accSumary} history = {this.props.history}/>
                <Balance creditData = {this.state.creditData} debitData = {this.state.debitData}/>
                </div>
                <div className='col-3'>
                <img style = {{height:'670px',width:'260px',paddingTop:'16%',marginTop:'18%'}} src='images/image-ad@3x.png'/>
                </div>
                </div>
              </div>
            </div>
        );
    }
}
