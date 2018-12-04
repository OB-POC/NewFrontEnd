import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import Services from '../../../services'
import { Button, Icon, Modal, Radio} from 'semantic-ui-react'
import Header from '../../headernew'
import Sidebar from '../../sidebar'

export default class Rel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: true,
      debitData : [],
      creditData : [],
      accSumary: {},
      value: '',
      linesArr : []
    }
  }
  componentDidMount(){
    // window.addEventListener('beforeunload', this.componentCleanup);
    let lineVar = new LeaderLine(document.getElementById("fromCard"),document.getElementById("toCard"),{path:'straight',color:'#4a4a4a'})
    document.querySelector(".leader-line").style['z-index'] = '1000';
    this.setState((prevState,props)=>{

      prevState.linesArr.push(lineVar)
      console.log(prevState.linesArr)

      return {
          linesArr : prevState.linesArr
      }
  },()=>{
    console.log(this.state.linesArr)
  })
  }

  componentWillUnmount(){
    // this.componentCleanUp()
    // window.removeEventListener('beforeunload', this.componentCleanup);
    var lines = this.state.linesArr
    console.log('state1',this.state)
    lines.map(function(data,i){
        data.remove()
    })
    this.setState((prevState,props)=>({
      linesArr:[]
    }))
  }
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
    var token = sessionStorage.getItem("token");
    var qData = {token: token,
      data: this.props.location.state
    }
    Services.postSISuggestions(qData, function(data){
        console.log(data)
   }.bind(this),function(err){
       console.log(err);
   })
    this.props.history.push({pathname:'/managePaymentsSucceed',state:this.props.location.state})
  }
  handleChange = (e, { value }) => this.setState({ value })
    render(){
      console.log(this.props.location.state, "locProp");
          const {senders, receiver} = this.props.location.state
        return(
          <div className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
              <Header username = {this.state.accSumary.username} history = {this.props.history}/>
            <div style = {{display:"flex"}}>
                <Sidebar activeComponent = "wallet"/>
              <div className='main-content' style = {{backgroundColor:"#f5f6fa",width:"94.5%",paddingBottom:'20px'}}>
                <div>
                <h1 style = {{fontWeight: '300',marginTop:'20PX'}}>My Accounts</h1>
                </div>
                <div className = 'managePaymentsModal'>
                    <Link to='/wallet'>
                    <div className = 'closeIcon' tabIndex = '1'>
                      <img src = {'images/optimizings/close-icon.png'} />
                    </div>
                    </Link>

                    <div className = 'managePaymentsModalHeader'>
                    Manage my Payment instructions
                    </div>

                    <div className='manage-funds-advice-text'>
                    We’ve found that you have insufficient funds in the {receiver.receiverBank} account to pay off the upcoming Standing instruction.
                                      <br/>
                    <br/>
                    We recommend transferring £ {senders[0].amount} from {senders[0].senderBank} acoount to {receiver.receiverBank} account.
                    </div>

                    <div style={{display:'flex',justifyContent:'flex-start',marginTop:'20px',marginBottom:'30px'}}>
                        <div  id="fromCard" className='from-card' style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'151px',padding:'10px'}}>
                            <img src = {"./images/cards/debit/"+senders[0].senderBank+"@3x.png"} style={{width:'81px',height:'51px',marginRight:'14px'}}/>
                            <p className='bank-name' style={{marginRight:'40px',marginBottom:'0px'}}>{senders[0].senderBank}</p>
                            <p className='amount-transfer'>£ {senders[0].amount}</p>
                        </div>
                        <div id="toCard" className='to-card' style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px'}}>
                        <img src = {"./images/cards/debit/"+receiver.receiverBank+"@3x.png"} style={{width:'81px',height:'51px',marginRight:'14px'}}/>
                        <p className='bank-name'>{receiver.receiverBank}</p>
                        </div>
                    </div>

                     <div className = 'option' style = {{backgroundColor: (this.state.value === 'select') ? 'rgba(0, 106, 77, 0.14)' : 'rgba(196, 198, 205, 0.08)',display:'flex',justifyContent:'flex-start',alignItems:'center',paddingLeft:'50px'}}>

                          <Radio value = 'select' style={{paddingRight:'40px'}} checked={this.state.value === 'si'}
                            onChange={this.handleChange}/>
                          <div className='radio-text'>
                          Allow OPTIMA to manage my future payment transactions
                          </div>

                      </div>

                    <div style={{marginTop:'100px'}} className='pool-line'></div>
                     <div className = "flex-container">
                      <Link to='/wallet'><div className="flex-item" onClick = {this.onCancelClick}>CANCEL</div></Link>
                      <Link to='/optimizings'><div className="flex-item1" style = {{marginLeft: '310px'}}>Previous</div></Link>
                      <div className="flex-item1" onClick = {this.onNextClick}>NEXT</div>
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
