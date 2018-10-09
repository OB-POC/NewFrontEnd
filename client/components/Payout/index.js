import React from 'react';
import './style.css';
import Header from '../headernew'
import Sidebar from '../Sidebar'
import Services from '../../services'

export default class Rel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      payOutData: {},
      username: ''
    }
  }
  componentWillMount() {
      var token = sessionStorage.getItem("token");
      Services.payOutCall(token, function(data){
          this.setState({payOutData : data});
     }.bind(this),function(err){
         console.log(err);
     })
  }
  componentDidMount(){
    var username =
    this.setState({
      username: sessionStorage.getItem("username")
    })
  }
    render(){
        return(
            <div  className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
              <Header username = {this.state.username}/>
              <div style = {{display:"flex"}}>
                <Sidebar/>
              </div>
            </div>
        );
    }
}
