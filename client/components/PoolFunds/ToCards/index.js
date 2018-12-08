import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import Header from '../../headernew'
import Sidebar from '../../sidebar'
import Services from '../../../services'

export default class PoolingToCard extends React.Component{
  constructor(props){
    console.log(props,"props");
    super(props);
    this.state = {
      modalOpen: true,
      debitData : [],
      creditData : [],
      accSumary: {},
      activeCards: -1,

    }
  }
  componentDidMount(){
    if(this.props.location.state)
     this.setState({debitData : this.props.location.state.cardData});
  }

  handleChange = (e, { value }) => this.setState({ value })

  onCancelClick = () => {
    this.setState({
      value: ''
    })
  }

  onNextClick = () => {
    this.props.history.push({
    pathname: '/confirmPool',
    state : {fromCards : this.props.location.state.fromCards,
             toCards : this.props.location.state.cardData.filter((val,ind)=> {return this.state['activeCards'] == ind})   }
  });
  }

  cardClick = (i) => {
  if(i != this.state.activeCards)
  {
    this.setState({
    'activeCards' : i
  })
  }
  else{
    this.setState({
    'activeCards' : -1
  })
  }
}



    render(){
      console.log(this.props.location.state);
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
                      this.state['activeCards'] != i ?

                      <div className='pool-card' style={{marginRight:'30px'}} tabIndex = "1" onClick = {this.cardClick.bind(this,i)}>
                          <div>
                              <img src = {"./images/img-card.png"} style = {{ width: '151px',height: '93px',margin:'23px'}}/>
                            </div>
                           <div>
                               <div className='row' style={{marginTop:'-20px',marginLeft:'0px',marginRight:'0px'}}>
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
                               <div className='row' style={{marginTop:'28px',marginLeft:'0px',marginRight:'0px'}}>
                                   <div className='col-8' >
                                       <div className='pool-balance'>
                                           Available Balance
                                       </div>
                                       <div className='pool-amount' style={{marginTop:'5px'}}>
                                       £ {val.accounts[0].balance - val.accounts[0].minBalance - val.accounts[0].standingInst > 0 ?
                                       val.accounts[0].balance - val.accounts[0].minBalance - val.accounts[0].standingInst: 0}
                                       </div>
                                   </div>
                                </div>
                          </div>
                       </div>:
                       <div className='pool-card' tabIndex = "1" onClick = {this.cardClick.bind(this,i)} style={{ boxShadow: '0 14px 37px 0 rgba(0, 108, 77, 0.18)',backgroundColor:'rgba(0, 108, 77, 0.14)',marginRight:'30px'}}>
                      <i className="fas fa-check-circle fa-lg float-right" style={{marginTop:'-5px',marginRight:'30px',color:'#2d8259'}}></i>
                            <div>
                              <img src = {"./images/img-card.png"} style = {{ width: '151px',height: '93px',margin:'23px'}}/>
                            </div>
                           <div>
                               <div className='row' style={{marginTop:'-20px',marginLeft:'0px',marginRight:'0px'}}>
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
                               <div className='row' style={{marginTop:'28px',marginLeft:'0px',marginRight:'0px'}}>
                                   <div className='col-8' >
                                       <div className='pool-balance'>
                                           Available Balance
                                       </div>
                                       <div className='pool-amount' style={{marginTop:'5px'}}>
                                       £ {val.accounts[0].balance - val.accounts[0].minBalance - val.accounts[0].standingInst > 0 ?
                                          val.accounts[0].balance - val.accounts[0].minBalance - val.accounts[0].standingInst: 0}
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
                      <Link to='/wallet'><button className="flex-item" onClick = {this.onCancelClick}>CANCEL</button></Link>
                      <Link to='/poolfrom'><button className="flex-item1" style = {{marginLeft: '310px',
                      display: (this.state.value != '') ? '' : 'none'}}>Previous</button></Link>
                      <button className="flex-item1" style = {{display: (this.state.activeCards == -1) ? "none": "" }}onClick = {this.onNextClick}>NEXT</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}
