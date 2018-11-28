import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default class Header extends React.Component{

    render(){
        return(
          <div className="sidebar-wrapper" style = {{display:"flex", flexDirection: 'column' }}>
            <div style = {{padding : "20px",borderLeft:(this.props.activeComponent == 'home')?'solid 3px #2d8259':'',marginTop : '121px'}}>
             <Link to='/home'> <img style = {{cursor:'pointer'}} className = 'ic_home' src = {this.props.activeComponent == 'home'?'./images/home.png':'./images/ichome.png'} /></Link>
            </div>
            <div style = {{padding : "20px",borderLeft:(this.props.activeComponent == 'wallet')?'solid 3px #2d8259':'',marginTop : '60px'}}>
              <Link to={{pathname: '/wallet', query : this.props.debitData}}><img className = 'ic_home' src = {this.props.activeComponent == 'wallet'?'./images/wallet.png':'./images/icwallet.png'} /></Link>
            </div>
            <div style = {{padding : "20px",marginTop : '60px'}}>
              <img className = 'ic_home' src = './images/report.png' />
            </div>
          </div>
        );
    }
}
