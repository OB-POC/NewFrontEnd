import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import Header from '../../headernew'
import Sidebar from '../../sidebar'
import Services from '../../../services'

export default class PortingFromCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: true,
      debitData : [],
      cardData : [],
      accSumary: {}
    }
  }
  componentDidMount(){
    var token = sessionStorage.getItem("token");
    Services.debitCall(token,function(data){
         this.setState({debitData : data.banks});
         console.log(data.banks);
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
  onNextClick = () => {
    console.log(this.state)
      var notSelected = this.state.debitData.filter((val,ind)=> {return !this.state.cardData.includes(ind)})
      var selected = this.state.debitData.filter((val,ind)=> {return this.state.cardData.includes(ind)})
      this.props.history.push({
      pathname: '/portto',
      state : {cardData : notSelected,
      fromCards : selected,
      allCards: this.state.debitData
    }
    });
    }

    cardClick = (i) => {
      this.setState((prevState)=>{
        if(prevState.cardData.includes(i))
          prevState.cardData.splice(prevState.cardData.indexOf(i),1)
         else{
          prevState.cardData.push(i)
         }
        return {
      ['card'+i] : !this.state['card'+i],
      cardData : prevState.cardData
      }})
    }
    render(){
        return(
          <div className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
              <Header username = {this.state.accSumary.username} history = {this.props.history}/>
            <div style = {{display:"flex"}}>
                <Sidebar activeComponent = "wallet"/>
              <div className='main-content' style = {{backgroundColor:"#f5f8fa",width:"94.5%",paddingBottom:'20px'}}>
                <div>
                <h1 style = {{fontWeight: '300',marginTop:'20PX'}}>My Accounts</h1>
                </div>
                <div className = 'port-funds-modal'>
                    <Link to='/wallet'>
                    <div className = 'closeIcon' tabIndex = '1'>
                      <img src = {'images/optimizings/close-icon.png'} />
                    </div>
                    </Link>
                    <div className ='port-from-header'>
                         Port my funds from ?
                    </div>
                    <div className='port-subheader'>Select which account(s) you want to port</div>
                  <div className='row'>
                  {this.state.debitData.map((val,i) =>{

                    return(
                      !this.state['card'+i] ?

                      <div className='port-card' style={{marginRight:'30px'}} tabIndex = "1" onClick = {this.cardClick.bind(this,i)}>
                          <div>
                              <img src = {"./images/img-card.png"} style = {{ width: '151px',height: '93px',margin:'23px'}}/>
                            </div>
                           <div>
                               <div className='row' style={{marginTop:'-20px',marginLeft:'0px',marginRight:'0px'}}>
                                   <div className='col-8'>
                                   <div className='port-bankName'>
                                     {val.bankName}
                                   </div>
                                   <div className='port-aer_subscript'>
                                      {val.accounts[0].interestRate} % AER
                                   </div>
                                   </div>
                                   <div className='col-8'/>
                               </div>
                               <div className='row' style={{marginTop:'28px',marginLeft:'0px',marginRight:'0px'}}>
                                   <div className='col-8' >
                                       <div className='port-balance'>
                                           Available Balance
                                       </div>
                                       <div className='port-amount' style={{marginTop:'5px'}}>
                                       £ {val.accounts[0].balance - val.accounts[0].minBalance - val.accounts[0].standingInst > 0 ?
                                       val.accounts[0].balance - val.accounts[0].minBalance - val.accounts[0].standingInst : 0}
                                       </div>
                                   </div>
                                </div>
                          </div>
                       </div>:
                       <div className='port-card' tabIndex = "1" onClick = {this.cardClick.bind(this,i)} style={{ boxShadow: '0 14px 37px 0 rgba(0, 108, 77, 0.18)',backgroundColor:'rgba(0, 108, 77, 0.14)',marginRight:'30px'}}>
                      <i className="fas fa-check-circle fa-lg float-right" style={{marginTop:'-5px',marginRight:'30px',color:'#2d8259'}}></i>
                            <div>
                              <img src = {"./images/img-card.png"} style = {{ width: '151px',height: '93px',margin:'23px'}}/>
                            </div>
                           <div>
                               <div className='row' style={{marginTop:'-20px',marginLeft:'0px',marginRight:'0px'}}>
                                   <div className='col-8'>
                                   <div className='port-bankName'>
                                     {val.bankName}
                                   </div>
                                   <div className='port-aer_subscript'>
                                      {val.accounts[0].interestRate} % AER
                                   </div>
                                   </div>
                                   <div className='col-8'/>
                               </div>
                               <div className='row' style={{marginTop:'28px',marginLeft:'0px',marginRight:'0px'}}>
                                   <div className='col-8' >
                                       <div className='port-balance'>
                                           Available Balance
                                       </div>
                                       <div className='port-amount' style={{marginTop:'5px'}}>
                                       £ {val.accounts[0].balance - val.accounts[0].minBalance - val.accounts[0].standingInst > 0 ?
                                       val.accounts[0].balance - val.accounts[0].minBalance - val.accounts[0].standingInst : 0}
                                       </div>
                                   </div>
                                </div>
                          </div>
                       </div>

                    )
                  })}
                     </div>
                     <div className='port-line'></div>
                     <div className = "flex-container">
                      <Link to='/wallet'><div className="flex-item" onClick = {this.onCancelClick}>CANCEL</div></Link>
                      <Link to='/optimizings'><div className="flex-item1" style = {{marginLeft: '310px',
                      display: (this.state.value != '') ? '' : 'none'}}>Previous</div></Link>
                      <div className="flex-item1" style=  {{ display: (this.state.cardData.length > 0) ? '' : 'none'}} onClick = {this.onNextClick}>NEXT</div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}
