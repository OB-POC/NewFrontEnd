import React from 'react';
import './style.css';
import { HashRouter as Router } from 'react-router-dom'
import { Button, Icon, Modal, Radio} from 'semantic-ui-react'
import Header from '../headernew'
import Sidebar from '../sidebar'
import Services from '../../services'

export default class Rel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: true,
      debitData : [],
      creditData : [],
      accSumary: {}
    }
  }
  componentWillMount() {
      var token = sessionStorage.getItem("token");
      Services.totalBalancesCall(token, function(data){
          this.setState({accSumary : data});
          console.log(data)
     }.bind(this),function(err){
         console.log(err);
     })
      Services.creditCall(token, function(data){
          this.setState({creditData : data.banks});

     }.bind(this),function(err){
         console.log(err);
     })
      Services.debitCall(token,function(data){
          this.setState({debitData : data.banks});
      }.bind(this),function(err){
          console.log(err);
      })
  }
  handleClose = () => this.setState({ modalOpen: false })
    render(){
        return(
          <div className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
              <Header username = {this.state.accSumary.username} history = {this.props.history}/>
            <div style = {{display:"flex"}}>
                <Sidebar activeComponent = "wallet"/>
              <div className='main-content' style = {{backgroundColor:"#f5f6fa",width:"94.5%",paddingBottom:'20px'}}>
                <div>
                <h1 style = {{fontWeight: '300',marginTop:'20PX'}}>My Accounts</h1>
                </div>
                <div className = 'optimizingsModal'>
                    <div className = 'closeIcon'>
                      <img src = {'images/optimizings/close-icon.png'} />
                    </div>

                    <div className = 'optimizingsModalHeader'>
                    What would you like OPTIMA to do?
                    </div>
                    <div className = 'option'>
                      <div className = 'optionHeader'>
                      Manage my Payment instructions
                      </div>
                        <Radio className = 'radioStyle'/>
                      <div className = 'optionMeta'>
                      Manage my payment instructions
                      </div>
                    </div>
                    <div className = 'option'>
                      <div className = 'optionHeader'>
                      Manage my Payment instructions
                      </div>
                        <Radio className = 'radioStyle'/>
                      <div className = 'optionMeta'>
                      Manage my payment instructions
                      </div>
                    </div>
                    <div className = 'option'>
                      <div className = 'optionHeader'>
                      Manage my Payment instructions
                      </div>
                        <Radio className = 'radioStyle'/>
                      <div className = 'optionMeta'>
                      Manage my payment instructions
                      </div>
                    </div>
                    <div className = 'option'>
                      <div className = 'optionHeader'>
                      Manage my Payment instructions
                      </div>
                        <Radio className = 'radioStyle'/>
                      <div className = 'optionMeta'>
                      Manage my payment instructions
                      </div>
                    </div>
                </div>
              <div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}
