import React from 'react';
import './style.css';
import { HashRouter as Router } from 'react-router-dom'


export default class Rel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      accSumary: {}
        }
  }
  // componentWillReceiveProps(newProps){
  //   console.log('here');
  //   this.setState({
  //     accSumary: newProps.accSumary
  //   })
  // }
    render(){
        return(
            <div className = 'Mask' >
              <img src = './images/icClose.PNG'/>
            </div>
        );
    }
}
