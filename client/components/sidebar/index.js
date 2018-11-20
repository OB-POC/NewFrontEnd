import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={
      linkId:0
    }
    this.changeStyle = this.changeStyle.bind(this)
  }
  changeStyle(i){
    let id = i
    console.log(id)
   this.setState({linkId:id})
  }
    render(){
      let {linkId} = this.state
      console.log('linkid',linkId)

        return(
          <div className="sidebar-wrapper" style = {{display:"flex", flexDirection: 'column' }}history = {this.props.history}>
            <div  id="0" onClick={this.changeStyle.bind(this,0)} style = {{padding : "20px",borderLeft:(linkId==0)?'solid 3px #2d8259':0,marginTop : '121px'}}>
            <Link to='/home'> <img style = {{cursor:'pointer'}} className = 'ic_home' src = './images/home.png' /></Link>
            </div>
            <div id="1" onClick={this.changeStyle.bind(this,1)} style = {{padding : "20px",marginTop : '60px',borderLeft:(linkId==1)?'solid 3px #2d8259':0}}>
            <Link to='/savings'> <img className = 'ic_home' src = './images/wallet.png' /></Link>
            </div>
            <div style = {{padding : "20px",marginTop : '60px'}}>
              <img className = 'ic_home' src = './images/report.png' />
            </div>
          </div>
        );
    }
}
