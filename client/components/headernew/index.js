import React from 'react';
import './style.css';
import { HashRouter as Router } from 'react-router-dom'


export default class Header extends React.Component{
  constructor(props){
    super(props);
    if(!sessionStorage.getItem('token'))
      this.props.history.push('/')
    this.onLogoutClick = this.onLogoutClick.bind(this)

  }
  obClick(){
    this.props.history.push('/home')
  }
  onLogoutClick(){
    sessionStorage.clear();
    this.props.history.push("/")
  }
    render(){
        return(
            <div>
              <div className = 'Rectangle-2' style = {{display:'flex',justifyContent:'space-between'}}>
                <div style = {{padding:"20px", cursor: 'pointer'}}
                tabIndex = '1' onClick = {this.obClick.bind(this)}>
                  <span className = 'OPEN-BANK'>OPTIMA</span>
                  <small style={{marginLeft:'5px',paddingTop:'10px'}}><i>Pay Less, Save More</i></small>
                </div>
                <div style= {{display:"flex",paddingRight:'50px'}}>
                  <div style= {{padding:"15px",borderRight:'solid 0.5px #979797'}}>
                    <img className = "notification-1"src = 'images/not.png' />
                  </div>
                  <div style= {{padding:"15px"}}>
                    <img className = "img_user" src = 'images/img-u.png' />
                  </div>
                  <div style= {{padding:"17px",paddingLeft:'0',display:'flex'}}>
                    <span className = 'Alice-Salas' style = {{paddingRight:'18px'}}>{this.props.username}</span>
                    <i className="fas fa-caret-down" style={{paddingTop:'3px'}}></i>
                  </div>

                  <i className="fas fa-sign-out-alt logout" style= {{padding:'20px',color:'rgb(216, 217, 222)'}} onClick = {this.onLogoutClick}></i>
                </div>
              </div>
            </div>

        );
    }
}
