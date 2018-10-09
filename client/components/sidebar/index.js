import React from 'react';
import './style.css';

export default class Header extends React.Component{
  constructor(props){
    super(props);

  }

    render(){
        return(
          <div style = {{display:"flex", flexDirection: 'column' }}>
            <div style = {{padding : "20px",borderLeft:'solid 3px #2d8259',marginTop : '121px'}}>
              <img style = {{cursor:'pointer'}} className = 'ic_home' src = './images/home.png' />
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
