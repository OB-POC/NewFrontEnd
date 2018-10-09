import React from 'react';
import './style.css';
import { HashRouter as Router } from 'react-router-dom'
import Header from '../headernew'
import Sidebar from '../Sidebar'
import Banner from '../banner'
import Balance from '../Balances'


export default class Rel extends React.Component{
  constructor(props){
    super(props);

  }

    render(){
        return(
            <div  className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
              <Header/>
              <div style = {{display:"flex"}}>
                <Sidebar/>
              <div className='row' style = {{backgroundColor:"#f5f6fa",width:"100%"}}>
                <div className='col-9' >
                <Banner/>
                <Balance/>
                </div>
                <div className='col-3'>
                <img style = {{height:'670px',width:'260px',paddingTop:'20%',marginTop:'18%'}} src='images/image-ad@3x.png'/>
                </div>
                </div>
              </div>
            </div>
        );
    }
}
