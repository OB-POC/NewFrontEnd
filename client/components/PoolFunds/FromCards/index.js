import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import Header from '../../headernew'
import Sidebar from '../../sidebar'

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
                    <div className='pool-card' style={{marginRight:'30px'}}>
                        <div>
                            <img src = {"./images/img-card.png"} style = {{ width: '151px',height: '93px',margin:'23px'}}/>
                          </div>
                         <div>
                             <div className='row' style={{marginTop:'-20px'}}>
                                 <div className='col-6'>
                                 <div className='pool-bankName'>
                                   bankName
                                 </div>
                                 <div className='pool-aer_subscript'>
                                    0.3% AER
                                 </div>
                                 </div>
                                 <div className='col-6'/>
                             </div>
                             <div className='row' style={{marginTop:'28px'}}>
                                 <div className='col-6' >
                                     <div className='pool-balance'>
                                         Available Balance
                                     </div>
                                     <div className='pool-amount' style={{marginTop:'5px'}}>
                                     balance
                                     </div>
                                 </div>
                              </div>
                        </div>
                     </div>
                     <div className='pool-card' style={{ boxShadow: '0 14px 37px 0 rgba(0, 106, 77, 0.16)',backgroundColor:'rgba(0, 106, 77, 0.14)'}}>
                    <i className="fas fa-check-circle fa-lg float-right" style={{marginTop:'-5px',marginRight:'10px',color:'#2d8259'}}></i>
                          <div>
                            <img src = {"./images/img-card.png"} style = {{ width: '151px',height: '93px',margin:'23px'}}/>
                          </div>
                         <div>
                             <div className='row' style={{marginTop:'-20px'}}>
                                 <div className='col-6'>
                                 <div className='pool-bankName'>
                                   bankName
                                 </div>
                                 <div className='pool-aer_subscript'>
                                    0.3% AER
                                 </div>
                                 </div>
                                 <div className='col-6'/>
                             </div>
                             <div className='row' style={{marginTop:'28px'}}>
                                 <div className='col-6' >
                                     <div className='pool-balance'>
                                         Available Balance
                                     </div>
                                     <div className='pool-amount' style={{marginTop:'5px'}}>
                                     balance
                                     </div>
                                 </div>
                              </div>
                        </div>

                     </div></div>
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
