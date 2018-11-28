import React from 'react';
import './style.css';
import Header from '../headernew';
import Sidebar from '../sidebar';
import Services from '../../services';
import ReactLoading from 'react-loading';
import Payout from './payout';
import CustomizePayout from './customizePayout';

export default class Rel extends React.Component{
  constructor(props){
    super(props);
    this.state={typeOfPayout:''};

  }

  parentMethod=()=>{
     this.setState({typeOfPayout:'customize'});
  }

    render(){
          return(this.state.typeOfPayout==='customize'?<CustomizePayout/>:<Payout method={this.parentMethod}/>)
        }

      }
