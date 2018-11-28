import React from 'react';
import './style.css';
import { HashRouter as Router } from 'react-router-dom'
import {CardDeck} from 'reactstrap';
import Header from '../headernew'
import Sidebar from '../sidebar'
import Banner from './banner'
import Card from './card'
import Services from '../../services'
import Advisory from './advisory'
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
          console.log(data)
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
      console.log(this.state.debitData, "Wallet");
        return(
            <div className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
              <Header username = {this.state.accSumary.username} history = {this.props.history}/>
              <Advisory />
            </div>
        );
    }
}
