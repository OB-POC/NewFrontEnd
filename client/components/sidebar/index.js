import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default class Header extends React.Component{
  constructor(props){
    super(props);

  }

    render(){
        return(
          <div className="sidebar-wrapper" style = {{display:"flex", flexDirection: 'column' }}>
            <div style = {{padding : "20px",borderLeft:'solid 3px #2d8259',marginTop : '121px'}}>
             <Link to='/home'> <img style = {{cursor:'pointer'}} className = 'ic_home' src = './images/home.png' /></Link>
            </div>
            <div style = {{padding : "20px",marginTop : '60px'}}>
              <img className = 'ic_home' src = './images/wallet.png' />
            </div>
            <div style = {{padding : "20px",marginTop : '60px'}}>
              <img className = 'ic_home' src = './images/report.png' />
            </div>
          </div>
        );
    }
}
