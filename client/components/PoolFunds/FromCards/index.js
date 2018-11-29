import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import Header from '../../headernew'
import Sidebar from '../../sidebar'
import Services from '../../../services'

export default class PoolingFromCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: true,
      debitData : [],
      creditData : [],
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
    if(this.state.value == 'pool'){
      this.props.history.push('/poolfrom');
    }
    console.log('Next');
  }
cardClick = (i) => {
  console.log(i);
  this.setState({
    ['card'+i] : !this.state['card'+i]
  })
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
                <div className = 'pool-funds-modal'>

                    <Link to='/wallet'>
                    <div className = 'closeIcon' tabIndex = '1'>
                      <img src = {'images/optimizings/close-icon.png'} />
                    </div>
                    </Link>
                    <div className ='pool-header'>
                         Pool my funds
                    </div>
                    <div className='pool-subheader'>Select accounts to which you want to pool your funds</div>
                  <div className='row'>
                  {this.state.debitData.map((val,i) =>{

                    return(
                      !this.state['card'+i] ?

                      <div className='pool-card' style={{marginRight:'30px'}} tabIndex = "1" onClick = {this.cardClick.bind(this,i)}>
                          <div>
                              <img src = {"./images/img-card.png"} style = {{ width: '151px',height: '93px',margin:'23px'}}/>
                            </div>
                           <div>
                               <div className='row' style={{marginTop:'-20px'}}>
                                   <div className='col-8'>
                                   <div className='pool-bankName'>
                                     {val.bankName}
                                   </div>
                                   <div className='pool-aer_subscript'>
                                      {val.accounts[0].interestRate} % AER
                                   </div>
                                   </div>
                                   <div className='col-8'/>
                               </div>
                               <div className='row' style={{marginTop:'28px'}}>
                                   <div className='col-8' >
                                       <div className='pool-balance'>
                                           Available Balance
                                       </div>
                                       <div className='pool-amount' style={{marginTop:'5px'}}>
                                       £ {val.accounts[0].availableBalance}
                                       </div>
                                   </div>
                                </div>
                          </div>
                       </div>:
                       <div className='pool-card' tabIndex = "1" onClick = {this.cardClick.bind(this,i)} style={{ boxShadow: '0 14px 37px 0 rgba(0, 108, 77, 0.18)',backgroundColor:'rgba(0, 108, 77, 0.14)'}}>
                      <i className="fas fa-check-circle fa-lg float-right" style={{marginTop:'-5px',marginRight:'30px',color:'#2d8259'}}></i>
                            <div>
                              <img src = {"./images/img-card.png"} style = {{ width: '151px',height: '93px',margin:'23px'}}/>
                            </div>
                           <div>
                               <div className='row' style={{marginTop:'-20px'}}>
                                   <div className='col-8'>
                                   <div className='pool-bankName'>
                                     {val.bankName}
                                   </div>
                                   <div className='pool-aer_subscript'>
                                      {val.accounts[0].interestRate} % AER
                                   </div>
                                   </div>
                                   <div className='col-8'/>
                               </div>
                               <div className='row' style={{marginTop:'28px'}}>
                                   <div className='col-8' >
                                       <div className='pool-balance'>
                                           Available Balance
                                       </div>
                                       <div className='pool-amount' style={{marginTop:'5px'}}>
                                       £ {val.accounts[0].availableBalance}
                                       </div>
                                   </div>
                                </div>
                          </div>
                       </div>

                    )
                  })}
                     </div>
                     <div className='pool-line'></div>
                     <div className = "flex-container">
                      <Link to='/wallet'><div className="flex-item" onClick = {this.onCancelClick}>CANCEL</div></Link>
                      <Link to='/optimizings'><div className="flex-item1" style = {{marginLeft: '310px',
                      display: (this.state.value != '') ? '' : 'none'}}>Previous</div></Link>
                      <div className="flex-item1" onClick = {this.onNextClick}>NEXT</div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}
