import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

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
      accSumary: {},
      value: ''
    }
  }
  componentWillMount() {
      var token = sessionStorage.getItem("token");
     //  Services.totalBalancesCall(token, function(data){
     //      this.setState({accSumary : data});
     //      console.log(data)
     // }.bind(this),function(err){
     //     console.log(err);
     // })
     //  Services.creditCall(token, function(data){
     //      this.setState({creditData : data.banks});
     //
     // }.bind(this),function(err){
     //     console.log(err);
     // })
     Services.getSISuggestions(token, function(data){
         this.setState({siSuggest : data});
         console.log(data, "getSI")
    }.bind(this),function(err){
        console.log(err);
    })
  }
  handleChange = (e, { value }) => this.setState({ value })
  onCancelClick = () => {
    this.setState({
      value: ''
    })
  }
  onPreviousClick = () => {
    this.setState({
      value: ''
    })
  }
  onNextClick = () => {
    if(this.state.value == 'pool'){
      this.props.history.push('/poolfrom');
    }else if(this.state.value == 'port'){
      this.props.history.push('/portfrom');
    }
    else if(this.state.value == 'advice'){
      this.props.history.push('/financialAdvice');
    }else if(this.state.value == 'si'){
      this.props.history.push({pathname: '/si', state: this.state.siSuggest})
    }else{
      console.log('Next');
    }
  }
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
                    <Link to='/wallet'>
                    <div className = 'closeIcon' tabIndex = '1'>
                      <img src = {'images/optimizings/close-icon.png'} />
                    </div>
                    </Link>

                    <div className = 'optimizingsModalHeader'>
                    What would you like OPTIMA to do?
                    </div>
                    <div className = 'option' style = {{backgroundColor: (this.state.value === 'si') ? 'rgba(0, 106, 77, 0.14)' : 'rgba(196, 198, 205, 0.08)'}}>
                      <div className = 'optionHeader'>
                      Manage my Payment instructions
                      </div>
                        <Radio value = 'si' className = 'radioStyle' checked={this.state.value === 'si'}
                          onChange={this.handleChange}/>
                      <div className = 'optionMeta'>
                      Manage my payment instructions
                      </div>
                    </div>
                    <div className = 'option' style = {{backgroundColor: (this.state.value === 'pool') ? 'rgba(0, 106, 77, 0.14)' : 'rgba(196, 198, 205, 0.08)'}}>
                      <div className = 'optionHeader'>
                      Pool my funds
                      </div>
                        <Radio value = 'pool' className = 'radioStyle' checked={this.state.value === 'pool'}
                        onChange={this.handleChange} />
                      <div className = 'optionMeta'>
                      Pool funds from one account to another
                      </div>
                    </div>
                    <div className = 'option' style = {{backgroundColor: (this.state.value === 'port') ? 'rgba(0, 106, 77, 0.14)' : 'rgba(196, 198, 205, 0.08)'}}>
                      <div className = 'optionHeader'>
                      Port my accounts
                      </div>
                        <Radio value = 'port' className = 'radioStyle' checked={this.state.value === 'port'}
                        onChange={this.handleChange}/>
                      <div className = 'optionMeta'>
                      Move my accounts to a new LBG account
                      </div>
                    </div>
                    <div className = 'option' style = {{backgroundColor: (this.state.value === 'advice') ? 'rgba(0, 106, 77, 0.14)' : 'rgba(196, 198, 205, 0.08)'}}>
                      <div className = 'optionHeader'>
                      Financial Advisory
                      </div>
                        <Radio value = 'advice' className = 'radioStyle' checked={this.state.value === 'advice'}
                        onChange={this.handleChange}/>
                      <div className = 'optionMeta'>
                      Use our Financial advisor tools to manage your funds better
                      </div>
                    </div>
                    <div className = "flex-container">
                      <Link to='/wallet'><button className="flex-item" onClick = {this.onCancelClick}>CANCEL</button></Link>
                      <button className="flex-item1" style = {{marginLeft: '310px', display: (this.state.value != '') ? '' : 'none'}}
                      onClick = {this.onNextClick}>NEXT</button>
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
