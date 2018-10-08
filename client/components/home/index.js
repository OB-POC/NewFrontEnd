import React from 'react';
import './style.css';
import { HashRouter as Router } from 'react-router-dom'
import Header from '../headernew'
import Sidebar from '../Sidebar'
import Banner from '../banner'


export default class Rel extends React.Component{
  constructor(props){
    super(props);

  }

    render(){
        return(
            <div >
              <Header/>
              <div style = {{display:"flex"}}>
                <Sidebar/>
                <div style = {{backgroundColor:"#f5f6fa",width:"100%"}}>
                <Banner/>
                </div>
              </div>
            </div>
        );
    }
}
